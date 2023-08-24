import Head from "next/head";
import Avatar from "../components/Avatar";
import { BeakerIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Footer from "../components/Footer";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const [theme, setTheme] = useState(false);

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

  const handleClick = () => {
    // e.preventDefault();
    setTheme(!theme);
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      id={theme === true ? "dark" : "light"}
    >
      <Head>
        <title>Google</title>
        <link
          rel="icon"
          href="https://www.flaticon.com/free-icon/google_2702602"
        />
      </Head>

      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p tabIndex="0" className="link">
           <a href="https://about.google/?fg=1&utm_source=google-US&utm_medium=referral&utm_campaign=hp-header">About</a>
          </p>
          <p className="link">
          <a href="https://store.google.com/US/?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-US">Store</a>
          </p>
        </div>

<<<<<<< HEAD
        <div className="flex space-x-4 items-center"
        data-testid="parent"
        >
          <p className="link">Gmail</p>
          <p className="link">Images</p>
=======
        <div className="flex space-x-4 items-center">
          <p className="link"><a href="https://mail.google.com/mail">Gmail</a></p>
          <p className="link"><a href="https://www.google.com/imghp?hl=en&ogbl">Images</a>
          </p>
>>>>>>> 0282aef0a886f578b195ace917a26cd091c7afcb
          <BeakerIcon tabIndex="0" className="h-6 mr-3 text-gray-500" />
          <Image
            tabIndex="0"
            className="hover:cursor-pointer"
            src="/view_grid.png"
            alt="Google apps icon"
            width={28}
            height={28}
          />

          <Avatar
            data-testid="child"
            tabIndex="0"
            className="h-8"
            url="https://camo.githubusercontent.com/782f5b18398c37040caccfe2387139cde2b7f9e792af2c660a49d2db0330bd9f/68747470733a2f2f7261772e6769746875622e636f6d2f656c61646e6176612f6d6174657269616c2d6c65747465722d69636f6e732f6d61737465722f646973742f706e672f412e706e67"
          />
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
            id={theme === true ? "dark" : "light"}
            ref={searchInputRef}
            type="text"
            className="focus:outline-none flex-grow"
            aria-label="Google search"
          />
          <a href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjAnq7Et9OAAxU1j2oFHZAQBtYQPAgJ"><Image
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
            onClick={search}
            id={theme === true ? "darkButton" : "light"}
            className="btn"
          >
            Google Search
          </button>
          <button
            onClick={search}
            id={theme === true ? "darkButton" : "light"}
            className="btn"
          >
            Im Feeling Lucky
          </button>
        </div>
      </form>

      <Footer theme={theme} darkTheme={handleClick} />
    </div>
  );
}
