import React from "react";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-[#1F5F8D] text-white shadow-sm">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-full relative">
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-xl font-semibold">CivicDataSpace</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1 text-white">
              <Search className="w-4 h-4" />
            </div>
            <a
              href="#"
              className="text-[#84DCCF] hover:text-blue-200 transition-colors font-medium"
            >
              ALL DATA
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              SECTORS
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              USE CASES
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              PUBLISHERS
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              ABOUT US
            </a>
          </nav>

          <button className="bg-[#84DCCF] hover:bg-[#6ebeb3] text-black p-2 sm:px-4 sm:py-2 rounded-md text-sm font-medium transition-colors">
            LOGIN / SIGN UP
          </button>
        </div>
      </div>
    </header>
  );
}
