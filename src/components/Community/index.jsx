import React from "react";
import avatar1 from "../../assets/images/avatar1.png";
import avatar2 from "../../assets/images/avatar2.png";
import avatar3 from "../../assets/images/avatar3.png";
import avatar4 from "../../assets/images/avatar4.png";
import particl from "../../assets/icons/particl.svg";
import unity2 from "../../assets/icons/unity2.svg";
import docker from "../../assets/icons/docker.svg";
import loggi from "../../assets/icons/loggi.svg";
const Community = () => {
  return (
    <div className="bg-[#0f1214] py-28">
      <div className="container1">
        <div>
          <h1 className="text-[14px] text-[#0073e6] font-bold ">
            Join the community
          </h1>
          <h1 className="text-[36px] font-bold max-[530px]:text-[25px] max-[370px]:text-[18px] py-3 text-white">
            Supported by thousands of <br />
            <span className="text-[#0073e6]">developers and designers</span>
          </h1>
        </div>
        <div
          className="
        rounded-xl border overflow-hidden
        border-[#21262A]
        ">
          <div className="grid grid-cols-4 max-[750px]:grid-cols-2">
            <div className="py-5 text-center mx-auto">
              <h1 className="text-[#9cf] text-[30px] font-semibold">5.8M</h1>
              <p className="text-[14px]  !text-[#b6bec9] font-normal ">
                Weekly downloads on npm
              </p>
            </div>
            <div className="py-5 text-center mx-auto">
              <h1 className="text-[#9cf] text-[30px] font-semibold">93.9k</h1>
              <p className="text-[14px] !text-[#b6bec9] font-normal ">
                Stars on GitHub
              </p>
            </div>
            <div className="py-5 text-center mx-auto">
              <h1 className="text-[#9cf] text-[30px] font-semibold">3.0k</h1>
              <p className="text-[14px] !text-[#b6bec9] font-normal ">
                Open-source contributors
              </p>
            </div>
            <div className="py-5 text-center mx-auto">
              <h1 className="text-[#9cf] text-[30px] font-semibold">19.2k</h1>
              <p className="text-[14px] !text-[#b6bec9] font-normal ">
                Followers on X
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 max-[750px]:grid-cols-1">
            <div className="p-6 border border-[#21262A]">
              <p className=" text-[14px]  font-normal !text-[#dfe2e7]">
                "We've relied on Material UI really heavily. I override a lot of
                default styles to try and make things our own, but the time we
                save with complex components like the Autocomplete and the Data
                Grid are so worth it. Every other library I try has 80% of what
                I'm looking for when it comes to complex use cases, Material UI
                has it all under one roof which is a huge help for our small
                team."
              </p>
              <div className="flex items-center justify-between mt-10">
                <div className="flex items-center gap-4">
                  <img src={avatar1} alt="" />
                  <div>
                    <h1 className="text-[14px] font-semibold text-white">
                      Kyle Gill
                    </h1>
                    <p className="text-[14px] font-normal text-white">
                      Engineer & Designer
                    </p>
                  </div>
                </div>
                <img src={particl} alt="" />
              </div>
            </div>
            <div className="p-6 border border-[#21262A]">
              <p className=" text-[14px]  font-normal !text-[#dfe2e7]">
                "We've relied on Material UI really heavily. I override a lot of
                default styles to try and make things our own, but the time we
                save with complex components like the Autocomplete and the Data
                Grid are so worth it. Every other library I try has 80% of what
                I'm looking for when it comes to complex use cases, Material UI
                has it all under one roof which is a huge help for our small
                team."
              </p>
              <div className="flex items-center justify-between mt-10">
                <div className="flex items-center gap-4">
                  <img src={avatar2} alt="" />
                  <div>
                    <h1 className="text-[14px] font-semibold text-white">
                      Joona Rahko
                    </h1>
                    <p className="text-[14px] font-normal text-white">
                      Staff Software Engineer
                    </p>
                  </div>
                </div>
                <img src={docker} alt="" />
              </div>
            </div>
            <div className="p-6 border border-[#21262A]">
              <p className=" text-[14px]  font-normal !text-[#dfe2e7]">
                "We've relied on Material UI really heavily. I override a lot of
                default styles to try and make things our own, but the time we
                save with complex components like the Autocomplete and the Data
                Grid are so worth it. Every other library I try has 80% of what
                I'm looking for when it comes to complex use cases, Material UI
                has it all under one roof which is a huge help for our small
                team."
              </p>
              <div className="flex items-center justify-between mt-10">
                <div className="flex items-center gap-4">
                  <img src={avatar3} alt="" />
                  <div>
                    <h1 className="text-[14px] font-semibold text-white">
                      Kyle Gill
                    </h1>
                    <p className="text-[14px] font-normal text-white">
                      Engineer & Designer
                    </p>
                  </div>
                </div>
                <img src={unity2} alt="" />
              </div>
            </div>
            <div className="p-6 border border-[#21262A]">
              <p className=" text-[14px]  font-normal !text-[#dfe2e7]">
                "We've relied on Material UI really heavily. I override a lot of
                default styles to try and make things our own, but the time we
                save with complex components like the Autocomplete and the Data
                Grid are so worth it. Every other library I try has 80% of what
                I'm looking for when it comes to complex use cases, Material UI
                has it all under one roof which is a huge help for our small
                team."
              </p>
              <div className="flex items-center justify-between mt-10">
                <div className="flex items-center gap-4">
                  <img src={avatar4} alt="" />
                  <div>
                    <h1 className="text-[14px] font-semibold text-white">
                      Gustavo de Paula
                    </h1>
                    <p className="text-[14px] font-normal text-white">
                      Specialist Software Engineer
                    </p>
                  </div>
                </div>
                <img src={loggi} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
