import Head from "next/head";
import Avatar from "../components/Avatar";
import { ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link
          rel="icon"
          href="https://www.flaticon.com/free-icon/google_2702602"
        />
      </Head>

      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          {/* <img className="h-5 mr-1 hover:cursor-pointer" src="https://static.thenounproject.com/png/10563-200.png" alt="Google apps"/> */}

          <Avatar url="https://www.pngkit.com/png/detail/50-503951_profile-circle-profile-pic-in-circle.png" />
        </div>
      </header>

      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          src="https://www.pngall.com/wp-content/uploads/5/Google-Logo-PNG-Free-Image.png"
          width={300}
          height={100}
        />
        <div
          className="flex w-full mt-5 hover:shadow-lg focus-with:shadow-lg 
      max-w-md rounded-full border border-gray-200 px-5 py-3 items-center 
      sm:max-w-xl lg:max-w-2xl"
        >
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="focus:outline-none flex-grow"
          />
          <img
            className="h-5 mr-1 hover:cursor-pointer"
            src="https://freepngimg.com/save/70666-voice-microphone-google-search-logo-png-file-hd/716x1024"
            alt="Search by voice"
          />
          <img
            className="h-5 ml-3 mr-1 hover:cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Google_Lens_Icon.svg/1200px-Google_Lens_Icon.svg.png"
            alt="Search by image"
          />
        </div>
        <div
          className="flex flex-col w-1/2 space-y-2 justify-center 
      mt-8 sm:space-y-0 sm:flex-row sm:space-x-4"
        >
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button onClick={search} className="btn">
            Im Feeling Lucky
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
}
