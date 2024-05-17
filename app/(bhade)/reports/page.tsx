import Dropdown from "@/components/Dropdown";
import React from "react";
import { FaFileExport } from "react-icons/fa6";

function Reports() {
  return (
    <div>
      <div className="flex justify-between">
      <div className="text-2xl">Reports / Analytics</div>
      <div className="flex border-gray-300 border-[0.4px] items-center rounded-md gap-x-2 text-gray-600 p-2">
        <span>export</span>

        <FaFileExport />
        </div>
      </div>
      <div className="flex gap-2 items-end">
        <div>
          <label htmlFor="date">Date</label>

          <div
            id="dateRangeDropdown"
            className="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-80 lg:w-fit "
          >
            <div className="p-1" aria-labelledby="dateRangeButton">
              <div
                date-rangepicker
                datepicker-autohide
                className="flex items-center "
              >
                 <span className="mx-2 text-gray-500 dark:text-gray-400">
                  from
                </span>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <input
                    name="start"
                    type="date"
                    className="bg-gray-300 border  text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  border-gray-200 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Start date"
                  />
                </div>
                <span className="mx-2 text-gray-500 dark:text-gray-400">
                  to
                </span>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <input
                    name="end"
                    type="date"
                    className="bg-gray-300 border  text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  border-gray-200 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="End date"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
          <Dropdown title="Payment method" options={["Mpesa","Airtel","Visa","MasterCard"]} />
        {/* <div className="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow">
          
        </div> */}
      </div>
    </div>
  );
}

export default Reports;
