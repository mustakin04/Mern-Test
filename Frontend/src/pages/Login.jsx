import React, { useState } from 'react';
import img from "../assets/19199299.jpg";
import Container from '../component/Container';
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Login = () => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post("https://mern-test-9ndt.onrender.com/api/v1/authentication/login", form);
      toast.success(res.data.message);
      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (error) {
      const errMsg = error.response?.data?.message || "Login failed";
      toast.error(errMsg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-8">
      <Container>
        <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
          
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <img
              src={img}
              alt="Login"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Form */}
          <div className="w-full md:w-1/2 px-6 py-8 md:p-12">
            <h1 className="text-3xl font-bold text-center">Login</h1>
            <p className="text-center text-gray-600 mt-2 mb-6">
              Welcome back! Please enter your details to log in.
            </p>

            {/* Email Input */}
            <div className="mb-5">
              <label className="block font-medium mb-2">Email Address</label>
              <input
                name='email'
                type="email"
                onChange={handleChange}
                value={form.email}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Input */}
            <div className="mb-5 relative">
              <label className="block font-medium mb-2">Password</label>
              <input
                name='password'
                type={show ? "text" : "password"}
                onChange={handleChange}
                value={form.password}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="********"
              />
              <div
                className="absolute top-[38px] right-4 cursor-pointer text-gray-600"
                onClick={() => setShow(!show)}
              >
                {show ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>

            {/* Login Button */}
            <button
              className="w-full bg-green-400 hover:bg-green-500 text-white font-semibold py-3 rounded-lg transition"
              onClick={handleLogin}
            >
              Login
            </button>

            {/* Divider */}
            <div className="flex items-center justify-center my-6">
              <div className="w-1/3 h-px bg-gray-300"></div>
              <span className="mx-3 text-sm text-gray-500">Or</span>
              <div className="w-1/3 h-px bg-gray-300"></div>
            </div>

            {/* Signup Link */}
            <p className="text-center text-sm text-gray-600">
              Don’t have an account?{' '}
              <Link to='/' className="text-gray-800 font-medium hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </Container>
      <Toaster />
    </div>
  );
};

export default Login;
