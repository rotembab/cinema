import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidCameraMovie, BiSolidUser } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import links from "../Literals/NavMenu";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="h-max bg-orange-500">
      <div className=" h-10 bg-black relative flex justify-end">
        <div
          onClick={() => setMenu(!menu)}
          className={`absolute left-0 md:hidden cursor-pointer bg-orange-500 p-4`}>
          <GiHamburgerMenu className="w-8 h-8" />
        </div>
        {/* Logo, my account,search */}
        <div className="flex justify-between w-1/2">
          <BiSolidCameraMovie className="w-8 h-8 text-orange-500" />
          <BiSolidUser className="text-white h-8 w-8" /> {/*  insert icon */}
          <AiOutlineSearch className="text-white h-8 w-8" />{" "}
        </div>
      </div>
      <div className={`h-10 text-right ${menu ? "hidden" : ""}`}>
        {" "}
        Search for
      </div>
      <div
        className={`flex md:flex-row-reverse flex-col md:justify-between ${
          menu ? "" : "hidden"
        }`}>
        {links.map((element, key) => (
          <button
            key={key}
            onClick={() => navigate(element.path)}
            className="w-full h-max py-4 hover:text-white text-left pl-3">
            {element.display}
            <div className="border-b border-gray-800 w-[99%] m-auto opacity-50 md:border-0"></div>
          </button>
        ))}
      </div>
    </div>
  );
}
