import React from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryItem({ href, src, alt, name }) {
  //props will be a JSON with all the important info
  const NavToLink = () => {
    useNavigate(href);
  };
  return (
    <div
      className="w-[163px] h-[275px] hover:cursor-pointer"
      onClick={NavToLink}>
      <img className="w-[163px] h-[242px]" src={src} alt={alt} />
      <p className="hover:underline-orange ">{name}</p>
    </div>
  );
}
