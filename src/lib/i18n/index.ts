import {createInstance, Namespace} from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import {initReactI18next} from 'react-i18next/initReactI18next'
import {getOptions} from './settings'

export const fallbackLng = 'ko'
export const i18n = {
  defaultLocale: fallbackLng,
  fallbackLng,
  defaultNS: ['common'],
  locales: [fallbackLng, 'en']
}

export type Locale = (typeof i18n)['locales'][number]

const initI18next = async (lng: string, ns?: Namespace) => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) => import(`/public/locales/${language}/${namespace}.json`)
      )
    )
    .init({...getOptions(lng, ns)})
  return i18nInstance
}

export async function useTranslation(lng: string, ns: Namespace, options?: {keyPrefix?: string}) {
  const i18nextInstance = await initI18next(lng, ns)
  // @ts-ignore
  const t = i18nextInstance.getFixedT(lng, ns, options?.keyPrefix)
  return {t, i18n: i18nextInstance}
}
