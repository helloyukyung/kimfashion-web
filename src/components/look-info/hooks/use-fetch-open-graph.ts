import {useEffect, useState} from 'react'

interface OpenGraphData {
  ogImageUrl: string
  ogTitle: string
}

// URL 문자열을 키로 하고 OpenGraphData 배열을 값으로 하는 객체 타입을 정의
const cache: Record<string, OpenGraphData> = {}

// useFetchOpenGraph 훅의 인자로 urls 배열을 받고, OpenGraphData 배열과 로딩 상태, 에러 메시지를 반환
function useFetchOpenGraph(urls: string[] | null) {
  const [data, setData] = useState<OpenGraphData[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!urls || urls.length === 0) return // URL이 없으면 아무 것도 하지 않음

    const fetchData = async () => {
      setLoading(true)
      const promises = urls.map(async (url) => {
        if (cache[url]) {
          return cache[url]
        } else {
          try {
            const response = await fetch(`/api/og-image?url=${encodeURIComponent(url)}`)
            const newData: OpenGraphData = await response.json()
            cache[url] = newData // 받은 데이터를 캐시에 저장
            return newData
          } catch (err) {
            console.error('Error fetching OpenGraph data:', err)
            setError('데이터를 불러오는 데 실패했습니다.')
            // 에러 처리를 위해 비어있는 데이터 반환; 실제 구현에서는 더 나은 에러 처리 방법 고민 필요
            return {ogImageUrl: '', ogTitle: ''}
          }
        }
      })

      try {
        const results = await Promise.all(promises)
        setData(results)
      } catch (err) {
        setError('데이터를 처리하는 중 오류가 발생했습니다.')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return {data, loading, error}
}

export default useFetchOpenGraph
