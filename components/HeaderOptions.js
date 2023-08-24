import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import React from "react";
import HeaderOption from "./HeaderOption";
function HeaderOptions() {
  return (
    <div
      className="flex w-full text-gray-700 justify-evenly text-sm 
    lg:text-base lg:justify-start lg:space-x-36 lg:pl-52
    border-b-[1px]"
    >
      {/* Left */}
      <div className="flex space-x-6">
        <HeaderOption tabIndex="0" Icon={SearchIcon} title="All" />
        <HeaderOption tabIndex="0" Icon={PhotographIcon} title="Images" />
        <HeaderOption tabIndex="0" Icon={PlayIcon} title="Videos" />
        <HeaderOption tabIndex="0" Icon={NewspaperIcon} title="News" />
        <HeaderOption tabIndex="0" Icon={MapIcon} title="Maps" />
        <HeaderOption tabIndex="0" Icon={DotsVerticalIcon} title="More" />
      </div>
      {/* Right */}
      <div className="flex space-x-4">
        <p tabIndex="0" role={"toolbar"} className="link">
          Settings
        </p>
        <p tabIndex="0" className="link">
          Tools
        </p>
      </div>
    </div>
  );
}

export default HeaderOptions;
