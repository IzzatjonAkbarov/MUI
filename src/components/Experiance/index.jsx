import React from "react";
import text1 from "../../assets/icons/water.svg";
import text2 from "../../assets/icons/fixing.svg";
import text3 from "../../assets/icons/mail.svg";
import text4 from "../../assets/icons/accessibility.svg";
const Experience = ({ theme }) => {
  console.log(theme);

  return (
    <div className="border-b border-gray-400">
      <div className="container1 py-28 ">
        <h1 className="text-[14px] text-[#0073e6] font-bold">
          Why build with MUI?
        </h1>
        <h1 className="text-[36px] font-bold max-[530px]:text-[25px] mb-10">
          A{" "}
          <span className="text-[#0073e6]">
            {" "}
            delightful experience
            <br />
          </span>
          for you and your users
        </h1>

        <div className="flex items-center gap-6 max-[1138px]:grid max-[1138px]:grid-cols-2 max-[550px]:grid-cols-1">
          <div
            className={`border border-[${
              theme ? "transparent" : "#e8eaee"
            }] p-5 bg-[${
              theme ? "#10161e0" : "#F9FBFF"
            }] shadow rounded-[12px] flex items-start gap-4 flex-col`}>
            <div
              style={{
                boxShadow:
                  "inset 0 2px 12px 1px rgba(234, 237, 241, 0.3), 0 0 0 2px rgba(0, 115, 230, 0.1)",
              }}
              className={`rounded-[12px] w-fit border border-[#9cf] p-[9px] bg-[${
                theme ? "#10161e0" : "#F9FBFF"
              }]`}>
              <img src={text1} alt="" />
            </div>
            <div>
              <h1 className=" font-semibold text-[14px] pb-2">
                Timeless aesthetics
              </h1>
              <p className=" text-[14px]">
                Build beautiful UIs with ease. Start with Google's Material
                Design, or create your own sophisticated theme.
              </p>
            </div>
          </div>
          <div
            className={`border border-[${
              theme ? "transparent" : "#e8eaee"
            }] p-5 bg-[${
              theme ? "#10161e0" : "#F9FBFF"
            }] shadow rounded-[12px] flex items-start gap-4 flex-col`}>
            <div
              style={{
                boxShadow:
                  "inset 0 2px 12px 1px rgba(234, 237, 241, 0.3), 0 0 0 2px rgba(0, 115, 230, 0.1)",
              }}
              className={`rounded-[12px] w-fit border border-[#9cf] p-[9px] bg-[${
                theme ? "#10161e0" : "#F9FBFF"
              }]`}>
              <img src={text2} alt="" />
            </div>
            <div>
              {" "}
              <h1 className=" font-semibold text-[14px] pb-2">
                Intuitive customization
              </h1>
              <p className=" text-[14px]">
                Our components are as flexible as they are powerful. You always
                have full control over how they look and behave.
              </p>
            </div>
          </div>
          <div
            className={`border border-[${
              theme ? "transparent" : "#e8eaee"
            }] p-5 bg-[${
              theme ? "#10161e0" : "#F9FBFF"
            }] shadow rounded-[12px] flex items-start gap-4 flex-col`}>
            <div
              style={{
                boxShadow:
                  "inset 0 2px 12px 1px rgba(234, 237, 241, 0.3), 0 0 0 2px rgba(0, 115, 230, 0.1)",
              }}
              className={`rounded-[12px] w-fit border border-[#9cf] p-[9px] bg-[${
                theme ? "#10161e0" : "#F9FBFF"
              }]`}>
              <img src={text3} alt="" />
            </div>
            <div>
              <h1 className=" font-semibold text-[14px] pb-2">
                Unrivaled documentation
              </h1>
              <p className=" text-[14px]">
                The answer to your problem can be found in our docs. How can we
                be so sure? Because our docs boast over 2,000 contributors.
              </p>
            </div>
          </div>
          <div
            className={`border border-[${
              theme ? "transparent" : "#e8eaee"
            }] p-5 bg-[${
              theme ? "#10161E" : "#F9FBFF"
            }] shadow rounded-[12px] flex items-start gap-4 flex-col`}>
            <div
              style={{
                boxShadow:
                  "inset 0 2px 12px 1px rgba(234, 237, 241, 0.3), 0 0 0 2px rgba(0, 115, 230, 0.1)",
              }}
              className={`rounded-[12px] w-fit border border-[#9cf] p-[9px] bg-[${
                theme ? "#10161E" : "#F9FBFF"
              }]`}>
              <img src={text4} alt="" />
            </div>
            <div>
              <h1 className=" font-semibold text-[14px] pb-2">
                Dedicated to accessibility
              </h1>
              <p className=" text-[14px]">
                We believe in building for everyone. That's why accessibility is
                a high priority with every new feature we ship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
