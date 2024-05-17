import React from 'react'

function Blocks() {
  return (
    <div>

<button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium  focus:outline-none  rounded-lg border border-gray-200 hover:opacity-70 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 bg-[#542c88] text-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Add block</button>

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-200 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Block name
                </th>
                <th scope="col" className="px-6 py-3">
                    Number of rooms
                </th>
                
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap">
                    Apple MacBook Pro 17"
                </th>
               
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-white border-b  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap ">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    $1999
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-white  hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap ">
                    Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                    $99
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

    </div>
  )
}

export default Blocks