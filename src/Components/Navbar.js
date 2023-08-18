import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidCameraMovie, BiSolidUser } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
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
          className={`absolute left-0 md:hidden cursor-pointer bg-orange-500 py-4 px-3`}>
          <GiHamburgerMenu className="w-6 h-6" />
        </div>
        {/* Logo, my account,search */}
        <div className="flex justify-between w-1/2">
          <BiSolidCameraMovie
            onClick={() => navigate("/")}
            className="w-8 h-8 text-orange-500 transition ease-in-out duration-700 hover:text-blue-500 hover:cursor-pointer"
          />
          <BiSolidUser className="text-white h-8 w-8" /> {/*  insert icon */}
          <AiOutlineSearch className="text-white h-8 w-8" />{" "}
        </div>
      </div>
      <div className={`h-10  ${menu ? "hidden" : ""} md:hidden relative`}>
        <div className="absolute left-0 flex flex-row py-1">
          <IoLocationSharp className="text-white w-7 h-7 transition ease-in-out duration-1000 hover:text-black" />
          <div className="px-2">Choose my Cinema!</div>
        </div>
      </div>
      <div
        className={`flex md:flex-row-reverse flex-col md:justify-between ${
          menu ? "" : "hidden"
        } md:flex`}>
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
