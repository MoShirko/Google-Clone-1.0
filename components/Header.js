import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  return (
    <header>
      <Image
        src="https://www.pngall.com/wp-content/uploads/5/Google-Logo-PNG-Free-Image.png"
        height={40}
        width={120}
        onClick={() => router.push("/")}
        className="cursor-pointer"
      />
    </header>
  );
}

export default Header;
