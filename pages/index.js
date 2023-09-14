"use client";

import Head from "next/head";
import Avatar from "../components/Avatar";
import { BeakerIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Footer from "../components/Footer";
import { useRef, useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { ThemeContext, ThemeProvider } from "@/components/ThemeProvider";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  let {toggleTheme, theme} = useContext(ThemeContext);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
    >
      <Head id={theme}>
        <title>Google</title>
        <link
          rel="icon"
          href="https://www.flaticon.com/free-icon/google_2702602"
        />
      </Head>

      <header className="flex w-full p-5 justify-between text-sm text-gray-700" id={theme}>
        <div className="flex space-x-4 items-center"  >
          <p tabIndex="0" className="link">
            <a href="https://about.google/?fg=1&utm_source=google-US&utm_medium=referral&utm_campaign=hp-header">
              About
            </a>
          </p>
          <p className="link">
            <a href="https://store.google.com/US/?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-US">
              Store
            </a>
          </p>
        </div>

        <div className="flex space-x-4 items-center"> 
          <p className="link">
            <a href="https://mail.google.com/mail">Gmail</a>
          </p>
          <p className="link">
            <a href="https://www.google.com/imghp?hl=en&ogbl">Images</a>
          </p>
          <a href="https://labs.google.com/search/experiments">
            <BeakerIcon
              tabIndex="0"
              className="h-6 hover:cursor-pointer mr-2 text-gray-500"
            />
          </a>
          <Image
            tabIndex="0"
            className="hover:cursor-pointer"
            src="/view_grid.png"
            alt="Google apps icon"
            width={28}
            height={28}
          />

          <a href="https://mail.google.com/mail">
            <Avatar
              tabIndex="0"
              className="h-8 hover:cursor-pointer"
              url="/avatarIcon.png"
            />
          </a>
        </div>
      </header>

      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          src="/google_logo.png"
          tabIndex="0"
          width={275}
          height={100}
          alt="google icon"
        />
        <div
          className="flex w-full mt-5 hover:shadow-lg focus-with:shadow-lg 
      max-w-md rounded-full border border-gray-200 px-5 py-3 items-center 
      sm:max-w-xl lg:max-w-2xl"
        >
          <SearchIcon tabIndex="0" className="h-5 mr-3 text-gray-500" />
          <input
            id={theme}
            ref={searchInputRef}
            type="text"
            className="focus:outline-none flex-grow"
            aria-label="Google search"
          />
          <a href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjAnq7Et9OAAxU1j2oFHZAQBtYQPAgJ">
            <Image
              //voice search
              tabIndex="0"
              className="h-5 mr-1 hover:cursor-pointer"
              src="https://www.freepngimg.com/save/70666-voice-microphone-google-search-logo-png-file-hd/716x1024"
              alt="Search by voice"
              width={15}
              height={5}
            />
          </a>
          <a href="">
            <Image
              // image search
              tabIndex="0"
              className="ml-3 mr-1 hover:cursor-pointer"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Google_Lens_Icon.svg/1200px-Google_Lens_Icon.svg.png"
              alt="Search by image"
              width={20}
              height={10}
            />
          </a>
        </div>
        <div
          className="flex flex-col w-1/2 space-y-2 justify-center 
      mt-8 sm:space-y-0 sm:flex-row sm:space-x-4"
        >
          <button
            id="darkButton"
            onClick={search}
            className="btn"
          >
            Google Search
          </button>
          <button
            id="darkButton"
            className="btn"
            onClick="https://www.google.com/search?q=i%27m+feeling+lucky&sca_esv=563475517&hl=en&source=hp&ei=mCX6ZLSjBODJkPIPp-Gp-Ao&iflsig=AD69kcEAAAAAZPozqBl-tDw4dLzwYFUXfEIylHUXti9m&ved=0ahUKEwi0z46Bn5mBAxXgJEQIHadwCq8Q4dUDCAs&uact=5&oq=i%27m+feeling+lucky&gs_lp=Egdnd3Mtd2l6IhFpJ20gZmVlbGluZyBsdWNreTILEAAYgAQYsQMYgwEyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEC4YgAQyBRAAGIAEMgUQABiABDIFEAAYgARIlCJQzwRYnyFwAXgAkAEAmAGxAaABrwqqAQQxNi4xuAEDyAEA-AEBqAIKwgIQEAAYAxiPARjlAhjqAhiMA8ICEBAuGAMYjwEY5QIY6gIYjAPCAhEQLhiABBixAxiDARjHARjRA8ICDhAuGIAEGLEDGMcBGNEDwgIIEC4YsQMYgATCAgsQLhiABBixAxiDAcICCxAAGIoFGLEDGIMBwgIIEC4YgAQYsQPCAgsQLhiABBixAxjUAsICCxAuGIMBGLEDGIAEwgILEC4Y1AIYsQMYgAQ&sclient=gws-wiz">
            Im Feeling Lucky
          </button>
        </div>
      </form>
      <Footer theme={theme} darkTheme={toggleTheme} />
    </div>
  );
}
