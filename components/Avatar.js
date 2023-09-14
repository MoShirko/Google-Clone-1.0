import React from "react";
import Image from "next/image";

function Avatar({ url, className }) {
  return (
    <Image
      tabIndex="0"
      loading="lazy"
      className={`rounded-full 
    cursor-pointer: transition duration-150 transform hover:scale-110 ${className}`}
      src={url}
      alt="pic"
      height={55}
      width={35}
    />
  );
}

export default Avatar;
