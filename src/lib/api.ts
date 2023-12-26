import { CSSProperties } from "react"
import { IconType } from "react-icons"

export interface ApiResponse {
    name: string
    icon: IconType
    url: string
    options?: CSSProperties
}

export interface ApiConfig {
    url: string
    method: 'POST' | 'GET'
    token: string
    body?: any
}
 
export const fetchData = async (config: ApiConfig): Promise<ApiResponse[]> => {
    try {
        const response = await fetch(config.url, {
            method: config.method,
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${config.token}`
            },
            body: config.body ? JSON.stringify(config.body) : null,
        })
  
        if (!response.ok) {
            console.log(response)
            throw new Error('Network response was not ok')
        }
        return await response.json()
    } catch (error) {
        throw error
    }
  }