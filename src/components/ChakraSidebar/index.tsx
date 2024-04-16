import { useColorModeValue } from "@chakra-ui/color-mode"
import { Box, BoxProps, Flex, Stack } from "@chakra-ui/layout"
import { Icon } from "@chakra-ui/react"
import React, { useState } from "react"
import { FaAngleLeft } from "react-icons/fa"
import { useMenu } from "src/hooks/useMenu"
import { SidebarProps } from "../../components/SidebarProps"
import { colors } from "../../lib/theme"
import Logo from "../Logo"
import { NavItem } from "./NavItem"
import { SidebarMenuItem } from './SidebarMenuItem'

interface ChakraSidebarProps extends SidebarProps, BoxProps {}

export const ChakraSidebar = ({
  onClose,
  onOpen,
  config,
  menuData,
  initialCollapsedState,
  ...rest
}: ChakraSidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(initialCollapsedState ?? false)
  const { data, isLoading, error } = config
    ? useMenu(config)
    : { data: menuData, isLoading: false, error: null }

  return (
    <Box
      bg={useColorModeValue(colors.gray[900], colors.gray[900])}
      borderRight="1px"
      borderRightColor={useColorModeValue(colors.gray[800], colors.gray[800])}
      w={isCollapsed ? { base: "full", md: 16 } : { base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Stack>
		<Flex
			h="20"
			alignItems="center"
			mx={!isCollapsed ? 8 : 4}
			marginBottom="30px"
		>
			{!isCollapsed && (
			<Logo
				size={8}
				paddingTop="15px"
				style={{ marginLeft: isCollapsed ? "0px" : "-15px" }}
				collapsed={isCollapsed}
			/>
			)}
			<Flex direction="row" alignItems="center">
			{isCollapsed ? (
				<Logo
				size={8}
				paddingTop="15px"
				collapsed={isCollapsed}
				onClick={() => {
					setIsCollapsed(!isCollapsed)
					if (onOpen) onOpen()
				}}
				/>
			) : (
				<Icon
				as={FaAngleLeft}
				w={5}
				h={5}
				marginLeft="75px"
				color={'#FFFFFF'}
				onClick={() => {
					setIsCollapsed(!isCollapsed)
					if (onClose) onClose()
				}}
				/>
			)}
			</Flex>
		</Flex>

		{!isLoading && !error && data?.map((link) => (
		  <>
		    {(link.type === 'menu' && link.menuData) ? (
			  <SidebarMenuItem
			    key={link.name}
			    name={link.name}
				icon={link.icon}
				menuData={link.menuData}
			  />
			) : (
			  <NavItem
			    isCollapsed={isCollapsed}
			    key={link.name}
			    url={link.url}
			    icon={link.icon}
			    style={link.options}
			  >
			    {!isCollapsed ? link.name : null}
			  </NavItem>
			)}
		  </>
		))}
	  </Stack>
    </Box>
  )
}
