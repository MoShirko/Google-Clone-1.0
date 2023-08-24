import React from "react";

function Avatar({ url, className }) {
  return (
    <img
      tabIndex="0"
      loading="lazy"
      className={`h-10 rounded-full 
    cursor-pointer: transition duration-150 transform hover:scale-110 ${className}`}
      src={url}
      alt="pic"
      data-testid="image"
    />
  );
}

export default Avatar;
