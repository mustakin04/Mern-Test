import React, { useState } from 'react';
import reg from "../assets/registration.jpg";
import Container from '../component/Container';
import { FaEyeSlash, FaEye } from "react-icons/fa6";

const Registration = () => {
  const [show, setShow] = useState(false);
  const [confirm, setConfirm] = useState(false);

  return (
    <div className="py-10">
      <Container>
        <div className="flex flex-col sm:flex-row items-center">
          
          {/* Left Image */}
          <div className="w-full sm:w-1/2 mb-8 sm:mb-0 px-4">
            <img
              src={reg}
              alt="Registration"
              className="w-full h-auto sm:h-[500px] md:h-screen object-cover rounded-md"
            />
          </div>

          {/* Right Form */}
          <div className="w-full sm:w-1/2 px-4 sm:px-8 md:px-12">
            <h1 className="font-poppins font-semibold text-[26px] sm:text-[32px] md:text-[36px] text-center text-[#1f1f1f]">
              Sign Up
            </h1>
            <h3 className="font-poppins font-medium text-[14px] sm:text-[16px] text-center text-[#667085] mb-8 mt-2">
              To Create Account, Please Fill in the Form Below.
            </h3>

            {/* Full Name */}
            <div>
              <p className="font-semibold text-[15px] sm:text-[16px] mb-2">Full Name</p>
              <input
                type="text"
                className="w-full py-3 pl-5 shadow-md rounded-md outline-none placeholder:text-[#667085]"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div className="my-6">
              <p className="font-semibold text-[15px] sm:text-[16px] mb-2">Email Address</p>
              <input
                type="email"
                className="w-full py-3 pl-5 shadow-md rounded-md outline-none placeholder:text-[#667085]"
                placeholder="Enter your email address"
              />
            </div>

            {/* Password */}
            <div className="relative my-6">
              <p className="font-semibold text-[15px] sm:text-[16px] mb-2">Password</p>
              <input
                type={show ? "text" : "password"}
                className="w-full py-3 pl-5 shadow-md rounded-md outline-none placeholder:text-[#667085]"
                placeholder="********"
              />
              <div
                className="absolute top-[44px] right-[20px] cursor-pointer"
                onClick={() => setShow(!show)}
              >
                {show ? <FaEye className="text-xl" /> : <FaEyeSlash className="text-xl" />}
              </div>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <p className="font-semibold text-[15px] sm:text-[16px] mb-2">Confirm Password</p>
              <input
                type={confirm ? "text" : "password"}
                className="w-full py-3 pl-5 shadow-md rounded-md outline-none placeholder:text-[#667085]"
                placeholder="Retype Password"
              />
              <div
                className="absolute top-[44px] right-[20px] cursor-pointer"
                onClick={() => setConfirm(!confirm)}
              >
                {confirm ? <FaEye className="text-xl" /> : <FaEyeSlash className="text-xl" />}
              </div>
            </div>

            {/* Sign Up Button */}
            <div className="w-full bg-[#60e5ae] my-8 rounded-md cursor-pointer hover:bg-[#4ad49b] transition">
              <p className="font-semibold text-[17px] text-center py-3">Sign Up</p>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center mx-4">
              <div className="w-2/5 h-px bg-[#667085]"></div>
              <p className="text-[15px] text-[#667085] mx-2">Or</p>
              <div className="w-2/5 h-px bg-[#667085]"></div>
            </div>

            {/* Already have an account */}
            <div className="mt-6">
              <p className="text-[15px] text-[#667085] text-center">
                Already have an account?{" "}
                <span className="text-[#1f1f1f] cursor-pointer hover:underline">Log In</span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Registration;
