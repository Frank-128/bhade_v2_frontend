"use client"
import { getBlocks } from "@/actions/block";
import { AddBlock } from "@/components/block/CreateBlock";
import { useQuery } from "@tanstack/react-query";
import React from "react";

function Blocks() {

    const {data,isLoading} = useQuery({
        queryKey:['blocks'],
        queryFn:()=>getBlocks()
    })

  return (
    <div className="space-y-2">
      <AddBlock />

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-200 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Block name
              </th>
              <th scope="col" className="px-6 py-3">
                Code
              </th>

              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
           {
           data?.map(({name,code}:{name:string,code:string})=> <tr key={code} className="bg-white border-b  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap"
              >
                {name}
              </th>

              <td className="px-6 py-4">{code}</td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>)
}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Blocks;
