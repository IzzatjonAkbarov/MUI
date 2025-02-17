import React, { useState } from "react";
import code from "../../assets/images/code.png";
import code2 from "../../assets/images/code2.png";
import card1 from "../../assets/icons/mui.svg";
import card2 from "../../assets/icons/muix.svg";
import card3 from "../../assets/icons/toolpad.svg";
import card4 from "../../assets/icons/templates.svg";
import card5 from "../../assets/icons/designkits.svg";
import mountain from "../../assets/images/mountain.png";
import { NavLink } from "react-router-dom";
import Showcase from "../Showcase";
import Brands from "../Brands";
import Experience from "../Experiance";
import Design from "../Design";
import Community from "../Community";
import Production from "../Production";
import Footer from "../Footer";
import { Button, Chip, Rating, Switch, Typography } from "@mui/material";
let theme = JSON.parse(localStorage.getItem("dark"));
const Products = () => {
  const [value, setValue] = React.useState(3);
  return (
    <>
      <Showcase />
      <Brands />

      <div className="bg-gradient-to-b from-transparent to-[#ebf5ff0b] py-28">
        <div className="container1 flex items-center justify-between gap-10 max-[1024px]:flex-col">
          <div className="w-[50%] max-[1024px]:w-full">
            <h1 className="text-[14px] text-[#0073e6] font-bold">Products</h1>
            <h1 className="text-[36px] font-bold max-[530px]:text-[25px]">
              Every component you need is{" "}
              <span className="text-[#0073e6]">ready for production</span>
            </h1>
            <p className="font-normal py-2">
              Build at an accelerated pace without sacrificing flexibility or
              control.
            </p>

            <div className="flex items-start flex-col gap-2">
              <NavLink
                to={"/products/mui"}
                className={`flex items-center gap-10 px-[19px] py-[17px] border w-full max-[530px]:flex-col max-[530px]:items-start max-[530px]:gap-1 ${
                  theme ? "border-white" : "border-transparent"
                } rounded-[15px]`}>
                <img src={card1} alt="" />
                <div className="text-start">
                  <h4 className="text-[14px] font-bold">Material UI</h4>
                  <p className="text-[#303741] font-normal ">
                    Foundational components for shipping features faster.
                  </p>
                </div>
              </NavLink>
              <NavLink
                to={"/products/muix"}
                className={`flex items-center gap-10 px-[19px] py-[17px] border w-full max-[530px]:flex-col max-[530px]:items-start max-[530px]:gap-1   ${
                  theme ? "border-white" : "border-transparent"
                }
                  rounded-[15px]`}>
                <img src={card2} alt="" />
                <div className="text-start">
                  <h4 className="text-[14px] font-bold">MUI X</h4>
                  <p className="text-[#303741] font-normal ">
                    Advanced components for complex use cases.
                  </p>
                </div>
              </NavLink>{" "}
              <NavLink
                to={"/products/toolpad"}
                className={`flex items-center gap-10 px-[19px] py-[17px] border w-full max-[530px]:flex-col max-[530px]:items-start max-[530px]:gap-1   ${
                  theme ? "border-white" : "border-transparent"
                }
                   rounded-[15px]`}>
                <img src={card3} alt="" />
                <div className="text-start">
                  <h4 className="text-[14px] font-bold">Toolpad</h4>
                  <p className="text-[#303741] font-normal ">
                    Components and tools for building dashboards and internal
                    apps{" "}
                  </p>
                </div>
              </NavLink>{" "}
              <NavLink
                to={"/products/templates"}
                className={`flex items-center gap-10 px-[19px] py-[17px] border w-full max-[530px]:flex-col max-[530px]:items-start max-[530px]:gap-1   ${
                  theme ? "border-white" : "border-transparent"
                }
                   rounded-[15px]`}>
                <img src={card4} alt="" />
                <div className="text-start">
                  <h4 className="text-[14px] font-bold">Templates</h4>
                  <p className="text-[#303741] font-normal ">
                    Professionally built UIs to jumpstart your next project.
                  </p>
                </div>
              </NavLink>{" "}
              <NavLink
                to={"/products/kits"}
                className={`flex items-center gap-10 px-[19px] py-[17px] border w-full max-[530px]:flex-col max-[530px]:items-start max-[530px]:gap-1   ${
                  theme ? "border-white" : "border-transparent"
                }
                   rounded-[15px]`}>
                <img src={card5} alt="" />
                <div className="text-start">
                  <h4 className="text-[14px] font-bold">Design kits</h4>
                  <p className="text-[#303741] font-normal ">
                    The core components available on your favorite design tool.
                  </p>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="max-[1024px]:w-full w-[50%]">
            {/* <img className="max-[1024px]:w-full" src={code} alt="" /> */}

            <div className="w-full border !border-gray-400 rounded-xl overflow-hidden">
              <div className="border !border-gray-400 rounded-xl m-4 p-5">
                <img className=" max-[500px]:h-[100px]" src={mountain} alt="" />

                <div className="flex items-center gap-1 justify-between mt-3">
                  <div>
                    <h1 className="font-bold">
                      Yosemite National Park, California, USA
                    </h1>
                    <div className="flex items-center gap-1 mt-1">
                      <p className="px-2 p-0.5 rounded-2xl bg-[#e9fbf0] border border-[#9aefbc] w-fit text-[14px] text-[#0f5c2e]">
                        CSS
                      </p>

                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <div className="bg-[#090B0B]">
                <div className="flex items-center p-4 gap-2 ">
                  <Chip className="!text-white" label="Material Design" />
                  <Chip
                    className="!text-white"
                    label="Custom theme"
                    variant="outlined"
                  />
                </div>
                <img className="p-4" src={code2} alt="" />
                <div className="flex items-center gap-4  p-4 border-t !border-t-gray-400 max-[500px]:flex-col max-[500px]:items-start">
                  <Button className=" max-[500px]:w-full" variant={"contained"}>
                    Start with Material UI
                  </Button>
                  <Button className="max-[500px]:w-full" variant={"outlined"}>
                    View all components
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Experience theme={theme} />
      <Design />
      <Community />
      <Production />
      <Footer />
    </>
  );
};

export default Products;
