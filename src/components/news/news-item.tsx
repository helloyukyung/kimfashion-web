import {News} from '@/api/news'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import Hashtag from '../common/hashtag'
interface NewsItemProps {
  news: News
}
function NewsItem({news}: NewsItemProps) {
  return (
    <Link href={`/news/${news.id}`} className="w-full">
      <div className="flex items-center gap-[10px] pb-[12px] pl-[4px] pt-[8px]">
        <Image
          priority
          className="h-[32px] w-[32px] rounded-[100px]"
          width={32}
          height={32}
          src="/assets/kimfashion_logo.png"
          alt="logo"
        />
        <div>
          <span>김패션</span>
          <span className="px-[4px] text-[#737373]">·</span>
          <span className="text-[#737373]">{dayjs(news.created_at).format('YYYY.MM.DD')}</span>
        </div>
      </div>
      <Image
        priority
        className="max-h-[585px] w-full overflow-hidden rounded object-cover"
        width={480}
        height={480}
        src={news.representativeImage}
        alt="representative-image"
      />
      <div className="py-[8px]">
        <h2>
          <b className="mr-[4px]">김패션</b>
          {news.title}
        </h2>
        <div className="pt-[8px]">{news.hashtags?.map((hashtag, index) => <Hashtag text={hashtag} key={index} />)}</div>
        <hr className="my-[8px]" />
      </div>
    </Link>
  )
}

export default NewsItem
