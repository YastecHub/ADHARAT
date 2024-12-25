import React from "react";
//import logo from "../assets/logo.png";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
      <div className="text-center lg:text-left mb-4 lg:mb-0 bg-white/90 p-4 rounded-lg shadow-lg">
        <h1 className="font-serif">
          <span className="text-5xl lg:text-6xl font-bold text-law-gold block mb-2 drop-shadow-sm">
            AHDARAT
          </span>
          <span className="text-3xl lg:text-4xl font-semibold text-law-primary tracking-wider">
            LEGAL SERVICES
          </span>
        </h1>
      </div>
      <div className="flex justify-start w-32 h-32 lg:w-48 lg:h-48 xl:w-64 xl:h-64 p-2">
        <img
          src={logo}
          alt="Ahdarat Legal Services Logo"
          className="w-full h-full object-contain drop-shadow-xl"
        />
      </div>
    </div>
  );
};

export default Header;
