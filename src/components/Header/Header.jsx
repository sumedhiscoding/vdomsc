import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="navbar py-4 bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mx-3 mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="mx-2" to="/">
                HOME
              </Link>
            </li>
            <li>
              {" "}
              <Link className="mx-2" to="/about">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link className="mx-2" to="/featured">
                {" "}
                FEATURED SERVICES
              </Link>
            </li>
            <li>
              <Link className="mx-2" to="/gallery ">
                GALLERY
              </Link>
            </li>
            <li>
              <Link className="mx-2" to="/patient">
                PATIENT
              </Link>
            </li>
            <li>
              <Link className="mx-2" to="/contact">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case mx-24 text-xl">
          VAISHNAVI DENTAL, ORAL & MAXILLOFACIAL SURGERY CLINIC
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="dropdown dropdown-end">
            <Link tabIndex={0} className="" to="/">HOME</Link>
            <ul tabIndex={0} className="dropdown-content menu m-2  shadow bg-base-100 rounded-box w-52">
              <div className="my-1 bg-slate-600"></div>
              <li className="my-2">item1</li>
              <li className="my-2 "    >item2</li>
              <li className="my-2 "    >item3</li>
              <li className="my-2 "    >item4</li>
            </ul>
          </li>
          <li>
            {" "}
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
