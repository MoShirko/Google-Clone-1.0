import React from "react";
import { GlobeIcon } from "@heroicons/react/solid";

function Footer({theme}) {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500"
    id={theme === true ? 'dark' : 'light'}
    >
      <div className="grid grid-cols-1 md:gird-col-2 lg:grid-col-3 xl:grid-col-3 gap-y-4 px-8 py-3 grid-flow-row-dense">
        <div tabindex="0" className="flex justify-center items-center md:col-span-2 xl:col-span-3 xl:px-0 hover:underline cursor-pointer">
          <GlobeIcon tabindex="0" className="h-5 mr-1 text-green-700" />
          Our third decade of climate action: join us
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <p className ="hover:underline cursor-pointer" id={theme === true ? 'dark' : 'light'}>Advertising</p>
          <p className ="hover:underline cursor-pointer" id={theme === true ? 'dark' : 'light'}>Business</p>
          <p className ="hover:underline cursor-pointer" id={theme === true ? 'dark' : 'light'}>How Search works</p>
        </div>
        <div className ="flex justify-center space-x-8 md:ml-auto">
          <p className ="hover:underline cursor-pointer" id={theme === true ? 'dark' : 'light'}>Privacy</p>
          <p className ="hover:underline cursor-pointer" id={theme === true ? 'dark' : 'light'}>Terms</p>
          <p className ="hover:underline cursor-pointer" id={theme === true ? 'dark' : 'light'}>Settings</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
