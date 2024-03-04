import {News} from '@/api/news'
import NewsItem from './news-item'

interface NewsListProps {
  newsList: News[]
}

function NewsList({newsList}: NewsListProps) {
  return (
    <>
      {newsList && newsList.length > 0 ? (
        newsList.map((news, index) => <NewsItem news={news} key={index} />)
      ) : (
        <p>작성된 news가 없습니다.</p>
      )}
    </>
  )
}

export default NewsList
