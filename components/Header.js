'use client';

import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { XIcon, SearchIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";
import { useSearchParams } from "next/navigation"

function Header() {
  const router = useRouter();
  const searchInputRef = useSearchParams(null);
  


  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          tabIndex="0"
          src="/google_logo.png"
          height={35}
          width={90}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            tabIndex="0"
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
            type="text"
            defaultValue={router.query.term}
          />
          <XIcon
            tabIndex="0"
            className="h-6 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <Image
            // voice search
            tabIndex="0"
            className="h-4 mr-3 pl-2 hidden hover:cursor-pointer sm:inline-flex border-l-2 border-gray-300"
            src="https://www.freepngimg.com/save/70666-voice-microphone-google-search-logo-png-file-hd/716x1024"
            alt="Search by voice"
            width={22}
            height={5}
          />
          <Image
            // image search
            tabIndex="0"
            className="h-5 hidden sm:inline-flex hover:cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Google_Lens_Icon.svg/1200px-Google_Lens_Icon.svg.png"
            alt="Search by image"
            width={20}
            height={10}
          />
          <SearchIcon
            tabIndex="0"
            role="Icon"
            className="h-6 hidden ml-2 sm:inline-flex text-blue-500 hover:cursor-pointer"
          />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar
          tabIndex="0"
          className="ml-auto"
          url="https://camo.githubusercontent.com/782f5b18398c37040caccfe2387139cde2b7f9e792af2c660a49d2db0330bd9f/68747470733a2f2f7261772e6769746875622e636f6d2f656c61646e6176612f6d6174657269616c2d6c65747465722d69636f6e732f6d61737465722f646973742f706e672f412e706e67"
        />
      </div>
      {/* Header Options */}
      <HeaderOptions className="" />
    </header>
  );
}

export default Header;
