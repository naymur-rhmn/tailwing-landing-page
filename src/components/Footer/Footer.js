import React from "react";
import logo from "../../assets/images/logo.svg";
import facebook from "../../assets/images/icon-facebook.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import youtube from "../../assets/images/icon-youtube.svg";
import printerest from "../../assets/images/icon-pinterest.svg";
import instagram from "../../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer id="footer" className="bg-black">
      {/* Flex Container */}
      <div className="container mx-auto p-6 py-16  text-white flex flex-col-reverse space-y-8 md:space-x-4 md:flex-row md:justify-between md:space-y-0">
        {/* Logo and Social Icons */}
        <div className="flex flex-col-reverse  items-center space-y-12 md:flex-1 md:flex-col justify-between md:items-start md:space-y-0 md:w-1/3">
          {/* Copyright text */}
          <div>
            <p className="text-white text-center md:hidden">
              Copyright 2020. All Rights Reserved
            </p>
          </div>

          {/* logo */}
          <div>
            <img src={logo} className="w-32" alt="Logo" />
          </div>

          {/* Social links container */}
          <div className="flex space-x-2">
            {/* links 1 */}
            <a href="www.facebook.com">
              <img src={facebook} alt="" />
            </a>
            {/* Links 2 */}
            <a href="www.facebook.com">
              <img src={youtube} alt="" />
            </a>
            {/* Links 3 */}
            <a href="www.facebook.com">
              <img src={twitter} alt="" />
            </a>
            {/* Links 4 */}
            <a href="www.facebook.com">
              <img src={printerest} alt="" />
            </a>
            {/* Links 5 */}
            <a href="www.facebook.com">
              <img src={instagram} alt="" />
            </a>
          </div>
        </div>

        {/* List Container  */}
        <div className="flex justify-around md:flex-1">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Home
            </a>
            <a href="#" className="hover:text-brightRed">
              Pricing
            </a>
            <a href="#" className="hover:text-brightRed">
              Products
            </a>
            <a href="#" className="hover:text-brightRed">
              About
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Careers
            </a>
            <a href="#" className="hover:text-brightRed">
              Community
            </a>
            <a href="#" className="hover:text-brightRed">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Input Container */}
        <div className="flex flex-col justify-between md:flex-1">
          <form action="#">
            <div className="flex space-x-2">
              <input
                type="text"
                className="flex-1 px-4 py-3 rounded-full bg-white text-black"
              />
              <button className="px-6 py-3 rounded-full outline-none bg-orange-600 text-white">
                Go
              </button>
            </div>
          </form>
          <p className="hidden text-whtie text-right md:block">
            Copyright 2020. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
