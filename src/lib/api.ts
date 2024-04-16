import { CSSProperties } from "react"

export type ApiResponse = {
    name: string
    icon: string
    url: string
    options?: CSSProperties
	type?: 'button' | 'menu'
    menuData?: {
      name: string
      url: string
      icon: string
    }[]
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