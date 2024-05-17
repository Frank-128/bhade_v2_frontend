import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { IconType } from 'react-icons';

type Props = {
    title:string;
    amount:number;
    percentage:number;
    icon:IconType;
    
}

function AssetCard({title,amount,percentage,icon}: Props) {
  return (
    <div className='rounded border-gray-400 border-[0.5px] text-gray-500 p-4 lg:text-lg text-xs w-48 flex-col flex'>
        <div className='flex justify-between items-center gap-x-2'>
            {React.createElement(icon)}
            <span>
                <p className='font-bold text-gray-700'>{amount}</p>
                <p className='text-xs'>{title}</p>
            </span>
            <span className={cn('text-xs rounded p-1 text-white',percentage< 0 ?"bg-red-500":"bg-green-500 ")}>
                {percentage}%
            </span>
        </div>
        <Link className='underline self-end text-sm'  href={"/blocks"}>
            See all
    </Link>
    </div>
  )
}

export default AssetCard