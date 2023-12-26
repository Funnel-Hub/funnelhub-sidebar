import { ApiConfig } from "src/lib/api";

export interface SidebarProps {
    onClose?: () => void,
    onOpen?: () => void,
    initialCollapsedState?: boolean,
    config: ApiConfig
}