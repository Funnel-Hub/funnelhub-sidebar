import React from 'react'
import { Flex, Icon, Menu, MenuButton, MenuGroup, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { colors } from 'src/lib/theme'
import { MenuItemData } from 'src/hooks/useMenu'
import { IconType } from 'react-icons'

type MenuItemProps = {
  name: string
  icon: IconType
  menuData: MenuItemData[]
}

export const SidebarMenuItem = ({ name, icon: ItemIcon, menuData }: MenuItemProps) => (
  <Menu isLazy placement='right'>
    <MenuButton
	  display='flex'
	  alignItems='center'
	  width="calc(100% - 32px)"
	  mx={4}
	  p="4"
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
	  <Flex alignItems='center' gap='16px'>
		<ItemIcon size={16} />
		<Text as='span'>{name}</Text>
	  </Flex>
	</MenuButton>
    <MenuList>
      <MenuGroup title='Canais de Suporte' marginX='3' marginY='2' fontSize='0.875rem'>
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
