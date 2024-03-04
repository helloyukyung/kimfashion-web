import CurationForm from '@/components/admin/curation-form'
import NewsForm from '@/components/admin/news-form'
import Tab from '@/components/common/tab'

const tabs = [
  {
    title: 'News',
    children: <NewsForm />
  },
  {title: 'Curation', children: <CurationForm />},
  {title: 'LookInfo', children: <></>}
]

export default function Page() {
  return (
    <main className="flex w-full max-w-[var(--max-layout-width)] flex-col justify-center px-[var(--side-padding)]">
      <Tab tabs={tabs} />
    </main>
  )
}
