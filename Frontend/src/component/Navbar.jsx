import React from "react";
import Container from "./Container";
import { LuClock12 } from "react-icons/lu";
import { RiTaskFill } from "react-icons/ri";
import { PiSpinnerFill } from "react-icons/pi";
import img from "../assets/profile.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router";


const Navbar = () => {
  return (
    <div>
      <Container className="flex justify-between items-center  py-[26px] ">
        <div className="flex items-center gap-[10px]">
          <LuClock12 className="text-2xl text-white" />
          <h4 className="font-poppins font-medium text-[24px] text-white">
            Tasko
          </h4>
        </div>
        <div className="flex gap-[50px]">
          <div className="flex items-center gap-[10px]">
            <RiTaskFill className="text-2xl text-green-400" />
            <p className="font-poppins font-medium text-[24px] text-white">
              Task List
            </p>
          </div>
          <Link to="/spin" className="flex items-center gap-[10px]">
            <PiSpinnerFill className="text-2xl text-white" />
            <p className="font-poppins font-medium text-[24px] text-white">
              Spin
            </p>
          </Link>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="h-[27px] w-[27px] rounded-full overflow-hidden">
            <img src={img} alt="" className="" />
          </div>
           <p className="font-poppins font-medium text-[24px] text-white">Mustakin</p>
           <div>
            <MdKeyboardArrowDown className="text-xl text-white"/>
           </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
