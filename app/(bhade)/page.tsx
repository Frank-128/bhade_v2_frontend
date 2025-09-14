"use client";
import { Suspense } from "react";
import AssetCard from "@/components/AssetCard";
import DashboardCard from "@/components/DashboardCard";
import ElectricityBar from "@/components/ElecticityBar";
import { FaAngleDown } from "react-icons/fa";
import { FaBed, FaBuilding } from "react-icons/fa6";

import { IoFilterOutline } from "react-icons/io5";
import { MdOutlineDangerous } from "react-icons/md";
import { PiExportBold } from "react-icons/pi";
import { recent } from "@/constants/data";
import PieChart from "@/components/PieChart";

export default function Home() {

  return (
    <main className="flex-col flex  gap-5">
      {/* top bar in the dashboard */}
      <div className="flex justify-between ">
        <div>
          <p className="text-gray-600 text-xs sm:text-sm">Welcome back, Rico!</p>
          <p className="text-gray-400 max-sm:hidden">See your updated asset overview</p>
        </div>

        <div className="flex gap-2 items-center">
          <DashboardCard title="Filter" icon={IoFilterOutline} />
          <DashboardCard title="Export" icon={PiExportBold} />
          <DashboardCard title="Quick actions" icon={PiExportBold} />
        </div>
      </div>
      {/* end of top bar */}

      {/* asset card row  */}
      <div className="flex justify-between gap-4 overflow-x-scroll w-full">
        <AssetCard
          title="Total Blocks"
          icon={FaBuilding}
          percentage={3.5}
          amount={10}
        />
        <AssetCard
          title="Total Rooms"
          icon={FaBed}
          percentage={3.5}
          amount={100}
        />
        <AssetCard
          title="Occupied Rooms"
          icon={FaBuilding}
          percentage={3.5}
          amount={92}
        />
        <AssetCard
          title="Under maintainance"
          icon={MdOutlineDangerous}
          percentage={-7.5}
          amount={8}
        />
      </div>
      {/* end of asset card row */}

      {/* recent activities and total electricity usage per month in a year */}
      <div className="flex gap-3">
        <div className="h-[300px] pb-[50px] w-full lg:w-2/3 rounded-sm border-gray-500 border-[0.5px]">
        <div className="flex items-center text-gray-600 bg-gray-400/15 justify-between px-2 py-2">
            <p>Occupied rooms in blocks</p>
          </div>

          <Suspense fallback={"Chart loading..."}>
          <PieChart/>
          </Suspense>
        </div>
         <div className="h-[300px] overflow-y-scroll hidden lg:block w-2/3 rounded-sm border-gray-500 border-[0.5px]">
         <div className="flex items-center text-gray-600 bg-gray-400/15 justify-between px-2 py-2">
            <p>Recent activities</p>
            
          </div>
          <div className="flex flex-col gap-2 text-sm bg-gray-300/15 text-gray-500 divide-y-[0.4px]">
            {
              recent.map((item,index)=>(
                <div className="flex justify-between p-2" key={index}>
                  <div className="flex flex-col">
                    
                    <p>{item.item}</p>
                    <p className={item.status=="Billed" ? "bg-[#57237c] text-gray-200 text-center rounded-md p-1": item.status=="Paid" ? "bg-[#1e8237] text-gray-200 text-center rounded-md p-1":"bg-[#d2ca38] text-gray-500 text-center rounded-md p-1"}>{item.status}</p>

                  </div>
                  <div className="flex flex-col">
                    <p>
                    ID {item.id} | {item.created_at}
                    </p>
                    <p className="underline">
                      see details
                    </p>
                    </div>
                </div>
              ))
            }
          </div>

        </div>
      </div>
      {/* end of recent activities and electricity usage */}
      <div className="flex gap-3">
      <div className="h-[500px] pb-[50px] w-full rounded-sm border-gray-500 border-[0.5px]">
          
          <div className="flex items-center text-gray-600 bg-gray-400/15 justify-between px-2 py-2">
            <p>Total electricity usage of tenants</p>
            <span className="flex border-gray-400 border-[0.4px] w-fit items-center rounded-sm px-1">
              <p>2024</p>
              <FaAngleDown />
            </span>
          </div>
            
            <ElectricityBar />
          
        </div>
      </div>
    </main>
  );
}
