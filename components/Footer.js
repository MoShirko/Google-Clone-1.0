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
          <GlobeIcon tabIndex="0" className="h-5 mr-1 text-green-700"/>
         <a href="https://sustainability.google/?utm_source=googlehpfooter&utm_medium=housepromos&utm_campaign=bottom-footer&utm_content=">Our third decade of climate action: join us</a>
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <p
            tabIndex="0"
            className="hover:underline cursor-pointer"
            id={theme === true ? "dark" : "light"}
          >
          <a href="https://ads.google.com/intl/en_us/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">Advertising</a>
          </p>
          <p
            tabIndex="0"
            className="hover:underline cursor-pointer"
            id={theme === true ? "dark" : "light"}
          >
          <a href="https://smallbusiness.withgoogle.com/?subid=us-en-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google&utm_medium=ep&utm_campaign=google_hpbfooter&utm_content=google_hpbfooter&gmbsrc=us-en_US-et-gs-z-gmb-s-z-u~sb-g4sb_srvcs-u#!/">Business</a>
          </p>
          <p
            tabIndex="0"
            className="hover:underline cursor-pointer"
            id={theme === true ? "dark" : "light"}
            data-testid="pTag"
          >
          <a href="https://www.google.com/search/howsearchworks/?fg=1">How Search works</a>
          </p>
        </div>
        <div className="flex justify-center space-x-8 md:ml-auto">
          <p
            tabIndex="0"
            className="hover:underline cursor-pointer"
            id={theme === true ? "dark" : "light"}
          >
          <a href="https://policies.google.com/privacy?hl=en&fg=1">Privacy</a>
          </p>
          <p
            tabIndex="0"
            className="hover:underline cursor-pointer"
            id={theme === true ? "dark" : "light"}
          >
          <a href="https://policies.google.com/terms?hl=en&fg=1">Terms</a>
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
             <a href="https://www.google.com/preferences?hl=en&fg=1">Search settings</a>
            </MenuItem>
            <MenuItem
              id={theme === true ? "darkButton" : "light"}
              className="rounder-lg shadow-md whitespace-nowrap leading- cursor-pointer text-sm px-8 text-gray-800 width-100% hover:bg-gray-100 bg-white"
            >
             <a href="https://www.google.com/advanced_search?hl=en&fg=1">Advanced search</a>
            </MenuItem>
            <MenuItem
              id={theme === true ? "darkButton" : "light"}
              className="rounder-lg shadow-md whitespace-nowrap leading-6 cursor-pointer text-sm px-8 text-gray-800 width-100% hover:bg-gray-100 bg-white"
            >
             <a href="https://myaccount.google.com/intro/yourdata/search?utm_source=googlemenu&fg=1&cctld=com">Your data in Search</a>
            </MenuItem>
            <MenuItem
              id={theme === true ? "darkButton" : "light"}
              className="rounder-lg shadow-md whitespace-nowrap leading-6 cursor-pointer text-sm px-8 text-gray-800 width-100% hover:bg-gray-100 bg-white"
            >
             <a href="https://www.google.com/history/optout?hl=en&fg=1">Search history</a>
            </MenuItem>
            <MenuItem
              id={theme === true ? "darkButton" : "light"}
              className="rounder-lg shadow-md whitespace-nowrap leading-6 cursor-pointer text-sm px-8 text-gray-800 width-100% hover:bg-gray-100 bg-white"
            >
            <a href="https://support.google.com/websearch/?visit_id=638285055819859825-3787376028&hl=en&rd=2#topic=3378866">Search help</a>
            </MenuItem>
            <MenuItem
              id={theme === true ? "darkButton" : "light"}
              className="whitespace-nowrap leading-6 cursor-pointer text-sm px-8 text-gray-800 width-100% hover:bg-gray-100 bg-white"
            >
            <a href="https://www.google.com/preferences?hl=en&fg=1">Search feedback</a>
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
