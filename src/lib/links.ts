// import {
//     FiHome,
//     FiSettings
// } from 'react-icons/fi'
// import {
//     FaRobot,
//     FaCalendarDay,
//     FaVideo,
//     FaFunnelDollar,
//     FaWindowRestore
// } from 'react-icons/fa'
import { IconType } from "react-icons"
import { CSSProperties } from "react"

export interface LinkItemProps {
  name: string
  icon: IconType
  url: string
  options?: CSSProperties
}
