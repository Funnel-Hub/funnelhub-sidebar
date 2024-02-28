import { CSSProperties, useEffect, useState } from 'react'
import { IconType } from 'react-icons'
import * as FaIcons from 'react-icons/fa'
import * as FiIcons from 'react-icons/fi'
import { ApiConfig, fetchData } from 'src/lib/api'

export interface SidebarOptions {
  name: string
  icon: IconType
  url: string
  options?: CSSProperties
}
export const useMenu = (config: ApiConfig) => {
  const [data, setData] = useState<SidebarOptions[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDataAsync = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetchData(config)
        const sidebarOptions = response.map((value) => {
          const iconPrefix = value.icon.substring(0, 2).toLowerCase();
          const iconLibrary = iconPrefix === 'fa' ? FaIcons : FiIcons;
          const Icon = iconLibrary[value.icon as keyof typeof iconLibrary];
          return {
            ...value,
            icon: Icon
          }
        })
        setData(sidebarOptions)
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