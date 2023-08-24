import React from "react";
import { GlobeIcon } from "@heroicons/react/solid";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import { useRef, useState, useEffect } from "react";

function Footer({ theme }) {
  useEffect(() => {
    if (theme === true) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setTheme(!theme);
  };

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
          {/* <p tabIndex="0" className ="hover:underline cursor-pointer" id={theme === true ? 'dark' : 'light'}>Settings</p> */}
          <Menu
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
              onClick={search}
              id={theme === true ? "darkButton" : "light"}
              className="rounder-lg shadow-md whitespace-nowrap leading-6 cursor-pointer text-sm px-8 text-gray-800 width-100% hover:bg-gray-100 bg-white"
            >
              Dark Theme: On
            </MenuItem>
            <MenuItem
              onClick={search}
              id={theme === true ? "darkButton" : "light"}
              className="whitespace-nowrap leading-6 cursor-pointer text-sm px-8 text-gray-800 width-100% hover:bg-gray-100 bg-white"
            >
              Dark Theme: On
            </MenuItem>
            <MenuItem
              onClick={search}
              id={theme === true ? "darkButton" : "light"}
              className="whitespace-nowrap leading-6 cursor-pointer text-sm px-8 text-gray-800 width-100% hover:bg-gray-100 bg-white"
            >
              Dark Theme: On
            </MenuItem>
          </Menu>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
