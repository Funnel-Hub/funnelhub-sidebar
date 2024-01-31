import React from 'react'
import { CSSProperties } from 'react'
import { IconType } from 'react-icons'
import cx from 'classnames'

interface NavItemProps {
  isCollapsed: boolean;
  Icon: IconType;
  url: string;
  style?: CSSProperties;
  children: React.ReactNode;
}

export const NavItem = ({ isCollapsed, Icon, url, style, children }: NavItemProps) => {
  return (
    <a href={url} style={style} className="font-normal focus:shadow-none">
      <div
        className={cx(
          "flex cursor-pointer items-center rounded-lg p-4 hover:bg-[#BF0D51] hover:text-[#F2F2F7]",
          isCollapsed ? "mx-2 flex-col" : "mx-4"
        )}>
        {Icon && <Icon className={cx("text-base hover:text-[#F2F2F7]", !isCollapsed && "mr-4 ")} />}
        {children}
      </div>
    </a>
  );
};
