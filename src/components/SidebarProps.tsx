import { IconType } from 'react-icons'
import { MenuItemData } from 'src/hooks/useMenu'
import { ApiConfig } from "src/lib/api"
import { LinkItemProps } from "src/lib/links"

export interface SidebarProps {
  onClose?: () => void
  onOpen?: () => void
  initialCollapsedState?: boolean
  config?: ApiConfig
  menuData: Array<LinkItemProps>
}

export type MenuItemProps = {
  isCollapsed: boolean
  children: React.ReactNode
  icon: IconType
  menu: {
	title: string
    menuData: MenuItemData[]
  }
}
