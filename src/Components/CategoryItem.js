import React from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryItem({ href, src, alt, name }) {
  const navigate = useNavigate();
  return (
    <div
      className="w-[163px] h-[275px] hover:cursor-pointer"
      onClick={() => {
        navigate(href);
      }}>
      <img className="w-[163px] h-[242px]" src={src} alt={alt} />
      <p className="hover:underline-orange ">{name}</p>
    </div>
  );
}
