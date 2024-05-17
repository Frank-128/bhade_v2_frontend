import React from 'react'

function Skeleton() {
  return (
    <div className='flex flex-around'>
        <div className='w-64 h-96 bg-slate-500/15 animate-pulse'></div>
        
        <div className='flex flex-col gap-24  animate-pulse'>
        <div className='w-48 h-24 rounded-lg bg-slate-500/15'></div>
        <div className='w-48 h-24 rounded-lg bg-slate-500/15'></div>
        <div className='w-48 h-24 rounded-lg bg-slate-500/15'></div>
        </div>
    </div>
  )
}

export default Skeleton