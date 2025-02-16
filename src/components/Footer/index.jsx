import React from "react";
import Logo from "../../assets/icons/LogoMain.svg";
const Footer = () => {
  return (
    <div className="container1 flex items-start justify-between py-20 max-[800px]:flex-col">
      <div className="w-fit max-[800px]:w-full">
        <img src={Logo} className="py-4" alt="" />
        <h1 className="font-bold text-[14px]">Keep up to date</h1>
        <p className="text-[14px] font-normal py-1">
          Join our newsletter for regular updates. No spam ever.
        </p>

        <label htmlFor="email">
          <h1 className="font-bold pb-1">Your email</h1>
        </label>
        <form action="" className="flex w-full items-center gap-2">
          <input
            className="p-2 outline-none w-full rounded-xl shadow-2xl border border-[#cad0d8]"
            type="text"
            placeholder="example@email.com"
          />
          <button className="text-[#006bd6] hover:bg-[#006bd647] p-2 rounded-xl shadow-2xl border border-[#cad0d8]">
            Subscribe
          </button>
        </form>
      </div>
      <div className="flex items-start justify-between w-[50%] max-[800px]:w-full max-[800px]:py-5 max-[420px]:grid grid-cols-2">
        <div className="flex items-start flex-col gap-1">
          <h1 className="font-bold">Products</h1>
          <p className="font-thin text-[14px]">Material UI</p>
          <p className="font-thin text-[14px]">MUI Base</p>
          <p className="font-thin text-[14px]">MUI X</p>
          <p className="font-thin text-[14px]">Toolpad</p>
        </div>
        <div className="flex items-start flex-col gap-1">
          <h1 className="font-bold">Resources</h1>
          <p className="font-thin text-[14px]">Material Icons</p>
          <p className="font-thin text-[14px]">Templates</p>
          <p className="font-thin text-[14px]">Components</p>
          <p className="font-thin text-[14px]">Customization</p>
          <p className="font-thin text-[14px]">Design Kits</p>
        </div>
        <div className="flex items-start flex-col gap-1">
          <h1 className="font-bold">Explore</h1>
          <p className="font-thin text-[14px]">Documentation</p>
          <p className="font-thin text-[14px]">Store</p>
          <p className="font-thin text-[14px]">Blog</p>
          <p className="font-thin text-[14px]">Showcase</p>
          <p className="font-thin text-[14px]">Roadmap</p>
        </div>
        <div className="flex items-start flex-col gap-1">
          <h1 className="font-bold">Company</h1>
          <p className="font-thin text-[14px]">About</p>
          <p className="font-thin text-[14px]">Vision</p>
          <p className="font-thin text-[14px]">Careers</p>
          <p className="font-thin text-[14px]">Support</p>
          <p className="font-thin text-[14px]">Privacy policy</p>
          <p className="font-thin text-[14px]">Contact us</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
