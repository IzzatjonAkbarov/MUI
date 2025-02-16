import React from "react";
import Showcaseimg from "../../assets/images/Showcase.png";
const Showcase = () => {
  return (
    <div className="max-w-[1400px] !ml-auto min-[1500px]:m-auto min-[1500px]:w-[1500px] max-[900px]:m-auto">
      <div className="flex items-center gap-10 justify-between ">
        <div className="w-[50%] pl-10 max-[900px]:w-full max-[900px]:text-center  max-[900px]:p-10 max-[500px]:p-5">
          <h1 className="text-[50px] font-bold max-[550px]:text-[30px] max-[425px]:text-[25px]">
            <span className="text-[#0D7DEC]">Move faster</span> with intuitive
            React UI tools
          </h1>
          <p className="text-[#303741] max-[550px]:text-[14px]">
            MUI offers a comprehensive suite of free UI tools to help you ship
            new features faster. Start with Material UI, our fully-loaded
            component library, or bring your own design system to our
            production-ready components.
          </p>
          <button className="p-3 px-5 max-[425px]:text-[14px] bg-[#0D7DEC] rounded-2xl mt-5 hover:bg-[#0d7cecd3] transition-all">
            <p className="text-[15px] text-white font-medium">{`Discover the Core libraries >`}</p>
          </button>
        </div>
        <div className="relative w-[60%] max-[900px]:hidden">
          <div className="">
            <img className="" src={Showcaseimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
