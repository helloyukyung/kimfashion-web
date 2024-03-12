import cheerio from 'cheerio'
import fetch from 'node-fetch'

export default async function handler(req: any, res: any) {
  const {url} = req.query

  try {
    const response = await fetch(url)
    const html = await response.text()
    const $ = cheerio.load(html)

    const ogImageUrl = $('meta[property="og:image"]').attr('content')
    const ogTitle = $('meta[property="og:title"]').attr('content')

    if (ogImageUrl || ogTitle) {
      res.status(200).json({ogImageUrl, ogTitle})
    } else {
      res.status(404).json({error: 'OpenGraph image not found.'})
    }
  } catch (error) {
    res.status(500).json({error: 'Error fetching OpenGraph image.'})
  }
}
