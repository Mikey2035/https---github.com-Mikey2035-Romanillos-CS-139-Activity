"use client"; // This line should be at the very top

import React, { useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <header
      className="bg-black p-4 shadow-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* Updated logo image */}
          <h1 className="text-2xl font-bold text-white">|| TRAVEL ||</h1>
        </div>

        <nav>
          <ul className="flex space-x-6">
            <li className="flex items-center">
              <Link
                href="/"
                className="flex items-center hover:text-gray-200 text-white"
              >
                Home
              </Link>
            </li>
            <div className="border-l border-gray-600 h-6" /> {/* Separator line */}
            <li className="flex items-center">
              <Link
                href="/about"
                className="flex items-center hover:text-gray-200 text-white"
              >
                About
              </Link>
            </li>
            <div className="border-l border-gray-600 h-6" /> {/* Separator line */}
            <li className="flex items-center">
              <Link
                href="/contact"
                className="flex items-center hover:text-gray-200 text-white"
              >
                Contact Us
              </Link>
            </li>
            <div className="border-l border-gray-600 h-6" /> {/* Separator line */}
            <li className="flex items-center">
              <Link
                href="/sign"
                className="flex items-center hover:text-gray-200 text-white"
              >
                Sign-In/Sign-Up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
