import { IconType } from "react-icons"
import { MdOutlineDashboard,MdBedroomParent  } from "react-icons/md";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { TbSunElectricity } from "react-icons/tb";
import { MdOutlineWaterDrop } from "react-icons/md";
import { FaMoneyBill, FaPeopleRoof } from "react-icons/fa6";
import { BiSolidReport } from "react-icons/bi";


interface SideBarProps{
    link:string,
    name:string,
    icon:IconType
}

export const sidebar_links :SideBarProps[] = [
    {
        link:"/",
        name:"Dashboard",
        icon:MdOutlineDashboard 
    },
    {
        link:"/blocks",
        name:"Blocks",
        icon:HiOutlineBuildingOffice2 
    },
    {
        link:"/property",
        name:"Property",
        icon:MdBedroomParent 
    },
    {
        link:"/electricity",
        name:"Electricity",
        icon:TbSunElectricity 
    },
    {
        link:"/water",
        name:"Water",
        icon:MdOutlineWaterDrop
    },
    {
        link:"/tenants",
        name:"Tenants",
        icon:FaPeopleRoof
    },
    {
        link:"/payments",
        name:"Payments",
        icon:FaMoneyBill
    },
    {
        link:"/reports",
        name:"Reports",
        icon:BiSolidReport
    }
]