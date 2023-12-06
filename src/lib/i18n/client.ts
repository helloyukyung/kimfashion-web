'use client'

import i18next, {Namespace} from 'i18next'
import ChainedBackend from 'i18next-chained-backend'
import resourcesToBackend from 'i18next-resources-to-backend'
import {initReactI18next, useTranslation as useTranslationOrg} from 'react-i18next'
import {getOptions} from './settings'

i18next
  .use(initReactI18next)
  .use(ChainedBackend)
  .init({
    ...getOptions(),
    backend: {
      backends: [
        resourcesToBackend(
          (language: string, namespace: string) => import(`/public/locales/${language}/${namespace}.json`)
        )
      ],
      backendOptions: [
        {
          loadPath: '/locales/{{lng}}/{{ns}}.json'
        }
      ]
    }
  })

export function useTranslation(lng: string, ns: Namespace, options: {keyPrefix?: string} = {}) {
  if (i18next.resolvedLanguage !== lng) i18next.changeLanguage(lng)
  // @ts-ignore
  return useTranslationOrg(ns, options)
}
