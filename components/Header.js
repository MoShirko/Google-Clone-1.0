import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { XIcon, SearchIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";


function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = e => {
    e.preventDefault();

    const term = searchInputRef.current.value;
    if(!term) return;

    router.push(`/search?term=${term}`);
  }

  return (
    <header className="sticky top-0 bg-white">
        <div className="flex w-full p-6 items-center">
      <Image
        src="/google_logo.png"
        height={35}
        width={90}
        onClick={() => router.push("/")}
        className="cursor-pointer"
      />
      <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
        <input ref={searchInputRef} className="flex-grow w-full focus:outline-none" type="text" />
        <XIcon className="h-6 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125" onClick={() => (searchInputRef.current.value = "")} />
        <Image
        // voice search
            className="h-4 mr-3 pl-2 hidden hover:cursor-pointer sm:inline-flex border-l-2 border-gray-300"
            src="https://www.freepngimg.com/save/70666-voice-microphone-google-search-logo-png-file-hd/716x1024"
            alt="Search by voice"
            width={22}
            height={5}
          />
          <Image
        // image search
            className="h-5 hidden sm:inline-flex hover:cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Google_Lens_Icon.svg/1200px-Google_Lens_Icon.svg.png"
            alt="Search by image"
            width={20}
            height={10}
          />
          <SearchIcon className="h-6 hidden ml-2 sm:inline-flex text-blue-500 hover:cursor-pointer" />
          <button hidden type='submit' onClick={search}>Search</button>
      </form>
      <Avatar className="ml-auto" url="https://www.pngkit.com/png/detail/50-503951_profile-circle-profile-pic-in-circle.png"/>
      </div>
      {/* Header Options */}
      <HeaderOptions className=""/>
    </header>
  );
}

export default Header;
