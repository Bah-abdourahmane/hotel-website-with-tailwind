import React, { useEffect, useState } from "react";
import LogoDark from "../assets/logo-dark.svg";
import LogoWhite from "../assets/logo-white.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  }, []);
  return (
    <div
      className={`${
        header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"
      } fixed z-50 w-full transition-allm duration-300`}
    >
      <div className="container mx-auto flex flex-col lg:flex-row gap-y-6 items-center justify-between ">
        <a href="/" className="shrink-0">
          {header ? (
            <img src={LogoDark} alt="" className="w-[160px] " />
          ) : (
            <img src={LogoWhite} alt="" className="w-[160px]" />
          )}
        </a>
        <div
          className={`${
            header ? "text-primary" : "text-white"
          } flex items-center gap-x-4 lg:gap-x-8 tracking-widest uppercase font-third`}
        >
          <a href="/" className="hover:text-accent transition cursor-pointer">
            Home
          </a>
          <span className="hover:text-accent transition cursor-pointer">
            Rooms
          </span>
          <span className="hover:text-accent transition cursor-pointer">
            Restaurant
          </span>
          <span className="hover:text-accent transition cursor-pointer">
            Spa
          </span>
          <span className="hover:text-accent transition cursor-pointer">
            Contact
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
