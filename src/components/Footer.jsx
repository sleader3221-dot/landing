import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="bg-[#FFF7E6] py-5">
        <div className="w-full flex flex-wrap items-center justify-center lg:gap-6 gap-3 mb-3 px-4">
          <a href="/" className="text-blue-500 hover:underline text-sm lg:text-lg">Home</a>
          <span className="text-gray-400 hidden lg:block">|</span>
          <a href="#" className="text-blue-500 hover:underline text-sm lg:text-lg">About Us</a>
          <span className="text-gray-400 hidden lg:block">|</span>
         <NavLink 
    to="/terms" 
    className={({ isActive }) => 
      `text-blue-500 hover:underline text-sm lg:text-lg ${isActive ? "font-bold underline" : ""}`
    }
  >
    Terms & Conditions
  </NavLink>
  
  <span className="text-gray-400 hidden lg:block">|</span>
  
  <NavLink 
    to="/privacy" 
    className={({ isActive }) => 
      `text-blue-500 hover:underline text-sm lg:text-lg ${isActive ? "font-bold underline" : ""}`
    }
  >
    Privacy Policy
  </NavLink>
          <span className="text-gray-400 hidden lg:block">|</span>
          <a href="#" className="text-blue-500 hover:underline text-sm lg:text-lg">Cancellation & Refunds</a>
        </div>
        <p className="text-center text-[16px] font-medium text-[#333333]">
          ©2025 DukaanSe.
        </p>
      </div>
    </footer>
  );
}