import Head from "next/head";
import Avatar from "../components/Avatar";
import {ViewGridIcon, MicrophoneIcon} from "@heroicons/react/solid";
import {SearchIcon} from "@heroicons/react/outline";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
        <link
          rel="icon"
          href="https://www.flaticon.com/free-icon/google_2702602"
        />
      </Head>

      {/*Header*/}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/*left*/}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/*right*/}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/*Icon*/}

          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>

          {/*Avatar*/}
          <Avatar url="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1" 
          
          />
        </div>
      </header>

      {/*Body*/}
      <form className="flex flex-col items-center mt-44 flex-grow">
        <Image
        src="https://www.pngall.com/wp-content/uploads/5/Google-Logo-PNG-Free-Image.png"
        width={300}
        height={100}
        />
         <div className="flex w-full mt-5 hover:shadow-lg focus-with:shadow-lg 
      max-w-md rounded-full border-gray-200 px-5 py-3 items-center 
      sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-5 mr-3 text-gray-500"/>
        <input type="text" className="focus:outline-none flex-grow"/>
        <MicrophoneIcon className="h-5"/>
      </div>
      <div className="flex flex-col w-1/2 space-y-2 justify-center 
      mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
        <button className="btn">Google Search</button>
        <button className="btn">Im Feeling Lucky</button>
      </div>
      </form>
     

      {/*Footer*/}
    </div>
  );
}
