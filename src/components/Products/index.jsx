import React, { useState } from "react";
import code from "../../assets/images/code.png";
import card1 from "../../assets/icons/mui.svg";
import { style } from "@mui/system";
import { data } from "react-router-dom";
const Products = () => {
  const [data, setdata] = useState(false);
  return (
    <div className="bg-gradient-to-b from-transparent to-[#ebf5ff30]">
      <div className="container1 flex items-center justify-between gap-10">
        <div className="w-[40%]">
          <h1 className="text-[14px] text-[#0073e6] font-bold">Products</h1>
          <h1 className="text-[36px] font-bold">
            Every component you need is{" "}
            <span className="text-[#0073e6]">ready for production</span>
          </h1>
          <p className="font-normal py-2">
            Build at an accelerated pace without sacrificing flexibility or
            control.
          </p>

          <div>
            <button
              onFocus={() => setdata(!data)}
              onBlur={() => setdata(!data)}
              className={`flex items-center gap-10 px-[19px] py-[17px] border  ${
                data ? " border-[#66b3ff]" : "border-white"
              } bg-[${data ? "#F2F8FF" : ""}] rounded-[15px]`}>
              <img src={card1} alt="" />
              <div className="text-start">
                <h4 className="text-[14px] font-bold">Material UI</h4>
                <p className="text-[#1a1e23] font-normal ">
                  Foundational components for shipping features faster.
                </p>
              </div>
            </button>
            <button
              onFocus={() => setdata(!data)}
              onBlur={() => setdata(!data)}
              className={`flex items-center gap-10 px-[19px] py-[17px] border  ${
                data ? " border-[#66b3ff]" : "border-white"
              } bg-[${data ? "#F2F8FF" : ""}] rounded-[15px]`}>
              <img src={card1} alt="" />
              <div className="text-start">
                <h4 className="text-[14px] font-bold">Material UI</h4>
                <p className="text-[#1a1e23] font-normal ">
                  Foundational components for shipping features faster.
                </p>
              </div>
            </button>{" "}
            <button
              onFocus={() => setdata(!data)}
              onBlur={() => setdata(!data)}
              className={`flex items-center gap-10 px-[19px] py-[17px] border  ${
                data ? " border-[#66b3ff]" : "border-white"
              } bg-[${data ? "#F2F8FF" : ""}] rounded-[15px]`}>
              <img src={card1} alt="" />
              <div className="text-start">
                <h4 className="text-[14px] font-bold">Material UI</h4>
                <p className="text-[#1a1e23] font-normal ">
                  Foundational components for shipping features faster.
                </p>
              </div>
            </button>{" "}
            <button
              onFocus={() => setdata(!data)}
              onBlur={() => setdata(!data)}
              className={`flex items-center gap-10 px-[19px] py-[17px] border  ${
                data ? " border-[#66b3ff]" : "border-white"
              } bg-[${data ? "#F2F8FF" : ""}] rounded-[15px]`}>
              <img src={card1} alt="" />
              <div className="text-start">
                <h4 className="text-[14px] font-bold">Material UI</h4>
                <p className="text-[#1a1e23] font-normal ">
                  Foundational components for shipping features faster.
                </p>
              </div>
            </button>{" "}
            <button
              onFocus={() => setdata(!data)}
              onBlur={() => setdata(!data)}
              className={`flex items-center gap-10 px-[19px] py-[17px] border  ${
                data ? " border-[#66b3ff]" : "border-white"
              } bg-[${data ? "#F2F8FF" : ""}] rounded-[15px]`}>
              <img src={card1} alt="" />
              <div className="text-start">
                <h4 className="text-[14px] font-bold">Material UI</h4>
                <p className="text-[#1a1e23] font-normal ">
                  Foundational components for shipping features faster.
                </p>
              </div>
            </button>
          </div>
        </div>
        <div>
          <img src={code} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Products;
