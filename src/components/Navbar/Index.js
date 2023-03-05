import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.svg";

const Navbar = () => {
  const [btnState, setBtnState] = useState(false);

  const toggle = () => {
    btnState ? setBtnState(false) : setBtnState(true);
  };
  // add dynamic and tailwind classlist for hamburger sm:menu
  const regularClass = "block hamburger md:hidden focus:outline-none";
  const dynamicClass = btnState ? "open" : "";
  const combinedClass = `${regularClass} ${dynamicClass}`;

  // add dynamic and regualar classList for display sm:menu
  const menuClass =
    "absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md";
  const dynamicMenuClass = btnState ? "flex" : "hidden";
  const combinedMenuClass = `${menuClass} ${dynamicMenuClass}`;

  return (
    <nav className="relative container mx-auto p-6">
      {/* flex container */}
      <div className="flex justify-between items-center">
        {/* logo */}
        <div className="pt-2">
          <img src={logo} alt="logo" />
        </div>

        {/* menu items */}
        <div className="hidden  md:flex space-x-6">
          <a href="#" className="hover:text-darkGrayishBlue">
            Pricing
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Product
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            About Us
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Careers
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Community
          </a>
        </div>

        {/* Button */}
        <a
          href="#"
          className="hidden p-3 pt-2 px-6  text-white bg-brightRed rounded-full baseline md:block hover:bg-brightRedLight"
        >
          Get Started
        </a>

        {/* Hamburger Icon */}
        <button onClick={toggle} id="menu-btn" className={combinedClass}>
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobail Menu */}
      <div className="md:hidden">
        <div id="menu" className={combinedMenuClass}>
          <a href="#" className="hover:text-darkGrayishBlue">
            Pricing
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Product
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            About Us
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Careers
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Community
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// <div
//       id="navbar"
//       className="relative container mx-auto flex justify-between items-center mt-3 mb-3"
//     >
//       {/* logo */}
//       <img src={logo} alt="logo" />
//       {/* nav */}
//       <nav>
//         <ul className="hidden md:flex space-x-4">
//           <li className=" cursor-pointer">Pricing</li>
//           <li className=" cursor-pointer">Products</li>
//           <li className=" cursor-pointer">About Us</li>
//           <li className=" cursor-pointer">Carrers</li>
//           <li className=" cursor-pointer">Communities</li>
//         </ul>
//       </nav>
//       {/* button */}
//       <button className="hidden px-5 py-1.5 font-semibold baseline bg-orange-300 cursor-pointer rounded-full md:block">
//         Get Started
//       </button>
//       </div>
