import React, { useState } from 'react';
import img from "../assets/19199299.jpg";
import Container from '../component/Container';
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3002/api/v1/authentication/login", form);
       toast.success(res.data.message)
       navigate("/dashboard");
    } catch (error) {
      const errMsg = error.response?.data?.message || "Login failed";
       toast.error(errMsg)
    }
  };

  return (
    <div className="py-10">
      <Container>
        <div className="flex flex-col sm:flex-row items-center">
          <div className="w-full sm:w-1/2 mb-8 sm:mb-0 px-4">
            <img src={img} alt="Login" className="w-full h-auto sm:h-[500px] md:h-screen object-cover rounded-md" />
          </div>

          <div className="w-full sm:w-1/2 px-4 sm:px-8 md:px-12">
            <h1 className="text-[36px] text-center font-semibold">Login</h1>
            <h3 className="text-center text-[#667085] mb-8 mt-2">Welcome back! Please enter your details to log in.</h3>

            {/* Email */}
            <div className="my-6">
              <p className="font-semibold mb-2">Email Address</p>
              <input
                name='email'
                type="email"
                onChange={handleChange}
                value={form.email}
                className="w-full py-3 pl-5 shadow-md rounded-md outline-none"
                placeholder="Enter your email address"
              />
            </div>

            {/* Password */}
            <div className="relative my-6">
              <p className="font-semibold mb-2">Password</p>
              <input
                name='password'
                type={show ? "text" : "password"}
                onChange={handleChange}
                value={form.password}
                className="w-full py-3 pl-5 shadow-md rounded-md outline-none"
                placeholder="********"
              />
              <div className="absolute top-[44px] right-[20px] cursor-pointer" onClick={() => setShow(!show)}>
                {show ? <FaEye className="text-xl" /> : <FaEyeSlash className="text-xl" />}
              </div>
            </div>

            {/* Login Button */}
            <div className="w-full bg-[#60e5ae] my-8 rounded-md cursor-pointer hover:bg-[#4ad49b] transition" onClick={handleLogin}>
              <p className="font-semibold text-[17px] text-center py-3">Login</p>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center mx-4">
              <div className="w-2/5 h-px bg-[#667085]"></div>
              <p className="text-[15px] text-[#667085] mx-2">Or</p>
              <div className="w-2/5 h-px bg-[#667085]"></div>
            </div>

            {/* Signup Link */}
            <div className="mt-6">
              <p className="text-[15px] text-[#667085] text-center">
                Don’t have an account? <span className="text-[#1f1f1f] cursor-pointer hover:underline">Sign Up</span>
              </p>
            </div>
          </div>
           <Toaster />
        </div>
      </Container>
    </div>
  );
};

export default Login;
