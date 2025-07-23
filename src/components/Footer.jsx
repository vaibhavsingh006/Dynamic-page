import React from "react";
import { Twitter, Github, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#215C87] text-white px-6 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center  justify-between gap-6">
        <div className="flex flex-col md:items-start gap-6">
          <a href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-full relative">
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-xl font-semibold">CivicDataSpace</span>
          </a>

          <div className="flex gap-6 text-sm mt-2 md:mt-0">
            <a href="#" className="hover:underline">
              ABOUT US
            </a>
            <a href="#" className="hover:underline">
              SITEMAP
            </a>
            <a href="#" className="hover:underline">
              CONTACT US
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex md:flex-col items-end gap-3">
            <span className="text-[#F3B13E] font-semibold">Follow Us</span>
            <div className="flex gap-2">
              <a
                href="#"
                className="bg-[#9AE9D5] rounded-full w-8 h-8 flex items-center justify-center"
              >
                <Github className="w-4 h-4 text-[#225376]" />
              </a>
              <a
                href="#"
                className="bg-[#9AE9D5] rounded-full w-8 h-8 flex items-center justify-center"
              >
                <Linkedin className="w-4 h-4 text-[#225376]" />
              </a>
              <a
                href="#"
                className="bg-[#9AE9D5] rounded-full w-8 h-8 flex items-center justify-center"
              >
                <Twitter className="w-4 h-4 text-[#225376]" />
              </a>
              <a
                href="#"
                className="bg-[#9AE9D5] rounded-full w-8 h-8 flex items-center justify-center"
              >
                <Facebook className="w-4 h-4 text-[#225376]" />
              </a>
            </div>
          </div>
          <div className="text-sm text-white font-semibold flex items-center gap-1">
            made by
            <img src="/images.png" alt="Made By Logo" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
