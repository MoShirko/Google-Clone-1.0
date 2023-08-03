import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { XIcon, SearchIcon } from "@heroicons/react/solid";


function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  return (
    <header>
      <Image
        src="https://www.pngall.com/wp-content/uploads/5/Google-Logo-PNG-Free-Image.png"
        height={40}
        width={120}
        onClick={() => router.push("/")}
        className="cursor-pointer"
      />
      <form className="flex px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full flex-grow shadow-lg max-w-3xl items-center">
        <input ref={searchInputRef} className="flex-grow w-full focus:outline-none" type="text" />
        <XIcon className="h-6 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125" onClick={() => (searchInputRef.current.value = "")} />
        <img
        // voice search
            className="h-4 mr-3 hidden hover:cursor-pointer sm:inline-flex border-l-2 pl-4 border-gray-300"
            src="https://freepngimg.com/save/70666-voice-microphone-google-search-logo-png-file-hd/716x1024"
            alt="Search by voice"
          />
          <img
        // image search
            className="h-5 hidden sm:inline-flex hover:cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Google_Lens_Icon.svg/1200px-Google_Lens_Icon.svg.png"
            alt="Search by image"
          />
          <SearchIcon className="h-6 hidden ml-2 sm:inline-flex text-blue-500 hover:cursor-pointer" />
      </form>
    </header>
  );
}

export default Header;
