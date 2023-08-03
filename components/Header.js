import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

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
      </form>
    </header>
  );
}

export default Header;
