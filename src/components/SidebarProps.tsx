import { ApiConfig } from "src/lib/api"
import { LinkItemProps } from "src/lib/links"

export interface SidebarProps {
  onClose?: () => void
  onOpen?: () => void
  initialCollapsedState?: boolean
  config?: ApiConfig
  menuData: Array<LinkItemProps>
}
