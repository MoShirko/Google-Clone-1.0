import React from "react";
import { GlobeIcon } from "@heroicons/react/solid";

function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
      <div className="grid grid-cols-1 md:gird-col-2 lg:grid-col-3 xl:grid-col-3 gap-y-4 px-8 py-3 grid-flow-row-dense">
        <div tabindex="0" className="flex justify-center items-center md:col-span-2 xl:col-span-3 xl:px-0 hover:underline cursor-pointer">
          <GlobeIcon tabindex="0" className="h-5 mr-1 text-green-700" />
          Our third decade of climate action: join us
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <p tabindex="0" className="hover:underline cursor-pointer">Advertising</p>
          <p tabindex="0" className="hover:underline cursor-pointer">Business</p>
          <p tabindex="0" className="hover:underline cursor-pointer">How Search works</p>
        </div>
        <div className="flex justify-center space-x-8 md:ml-auto">
          <p tabindex="0" className="hover:underline cursor-pointer">Privacy</p>
          <p tabindex="0" className="hover:underline cursor-pointer">Terms</p>
          <p tabindex="0" className="hover:underline cursor-pointer">Settings</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
