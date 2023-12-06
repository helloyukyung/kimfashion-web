import {i18n} from '@/lib/i18n/index'
import {Namespace} from 'i18next'

export function getOptions(lng = i18n.fallbackLng, ns?: Namespace) {
  return {
    debug: false,
    supportedLngs: i18n.locales,
    fallbackLng: i18n.fallbackLng,
    lng,
    fallbackNS: i18n.defaultNS,
    defaultNS: i18n.defaultNS,
    ns: ns ?? i18n.defaultNS
  }
}
