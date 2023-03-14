import React from "react";
import { SearchIcon, AtSymbolIcon, BellIcon } from "@heroicons/react/outline";
import Image from "next/image";

function TopBar(props) {
  return (
    <div className="h-16 pl-40 fixed bg-gradient-to-r from-purple-400 to-blue-500 w-full flex items-center justify-between pr-5 z-10">
      <div className="flex px-5  items-center">
        <SearchIcon className="w-5 h-5 text-white" />
        <input
          type="text"
          placeholder="Search for tasks..."
          className="bg-transparent border-0 text-white placeholder-white outline-none focus:ring-0 text-lg font-medium"
        />
      </div>

      <div className="flex space-x-6 items-center">
        <AtSymbolIcon className="w-6 h-6 text-white cursor-pointer" />
        <BellIcon className="w-6 h-6 text-white cursor-pointer" />

        <div className="flex items-center text-white">
          <h3 className="font-semibold mr-4 cursor-pointer">Jessie Larson</h3>
          <Image
            src="https://randomuser.me/api/portraits/men/75.jpg"
            width={36}
            height={36}
            alt="profile-user"
            className="rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
