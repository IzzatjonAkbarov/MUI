import { Button } from "@mui/material";
import React from "react";

const Production = () => {
  return (
    <div className="py-28">
      <div className="text-center ">
        <h1 className="text-[14px] text-[#0073e6] font-bold">Start now</h1>
        <h1 className="text-[36px] font-bold max-[530px]:text-[25px]">
          Ship your next project
          <span className="text-[#0073e6]"> faster</span>
        </h1>
        <p>
          Find out why MUI's tools are trusted by thousands of open-source
          <br />
          developers and teams around the world.
        </p>
        <button className="p-3 px-5 max-[425px]:text-[14px] bg-[#0D7DEC] rounded-2xl mt-5 hover:bg-[#0d7cecd3] transition-all">
          <p className="text-[15px] text-white font-medium">{`Discover the Core libraries >`}</p>
        </button>
      </div>
    </div>
  );
};

export default Production;
