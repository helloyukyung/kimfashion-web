import CurationForm from '@/components/admin/curation-form'
import LookInfoForm from '@/components/admin/look-info-form'
import NewsForm from '@/components/admin/news-form'
import Tab from '@/components/common/tab'

const tabs = [
  {
    title: 'news',
    children: <NewsForm />
  },
  {title: 'curation', children: <CurationForm />},
  {title: 'look-info', children: <LookInfoForm />}
]

export default function Page() {
  return (
    <main className="flex w-full max-w-[var(--max-layout-width)] flex-col justify-center px-[var(--side-padding)]">
      <Tab tabs={tabs} />
    </main>
  )
}
