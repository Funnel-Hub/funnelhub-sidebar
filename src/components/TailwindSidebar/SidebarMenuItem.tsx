import React, { useEffect, useRef, useState } from 'react'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { MenuItemProps } from '@components/SidebarProps'
import cx from 'classnames'

export const SidebarMenuItem = ({ isCollapsed, children, icon: Icon, menu: { title, menuData } }: MenuItemProps) => {
  const [isActive, setIsActive] = useState(false)
  const menuListRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const toggleMenu = () => {
	setIsActive((prev) => !prev)
  }

  const closeMenu = () => {
	setIsActive(false)
  }

  useEffect(() => {
	const handler = (event: Event) => {
      if (!menuListRef.current?.contains(event.target as Node) && !menuButtonRef.current?.contains(event.target as Node)) {
		closeMenu()
	  }
	}
	
	window.addEventListener('click', handler)
  
	return () => {
	  document.removeEventListener('click', handler)
	}
  }, [isActive])

  return (
    <div className='relative'>
      <button
  	    id='menu-button'
  	    role='group'
		ref={menuButtonRef}
  	    className={cx(
  	  	  'appearance-none outline-2 outline-offset-2 outline-transparent flex items-center rounded-lg cursor-pointer text-[#ffffff] bg-transparent',
  	  	  'hover:bg-[#BF0D51] hover:text-white-200',
  	  	  isCollapsed
  	  	    ? 'h-12 w-[calc(100%-1rem)] mx-2 justify-center'
  	  	    : 'w-[calc(100%-2rem)] mx-4 p-4',
		  isActive && 'bg-[#BF0D51] text-white-200'
  	    )}
		onClick={toggleMenu}
  	  >
        <Icon className={cx("text-base hover:text-white-200", !isCollapsed && "mr-4 ")} />
        {children}
  	  </button>

	  <div
	    ref={menuListRef}
	    className={cx(
		  'absolute inset-[0_auto_auto_0] m-0 z-[1] origin-[left_center] opacity-100 outline-none',
		  'min-w-56 px-3 py-4 rounded-md border bg-gray-800',
		  isCollapsed
		    ? 'top-[-2.3125rem] left-[4rem]'
			: 'top-[-2.1875rem] left-[14.375rem]',
		  isActive
		    ? 'visible'
			: 'invisible'
		)}
	  >
		<p className='text-sm font-semibold'>{title}</p>
		<ul className='flex flex-col gap-3 mt-3'>
		  {menuData.map(({ name, icon: Icon, url }) => (
			<li>
			  <a href={url} target='_blank' onClick={closeMenu}>
				<div className='flex items-center justify-between'>
				  <div className='flex items-center gap-2'>
					<Icon size={18}/>
					{name}
				  </div>
				  <HiOutlineExternalLink size={15} />
				</div>
			  </a>
			</li>
		  ))}
		</ul>
	  </div>
    </div>
  )
}
