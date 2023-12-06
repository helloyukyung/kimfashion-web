const fs = require('fs')
const path = require('path')
const {authenticate} = require('@google-cloud/local-auth')
const {google} = require('googleapis')
const {set, camelCase} = require('lodash')

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']
const TOKEN_PATH = path.join(__dirname, 'token.json')
const CREDENTIALS_PATH = path.join(__dirname, 'credentials.json')
const SPREADSHEET_ID = '1guua8UZGAQ2A4xW2QyBzh75fLtLFbkkdVxIpVtE_bkE'
const LANGUAGES = ['ko', 'en']
const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'locales')
const prettier = require('prettier')

async function loadSavedCredentialsIfExist() {
  try {
    const content = fs.readFileSync(TOKEN_PATH).toString()
    const credentials = JSON.parse(content)
    return google.auth.fromJSON(credentials)
  } catch (err) {
    return null
  }
}

async function saveCredentials(client) {
  const content = fs.readFileSync(CREDENTIALS_PATH).toString()
  const keys = JSON.parse(content)
  const key = keys.installed || keys.web
  const payload = JSON.stringify({
    type: 'authorized_user',
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token
  })
  fs.writeFileSync(TOKEN_PATH, payload)
}

async function authorize() {
  let client = await loadSavedCredentialsIfExist()
  if (client) {
    return client
  }
  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH
  })
  if (client.credentials) {
    await saveCredentials(client)
  }
  return client
}

async function save(auth) {
  const sheets = google.sheets({version: 'v4', auth})
  const res = await sheets.spreadsheets.get({
    spreadsheetId: SPREADSHEET_ID
  })
  fs.rmSync(OUTPUT_PATH, {recursive: true, force: true})

  const sheetNames = res.data.sheets.map((s) => s.properties.title)
  const indexEntries = []
  for (const sheetName of sheetNames) {
    const {
      data: {values}
    } = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: sheetName
    })

    if (values?.length > 1) {
      const [info, ...rest] = values
      const keyIndex = info.findIndex((data) => data === 'key')
      if (keyIndex < 0) break
      const languages = LANGUAGES.map((l) => {
        return {
          lng: l,
          index: info.findIndex((data) => data === l),
          data: {}
        }
      })
      if (languages.filter((l) => l.index < 0).length > 0) {
        break
      }
      for (const value of rest) {
        languages.forEach((l) => {
          set(l.data, `${sheetName}.${value[keyIndex]}`, value[l.index])
        })
      }
      for (const language of languages) {
        for (const name of Object.keys(language.data)) {
          const dir = path.join(OUTPUT_PATH, language.lng)
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, {recursive: true})
          }
          fs.writeFileSync(path.join(dir, `${name}.json`), JSON.stringify(language.data[name], null, 2))
          indexEntries.push({lng: language.lng, name})
        }
      }
    }
  }

  const prettierOption = await prettier.resolveConfig(path.join(__dirname, '..', '.prettierrc.js'))

  const [l] = LANGUAGES
  const entries = indexEntries.filter((e) => e.lng === l)
  const text = ["import 'i18next'\n"]
  text.push(
    ...entries.map(
      (e) =>
        `import ${camelCase(e.name)} from './${path.relative(path.join(__dirname, '..'), OUTPUT_PATH)}/${l}/${
          e.name
        }.json'`
    )
  )
  const resources = `{${entries.reduce((prev, curr) => {
    prev.push(`'${curr.name}': typeof ${camelCase(curr.name)}`)
    return prev
  }, [])}}`
  text.push(`
    declare module 'i18next' {
     interface CustomTypeOptions {
       defaultNS: 'common'
       resources: ${resources}
      }
    }
  `)
  const dir = path.join(__dirname, '..')
  const data = await prettier.format(text.join('\n'), prettierOption)
  fs.writeFileSync(path.join(dir, 'i18next.d.ts'), data)
  // fs.writeFileSync(path.join(dir, 'src/@types/i18next.d.ts'), data)
}

// eslint-disable-next-line no-console
authorize().then(save).catch(console.error)
