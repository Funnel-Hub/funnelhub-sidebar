import cx from "classnames";
import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { SidebarProps } from '../SidebarProps'
import Logo from '../Logo'
import { NavItem } from './NavItem'
import { useMenu } from 'src/hooks/useMenu'
import { SidebarMenuItem } from './SidebarMenuItem'

export const TailwindSidebar = ({
	menuData,
	onOpen,
	onClose,
	className,
	initialCollapsedState,
	config
}: SidebarProps & { className?: string }) => {
  const [isCollapsed, setIsCollapsed] = useState(initialCollapsedState ?? false);
  const { data, isLoading, error } = config
    ? useMenu(config)
    : { data: menuData, isLoading: false, error: null }

  return (
    <div
      className={cx(
        "relative block h-full border-r bg-gray-900 border-r-gray-800",
        isCollapsed ? "w-16" : "w-60",
		className
      )}
	>
      <div className={cx("mb-8 mx-8 flex h-20 items-center", isCollapsed && "flex-col")}>
        {!isCollapsed && (
          <Logo
		    size={8}
			collapsed={isCollapsed}
			paddingTop='15px'
			style={{ marginLeft: isCollapsed ? "0px" : "-15px" }}
		  />
        )}
        <div className="flex flex-row items-center">
          {isCollapsed ? (
            <Logo
              size={8}
			  paddingTop="32px"
              collapsed={isCollapsed}
              onClick={() => {
                setIsCollapsed(!isCollapsed);
                if (onOpen) onOpen();
              }}
            />
          ) : (
            <FaAngleLeft
              className="h-5 w-5"
			  style={{marginLeft: '4.6875rem'}}
              onClick={() => {
                setIsCollapsed(!isCollapsed);
                if (onClose) onClose();
              }}
            />
          )}
        </div>
      </div>
      {!isLoading && !error && data.map((item) => (
        <>
		  {(item.type === 'menu' && item.menu) ? (
			<SidebarMenuItem
			  key={item.name}
			  isCollapsed={isCollapsed}
			  icon={item.icon}
			  menu={item.menu}
			>
			  {!isCollapsed ? item.name : null}
			</SidebarMenuItem>
		  ) : (
			<NavItem
              isCollapsed={isCollapsed}
              key={item.name}
              url={item.url}
              Icon={item.icon}
              style={item.options}
            >
              {!isCollapsed ? item.name : null}
            </NavItem>
		  )}
		</>    
      ))}
    </div>
  );
};
