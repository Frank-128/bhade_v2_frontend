import React from 'react'
import { IconType } from 'react-icons'

interface DashboardProps{
    title: string,
    icon: IconType
}

function DashboardCard({title,icon}:DashboardProps) {
  return (
    <div className='border-gray border-[0.8px] rounded flex text-gray-700 items-center p-1 gap-x-1'>
        <span className='text-xs'>{title}</span>
        {React.createElement(icon)}
    </div>
  )
}

export default DashboardCard