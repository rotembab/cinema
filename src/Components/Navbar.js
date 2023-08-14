import React from "react";
import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="border border-black h-20 bg-orange-500 relative flex justify-end">
      <div
        onClick={() => setMenu(!menu)}
        className={`absolute left-0 md:hidden cursor-pointer`}>
        Burger {/*  insert icon */}
      </div>
      {/* Logo, my account,search */}
      <div className="flex justify-between w-1/2">
        <div>Logo</div> {/*  insert icon */}
        <div>My Account</div> {/*  insert icon */}
        <div>Search</div> {/*  insert icon */}
      </div>
    </div>
  );
}
