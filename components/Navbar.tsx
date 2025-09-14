"use client"
import React from "react";
import { FaBell, FaHome, FaMoon, FaSearch, FaSignOutAlt } from "react-icons/fa";
import { Input } from "./ui/input";
import { Avatar,AvatarImage,AvatarFallback } from "./ui/avatar";
import { MdOutlineMenu } from "react-icons/md";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { sidebar_links } from "@/constants";
import { PiSignOut } from "react-icons/pi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {useQuery} from '@tanstack/react-query';
import { getMyUserDetail, getUserDetail } from "@/actions/user";
import { Badge } from "./ui/badge";


function Navbar() {

  const pathname = usePathname();
  const {data} = useQuery({
    queryKey:['userData'],
    queryFn:()=>getMyUserDetail()

  })

  return (
    <div className="fixed h-16 w-screen p-8 bg-[#542c88] z-50 opacity-100  flex items-center justify-between text-white shadow-md">
      <div className="flex items-center gap-x-5 md:gap-x-10 md:w-1/3 w-fit">
        <FaHome />

        <span className="items-center justify-between flex bg-purple border-white border pr-2 w-9/12  rounded">
          <Input
            placeholder="Search"
            type="text"
            className="border-none bg-transparent outline-none"
          />
          <FaSearch />
        </span>
      </div>

      <div className="md:flex gap-x-4 items-center hidden">
        <div className="flex gap-x-2 items-center">
          <Badge  variant={"secondary"}>
            <span>admin</span>
          </Badge>
          <span className="px-2 cursor-pointer hover:scale-105 border-gray-100 rounded border-[0.4px]">
            Light
          </span>
          {<FaMoon />}
          <span className="px-2 cursor-pointer hover:scale-105 border-gray-100 bg-purple-950 rounded border-[0.4px]">
            Dark
          </span>
        </div>

        <div className="relative w-2 h-2">
          <FaBell />
          <span className="w-3 h-3 bg-red-500 absolute top-0  rounded-full" />
        </div>

        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

      </div>

     <div className="md:hidden">
     <Sheet>
          <SheetTrigger >
            <span><MdOutlineMenu/> </span>
          </SheetTrigger>
          <SheetContent side={"left"} className="bg-[#542c88]">
            <SheetHeader>
              <SheetTitle className="font-bold text-white animate-pulse text-center font-mono">
                BHADE
              </SheetTitle>
              
            </SheetHeader>
            <div className="min-md:hidden flex justify-between flex-col pb-10  w-full   ">
        
        <div className="flex flex-col items-center gap-x-3 gap-y-4 px-3 py-6">
        {sidebar_links.map((item, i) => (
        <Link key={i} className={`flex  items-center justify-center self-center  w-full ${pathname === (item.link) || pathname.split('/')[1] === item.link.split('/')[1] ? "text-white font-bold border-white border-[0.2px] rounded-lg" :"text-gray-300 "}`} href={item.link}>
          <div className='flex flex-start py-2 items-center w-1/2 gap-x-5'>
          {React.createElement(item.icon)}
            
<span className="text-xs">{item.name}</span>
          </div>
        </Link>
      ))}
        </div>

        <div className="flex items-center justify-center text-white font-bold hover:scale-105 py-4 gap-2 border-t-[0.2px] border-gray-100 cursor-pointer">
            <PiSignOut />
            <span>Log out</span>
        </div>

    </div>
            
          </SheetContent>
        </Sheet>

     </div>

    </div>
  );
}

export default Navbar;
