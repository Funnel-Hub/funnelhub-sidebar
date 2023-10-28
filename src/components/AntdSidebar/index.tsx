import React, { CSSProperties, useState } from 'react'
import { Layout, Grid, LayoutProps, Menu, Button, Drawer } from 'antd'
import { LinkItems } from '../../lib/links'
import {
    BarsOutlined,
} from "@ant-design/icons"
import { FaAngleLeft } from 'react-icons/fa'
import Logo from '@components/Logo'
import { colors } from 'src/lib/theme'
import { SidebarProps } from '@components/SidebarProps'
import { useLink } from '@refinedev/core'

const { Sider } = Layout

interface AntdSidebarProps extends SidebarProps, LayoutProps {
}

export const AntdSidebar = ({ onClose, onOpen, initialCollapsedState, ...rest }: AntdSidebarProps) => {
    const [collapsed, setCollapsed] = useState(initialCollapsedState ?? false)
    const [mobileSiderOpen, setMobileSiderOpen] = useState(false)
    const breakpoint = Grid.useBreakpoint()
    const isMobile =
        typeof breakpoint.lg === "undefined" ? false : !breakpoint.lg
   
    const Link = useLink()

    const renderMenu = () => {
        return (
            <>
                <Menu
                    style={{ 
                        backgroundColor: colors.gray[900], 
                        color: colors.white[200] 
                    }}
                    mode="inline">
                        {LinkItems.map((link, index) => (
                            <Menu.Item 
                            key={String(index + 1)}
                            icon={React.createElement(link.icon)}
                            style={{
                                 borderRadius: '6px',
                                 color: colors.white[200]
                            }} 
                            onMouseEnter={(e) => { 
                                e.domEvent.currentTarget.style.backgroundColor = colors.red[500]
                                e.domEvent.currentTarget.style.color = colors.white[200]
                            }} 
                            onMouseLeave={(e) => { 
                                e.domEvent.currentTarget.style.backgroundColor = colors.gray[900]
                            }}> 
                            <Link to={link.url}>{link.name} </Link>
                            </Menu.Item> ))}  
                </Menu>
            </>
        )
    }
    const renderSider = () => {
        const siderStyles: CSSProperties = {
            backgroundColor: colors.gray[900],
            borderRight: `1px solid ${colors.gray[800]}`,
        }

        return (
            <>
                <Sider
                    style={siderStyles}
                    collapsible
                    collapsed={collapsed}
                    onCollapse={(collapsed, type) => {
                        if (type === "clickTrigger") {
                            setCollapsed(collapsed)
                        }
                    }}
                    collapsedWidth={60}
                    breakpoint="lg"
                    trigger={null}
                    {...rest}>
                    <div
                        style={{
                            width: collapsed ? "0px" : "200px",
                            paddingTop: "10px",
                            paddingLeft: collapsed ? "30px" : "16px",
                            marginBottom: "40px",
                            display: "flex",
                            justifyContent: collapsed
                                ? "center"
                                : "flex-start",
                            alignItems: "center",
                            height: "64px",
                            backgroundColor: colors.gray[900],
                            fontSize: "14px",
                        }}
                    >
                        <Logo
                            size={8}
                            collapsed={collapsed}
                            paddingTop="20px"
                            style={{marginLeft: collapsed ? "0px" : "-10px"}}
                            onClick={() => {
                                setCollapsed(false)
                                if (onOpen) onOpen()
                            }} />

                        {!collapsed &&
                            <FaAngleLeft
                                size={20}
                                style={{ color: colors.white[200], marginLeft: "55px"}}
                                onClick={() => {
                                    setCollapsed(true)
                                    if (onClose) onClose()
                                }} />}

                    </div>
                    {renderMenu()}
                </Sider>
            </>
        )
    }

    const renderDrawerSider = () => {
        const drawerButtonStyles: CSSProperties = {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            position: "fixed",
            top: 64,
            zIndex: 999,
        }
        return (
            <>
                <Drawer
                    open={mobileSiderOpen}
                    onClose={() => setMobileSiderOpen(false)}
                    placement="left"
                    closable={false}
                    width={200}
                    bodyStyle={{
                        padding: 0,
                    }}
                    maskClosable={true}
                >
                    <Layout>
                        <Layout.Sider
                            style={{
                                height: "100vh",
                                backgroundColor: colors.gray[900],
                                borderRight: `1px solid ${colors.gray[800]}`,
                            }}
                            {...rest}>
                            <div
                                style={{
                                    width: "200px",
                                    padding: "0 16px",
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    height: "64px",
                                    backgroundColor: colors.gray[900],
                                }}
                            >
                                <Logo
                                    size={8}
                                    paddingTop="15px"
                                    collapsed={collapsed} />
                            </div>
                            {renderMenu()}
                        </Layout.Sider>
                    </Layout>
                </Drawer>
                <Button
                    style={drawerButtonStyles}
                    size="large"
                    onClick={() => setMobileSiderOpen(true)}
                    icon={<BarsOutlined />}
                ></Button>
            </>
        )
    }

    if (isMobile) {
        return renderDrawerSider()
    }
    return renderSider()
}