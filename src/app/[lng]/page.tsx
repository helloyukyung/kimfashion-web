import {Locale, useTranslation} from '@/lib/i18n'

interface HomePageProps {
  params: {lng: Locale}
}
export default async function Home({params: {lng}}: HomePageProps) {
  const {t} = await useTranslation(lng, ['common'])
  return <main className="flex min-h-screen flex-col items-center justify-between p-24">{t('main.message')}</main>
}
