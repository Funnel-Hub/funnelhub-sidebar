import { useState, useEffect } from 'react'
import { ApiConfig, ApiResponse, fetchData } from 'src/lib/api'

export const useMenu = (config: ApiConfig) => {
  const [data, setData] = useState<ApiResponse[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDataAsync = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetchData(config)
        setData(response)
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err))
      } finally {
        setIsLoading(false)
      }
    };

    fetchDataAsync()
  }, [])

  return { data, isLoading, error }
}