import React from "react";
import { UserGroupIcon, ServerIcon, CalendarIcon, ChartSquareBarIcon, CogIcon } from "@heroicons/react/outline";

function SideBar(props) {
  return (
    <div className="fixed inset-y-0 left-0 bg-white w-40">
      <h1 className="flex items-center justify-center text-2xl h-16 bg-purple-600 text-white font-bold">
        NuxtTrack
      </h1>

      <ul className="flex flex-col text-md font-medium h-full">
        <li className="flex flex-col justify-center items-center py-5 text-gray-500 cursor-pointer hover:text-purple-500">
          <UserGroupIcon className="w-7 h-7" /> Manage
        </li>

        <li className="flex flex-col justify-center items-center py-5 border-l-8 border-purple-500 text-purple-500 font-bold cursor-pointer">
          <ServerIcon className="w-7 h-7" /> Boards
        </li>

        <li className="flex flex-col justify-center items-center py-5 text-gray-500 cursor-pointer hover:text-purple-500">
          <CalendarIcon className="w-7 h-7" /> Schedule
        </li>

        <li className="flex flex-col justify-center items-center py-5 text-gray-500 cursor-pointer hover:text-purple-500">
          <ChartSquareBarIcon className="w-7 h-7" /> Report
        </li>

        <li className="flex flex-col justify-center items-center py-5 text-gray-500 mt-auto mb-16 cursor-pointer hover:text-purple-500">
          <CogIcon className="w-7 h-7" /> Settings
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
