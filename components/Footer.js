import React from "react";
import { GlobeIcon, SunIcon, MoonIcon } from "@heroicons/react/solid";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";

function Footer({darkTheme, theme}) {

  return (
    <footer
      className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500"
      id={theme === true ? "dark" : "light"}
    >
      <div className="grid grid-cols-1 md:gird-col-2 lg:grid-col-3 xl:grid-col-3 gap-y-4 px-8 py-3 grid-flow-row-dense">
        <div
          tabIndex="0"
          className="flex justify-center items-center md:col-span-2 xl:col-span-3 xl:px-0 hover:underline cursor-pointer"
        >
          <GlobeIcon tabIndex="0" className="h-5 mr-1 text-green-700" />
          Our third decade of climate action: join us
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <p
            tabIndex="0"
            className="hover:underline cursor-pointer"
            id={theme === true ? "dark" : "light"}
          >
            Advertising
          </p>
          <p
            tabIndex="0"
            className="hover:underline cursor-pointer"
            id={theme === true ? "dark" : "light"}
          >
            Business
          </p>
          <p
            tabIndex="0"
            className="hover:underline cursor-pointer"
            id={theme === true ? "dark" : "light"}
            data-testid="pTag"
          >
            How Search works
          </p>
        </div>
        <div className="flex justify-center space-x-8 md:ml-auto">
          <p
            tabIndex="0"
            className="hover:underline cursor-pointer"
            id={theme === true ? "dark" : "light"}
          >
            Privacy
          </p>
          <p
            tabIndex="0"
            className="hover:underline cursor-pointer"
            id={theme === true ? "dark" : "light"}
          >
            Terms
          </p>
          <Menu 
          className="hover:rounder-lg hover:shadow-md"
            menuButton={
              <MenuButton
                className="hover:underline cursor-pointer"
                id={theme === true ? "dark" : "light"}
              >
                Settings
              </MenuButton>
            }
            transition
          >
            <MenuItem
              id={theme === true ? "darkButton" : "light"}
              className="rounder-lg shadow-md whitespace-nowrap leading-6 cursor-pointer text-sm px-8 text-gray-800 width-100% hover:bg-gray-100 bg-white"
            >
              Search settings
            </MenuItem>
            <MenuItem
              id={theme === true ? "darkButton" : "light"}
              className="rounder-lg shadow-md whitespace-nowrap leading- cursor-pointer text-sm px-8 text-gray-800 width-100% hover:bg-gray-100 bg-white"
            >
              Advanced search
            </MenuItem>
            <MenuItem
              id={theme === true ? "darkButton" : "light"}
              className="rounder-lg shadow-md whitespace-nowrap leading-6 cursor-pointer text-sm px-8 text-gray-800 width-100% hover:bg-gray-100 bg-white"
            >
              Your data in Search
            </MenuItem>
            <MenuItem
              id={theme === true ? "darkButton" : "light"}
              className="rounder-lg shadow-md whitespace-nowrap leading-6 cursor-pointer text-sm px-8 text-gray-800 width-100% hover:bg-gray-100 bg-white"
            >
              Search history
            </MenuItem>
            <MenuItem
              id={theme === true ? "darkButton" : "light"}
              className="rounder-lg shadow-md whitespace-nowrap leading-6 cursor-pointer text-sm px-8 text-gray-800 width-100% hover:bg-gray-100 bg-white"
            >
              Search help
            </MenuItem>
            <MenuItem
              id={theme === true ? "darkButton" : "light"}
              className="whitespace-nowrap leading-6 cursor-pointer text-sm px-8 text-gray-800 width-100% hover:bg-gray-100 bg-white"
            >
              Search feedback
            </MenuItem>
            <MenuItem
              id={theme === true ? "darkButton" : "light"}
              className="whitespace-nowrap leading-1 cursor-pointer px-8 width-100% bg-gray-400 h-px border-gray-500"
            >
            </MenuItem>
            <MenuItem
              onClick={darkTheme}
              id={theme === true ? "darkButton" : "light"}
              className="flex whitespace-nowrap leading-10 cursor-pointer text-sm px-8 text-gray-800 width-100% hover:bg-gray-100 bg-white"
            >
              Dark Theme: {theme === true ? (<> On<MoonIcon className="mx-2 mt-2.5 items-center h-4"/></>) : (<> Off<SunIcon className="mx-2 mt-2.5 items-center h-4"/></>) }
            </MenuItem>
          </Menu>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
