import React from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryItem({ href, src, alt, name }) {
  //props will be a JSON with all the important info
  return (
    <a className="w-[163px] h-[275px]" href={() => useNavigate(href)}>
      <div className="w-[163px] h-[242px]">
        <img src={src} alt={alt} />
      </div>
      <p className="hover:underline-orange-500">{name}</p>
    </a>
  );
}
