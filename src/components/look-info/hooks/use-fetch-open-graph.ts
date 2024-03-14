import {useEffect, useState} from 'react'

interface OpenGraphData {
  ogImage: string
  ogTitle: string
}

function useFetchOpenGraph(urls: string[] | null) {
  const [data, setData] = useState<OpenGraphData[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!urls || urls.length === 0) return

    const fetchData = async () => {
      setLoading(true)
      const promises = urls.map(async (url) => {
        try {
          const response = await fetch(`/api/og-image?url=${encodeURIComponent(url)}`)
          const newData: OpenGraphData = await response.json()
          return newData
        } catch (err) {
          console.error('Error fetching OpenGraph data:', err)
          setError('데이터를 불러오는 데 실패했습니다.')
          return {ogImage: '', ogTitle: ''}
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
