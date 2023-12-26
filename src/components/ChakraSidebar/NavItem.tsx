import { Box, Flex, FlexProps, Icon } from "@chakra-ui/react"
import React, { CSSProperties } from "react"
import { IconType } from "react-icons"
import { colors } from "src/lib/theme"


interface NavItemProps extends FlexProps {
    isCollapsed: boolean
    icon: IconType
    url: string
    style?: CSSProperties
    children: React.ReactNode
}

export const NavItem = ({ isCollapsed, icon, url, style, children, ...rest }: NavItemProps) => {
    return (
        <Box
            as="a"
            href={url}
            style={{ textDecoration: 'none', ...style}}
            _focus={{ boxShadow: 'none' }}>
            <Flex
                align="center"
                p="4"
                mx={isCollapsed ? 2 : 4 }
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: colors.red[500],
                    color: colors.white[200],
                }}
                {...rest}>
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: colors.white[200],
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Box>
    )
}
