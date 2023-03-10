import React from "react";
import { Link } from "react-router-dom";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const NavBar = () => {
  return (
    <div className="flex flex-col my-8 gap-3">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2">
            <BsTelephoneFill />
            <span>+995555555</span>
          </div>
          <div className="flex items-center gap-2">
            <MdEmail className="text-xl" />
            <span>test@gmail.com</span>
          </div>
        </div>
        <div className="flex gap-4">
          <button>SIGN IN</button>
          <button>SIGN UP</button>
        </div>
      </div>
      <div className="flex justify-between border-b-[1px] pb-8">
        <h2 className="text-2xl font-semibold">TradeTKT</h2>
        <div className="flex gap-4">
          <Link to="/">HOME</Link>
          <Link to="/search">SEARCH</Link>
          <Link to="/news">NEWS</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
