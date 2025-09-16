"use client"
import { sidebar_links } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { PiSignOut } from "react-icons/pi";

function Sidebar() {

    const pathname = usePathname()
    
  return (
    <div className="max-md:hidden flex justify-between flex-col pb-10 fixed w-[200px] border-gray border-r-[0.5px] h-[calc(100vh-64px)] ">
        
        <div className="flex flex-col items-center gap-x-3 gap-y-4 px-3 py-6">
        {sidebar_links.map((item, i) => (
        <Link key={i} className={`flex  items-center justify-center self-center  w-full ${pathname === (item.link) || pathname.split('/')[1] === item.link.split('/')[1] ? "text-[#711966]  rounded-lg" :""}`} href={item.link}>
          <div className='flex flex-start py-2 items-center w-1/2 gap-2'>
          {React.createElement(item.icon)}
            
<span className="text-xs">{item.name}</span>
          </div>
        </Link>
      ))}
        </div>

        <div className="flex items-center justify-center gap-2 border-t-[0.2px] border-gray-100 cursor-pointer">
            <PiSignOut />
            <span>Log out</span>
        </div>

    </div>
  );
}

export default Sidebar;
