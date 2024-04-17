import React from 'react'
import { Flex, Icon, Menu, MenuButton, MenuGroup, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { colors } from 'src/lib/theme'
import { MenuItemProps } from '@components/SidebarProps'

export const SidebarMenuItem = ({ isCollapsed, children, icon: ItemIcon, menu: { title, menuData } }: MenuItemProps) => (
  <Menu isLazy placement='right'>
    <MenuButton
	  display='flex'
	  alignItems='center'
	  height={isCollapsed ? '48px' : 'unset'}
	  width={isCollapsed ? "calc(100% - 1rem)" : "calc(100% - 2rem)"}
	  mx={isCollapsed ? 2 : 4 }
	  p={isCollapsed ? 0 : "4" }
	  borderRadius="lg"
	  role="group"
	  cursor="pointer"
	  color="#ffffff"
	  _active={{
		bg: colors.red[500],
		color: colors.white[200],
	  }}
	  _hover={{
		bg: colors.red[500],
		color: colors.white[200],
	  }}
    >
	  <Flex
	    alignItems='center'
		gap={isCollapsed ? '0' : '16px'}
		justifyContent={isCollapsed ? 'center' : 'normal'}>
		<ItemIcon size={16} />
		<Text as='span'>{children}</Text>
	  </Flex>
	</MenuButton>
    <MenuList bgColor={colors.gray[800]}>
      <MenuGroup
	    title={title}
		marginX='3'
		marginY='2'
		fontSize='0.875rem'
		bgColor={colors.gray[800]}
	  >
		{menuData.map(({ name, url, icon }) => (
		  <MenuItem
			as='a'
			href={url}
			target='_blank'
			icon={<HiOutlineExternalLink size={15}/>}
			iconSpacing='0'
			display='flex'
			alignItems='center'
			flexDirection='row-reverse'
			bgColor={colors.gray[800]}
			_hover={{
			  bg: colors.gray[700]
			}}
		  >
			<Flex alignItems='center' gap={2}>
			  <Icon as={icon} boxSize="18px" />
			  {name}
			</Flex>
		  </MenuItem>
		))}
      </MenuGroup>
    </MenuList>
  </Menu>
)
