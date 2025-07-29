import React from "react";
import banner from "../assets/banner.jpg";
import Container from "../component/Container";
import Navbar from "../component/Navbar";
import { FaAddressBook } from "react-icons/fa";
import { Select, Option } from "@material-tailwind/react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaChartPie } from "react-icons/fa";
import { CgCalendarDates } from "react-icons/cg";
import { LuDot } from "react-icons/lu";

const Dashboard = () => {
  return (
    <div>
      <div
        className="w-full h-[300px] bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="w-full h-full bg-black bg-opacity-70 ">
          <Container className="relative ">
            <Navbar></Navbar>
            <div className="mt-[47px]">
              <p className="font-poppins font-medium text-[24px] text-[#60e5ae]">
                Hi Mustakin
              </p>
              <h1 className="font-poppins font-semibold text-[40px] text-white mb-10">
                Welcome to Dashboard
              </h1>
            </div>
            <div className=" absolute  w-full bg-white py-12 px-5 border">
              <div className="flex justify-between ">
                <div>
                  <p className="font-poppins font-semibold text-[24px] text-[#1f1f1f]">
                    All Task List
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-72">
                    <Select label="Select Version">
                      <Option>Material Tailwind HTML</Option>
                      <Option>Material Tailwind React</Option>
                      <Option>Material Tailwind Vue</Option>
                      <Option>Material Tailwind Angular</Option>
                      <Option>Material Tailwind Svelte</Option>
                    </Select>
                  </div>
                  <div className="w-72">
                    <Select label="Select Version">
                      <Option>Material Tailwind HTML</Option>
                      <Option>Material Tailwind React</Option>
                      <Option>Material Tailwind Vue</Option>
                      <Option>Material Tailwind Angular</Option>
                      <Option>Material Tailwind Svelte</Option>
                    </Select>
                  </div>
                  <div className="w-72 rounded-md bg-[#60e5ae] py-[12px] px-[44px]">
                    <div className="flex gap-[10px]">
                      <FaAddressBook className="text-2xl text-center" />
                      <p className="font-poppins font-medium text-[16px] text-[#1f1f1f]">
                        Add New Task
                      </p>
                    </div>
                  </div>
                </div>
              </div>
             <div className="flex flex-wrap mt-[46px] justify-between">
               <div className="w-[404px] p-3  h-[176px] border shadow-sm">
                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <div className="h-[43px] w-[43px] flex justify-center items-center rounded-full bg-[#60e5ae]">
                      <FaChartPie className=" text-xl" />
                    </div>
                    <h3 className="font-poppins font-semibold text-[24px] text-[#1f1f1f]">
                      Art and Craft{" "}
                    </h3>
                  </div>
                  <div>
                    <RiDeleteBin5Line className="text-2xl text-[#ff4c24]" />
                  </div>
                </div>
                <div className="ml-12 mb-[28px]">
                  <p className="font-poppins font-normal text-[14px] text-[#667085]">
                    Select the rale that you want to condidates for and upload
                    your job description
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    <CgCalendarDates className="text-2xl" />

                    <h3 className="font-poppins font-normal text-[14px] text-[#1f1f1f]">
                      Friday,april19-2024
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 text-[#e343e6]">
                    <LuDot className="text-3xl" />
                    <p>pending</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;
