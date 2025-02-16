import React from "react";
import LogoImg from "../../assets/icons/Logo.svg";
import searchImg from "../../assets/icons/search.svg";
import github from "../../assets/icons/github.svg";
import night from "../../assets/icons/night.svg";
import day from "../../assets/icons/day.svg";

import { Link } from "react-router-dom";

const Header = ({ isDarkMode, setIsDarkMode, darkmode }) => {
  return (
    <div>
      <div>
        <p className="py-3 !bg-[#0366CA] text-white text-[13px] text-center">
          🚀 Influence MUI's 2025 roadmap! Participate in the latest 
          <span className="underline font-semibold ->">Developer Survey →</span>
        </p>
      </div>
      <div className="container1 py-4 px-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={LogoImg} alt="" />
          <ul className="flex max-[800px]:hidden items-center gap-5 text-[14px] font-medium">
            <li>
              <Link to={"/"}>Products</Link>
            </li>
            <li>
              <Link to={"/"}>Docs</Link>
            </li>
            <li>
              <Link to={"/"}>Pricing</Link>
            </li>
            <li>
              <Link to={"/"}>About us</Link>
            </li>
            <li>
              <Link to={"/"}>Blog</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <div className="max-[530px]:hidden">
            <form
              action=""
              className="flex items-center gap-1  shadow-xs px-2 p-1 border border-[#dfe2e7] rounded-[12px] w-fit">
              <img src={searchImg} alt="" />
              <input
                className={`outline-none ${darkmode ? "text-white" : ""}`}
                placeholder="Search..."
                type="text"
              />
              <button className="font-bold border border-[#dfe2e7] text-[13px] shadow-lg rounded-[12px] p-1.5">
                Ctrl+K
              </button>
            </form>
          </div>
          <div className="hidden max-[530px]:block">
            <button className="font-bold border  flex items-center justify-center w-fit border-[#dfe2e7] text-[13px] shadow-lg rounded-[12px] p-2.5">
              <img src={searchImg} alt="" />
            </button>
          </div>
          <Link className="font-bold border flex items-center justify-center w-fit border-[#dfe2e7] text-[13px] shadow-lg rounded-[12px] p-2">
            <img src={github} alt="" />
          </Link>
          <Link
            onClick={() => {
              setIsDarkMode(!isDarkMode);
              localStorage.setItem("dark", JSON.stringify(isDarkMode));
            }}
            className="font-bold border  flex items-center justify-center w-fit border-[#dfe2e7] text-[13px] shadow-lg rounded-[12px] p-2">
            {darkmode ? (
              <i className="fa-regular fa-sun text-[18px]"></i>
            ) : (
              <img src={night} alt="" />
            )}
          </Link>
          <div className="hidden max-[800px]:block">
            <button className="font-bold border  flex items-center justify-center w-fit border-[#dfe2e7] text-[13px] shadow-lg rounded-[12px] p-2">
              <i className="fa-solid fa-bars text-[18px]"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
