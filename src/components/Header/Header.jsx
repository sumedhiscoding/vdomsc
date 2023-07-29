import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Header = () => {
  return (
    <div className="navbar py-4 bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <AiOutlineMenuUnfold className="text-xl"/>
          </label>
          <div className="dropdown-content ">
            <ul className="menu bg-base-200 z-10 [&_li>*]:rounded-none">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/about">ABOUT US</Link>
              </li>
              <li>
                <Link to="/featured"> FEATURED SERVICES</Link>
              </li>
              <li>
                <Link to="/gallery ">GALLERY</Link>
              </li>
              <li>
                <Link to="/Patient">PATIENT</Link>
              </li>
              <li>
                <Link to="/Contact">CONTACT US</Link>
              </li>
            </ul>
          </div>
        </div>
        <Link to="/" className="text-xl sm:text-base md:text-xl lg:text-xl ml-10">
          {/* Mobile view */}
          <span className="hidden sm:inline">
            VAISHNAVI DENTAL, ORAL & MAXILLOFACIAL SURGERY CLINIC
          </span>

          {/* Desktop view */}
          <span className="sm:hidden m-auto text-4xl font-bold ">VDOMSC</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="dropdown dropdown-end">
            <Link tabIndex={0} className="" to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>
            <Link to="/featured"> FEATURED SERVICES</Link>
          </li>
          <li>
            <Link to="/gallery ">GALLERY</Link>
          </li>
          <li>
            <Link to="/Patient">PATIENT</Link>
          </li>
          <li>
            <Link to="/Contact">CONTACT US</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
