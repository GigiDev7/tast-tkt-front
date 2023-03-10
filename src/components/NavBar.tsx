import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between border-b-[1px] pb-8 mt-8">
      <h2 className="text-2xl font-semibold">TradeTKT</h2>
      <div className="flex gap-4">
        <Link to="/">HOME</Link>
        <Link to="/search">SEARCH</Link>
        <Link to="/news">NEWS</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
    </div>
  );
};

export default NavBar;
