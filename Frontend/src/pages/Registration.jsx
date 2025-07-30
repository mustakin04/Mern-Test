import React, { useState } from 'react';
import reg from '../assets/registration.jpg';
import Container from '../component/Container';
import { FaEyeSlash, FaEye } from 'react-icons/fa6';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    repassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClick = async () => {
    const { fullName, email, password, repassword } = formData;

    if (!fullName || !email || !password || !repassword) {
      return toast.error('All fields are required');
    }

    if (password !== repassword) {
      return toast.error('Passwords do not match');
    }

    try {
      const response = await axios.post(
        'http://localhost:3002/api/v1/authentication/registration',
        formData
      );
      toast.success(response.data.message);
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      const message = error.response?.data?.message || 'Something went wrong';
      toast.error(message);
    }
  };

  return (
    <div className="py-10">
      <Container>
        <div className="flex flex-col-reverse lg:flex-row items-center">
          {/* Right Form */}
          <div className="w-full lg:w-1/2 px-6 sm:px-10">
            <h1 className="text-[28px] sm:text-[34px] text-center font-bold">Sign Up</h1>
            <p className="text-sm sm:text-base text-center text-gray-500 mb-8 mt-2">
              Please fill the form to create an account.
            </p>

            {/* Full Name */}
            <div className="mb-5">
              <label className="font-medium">Full Name</label>
              <input
                name="fullName"
                onChange={handleChange}
                type="text"
                className="w-full mt-2 py-3 px-4 shadow-md rounded-md outline-none placeholder:text-gray-400"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="font-medium">Email Address</label>
              <input
                name="email"
                onChange={handleChange}
                type="email"
                className="w-full mt-2 py-3 px-4 shadow-md rounded-md outline-none placeholder:text-gray-400"
                placeholder="Enter your email address"
              />
            </div>

            {/* Password */}
            <div className="relative mb-5">
              <label className="font-medium">Password</label>
              <input
                name="password"
                onChange={handleChange}
                type={show ? 'text' : 'password'}
                className="w-full mt-2 py-3 px-4 shadow-md rounded-md outline-none placeholder:text-gray-400"
                placeholder="********"
              />
              <div
                className="absolute top-[52%] right-4 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShow(!show)}
              >
                {show ? <FaEye className="text-lg" /> : <FaEyeSlash className="text-lg" />}
              </div>
            </div>

            {/* Confirm Password */}
            <div className="relative mb-6">
              <label className="font-medium">Confirm Password</label>
              <input
                name="repassword"
                onChange={handleChange}
                type={confirm ? 'text' : 'password'}
                className="w-full mt-2 py-3 px-4 shadow-md rounded-md outline-none placeholder:text-gray-400"
                placeholder="Retype password"
              />
              <div
                className="absolute top-[52%] right-4 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setConfirm(!confirm)}
              >
                {confirm ? <FaEye className="text-lg" /> : <FaEyeSlash className="text-lg" />}
              </div>
            </div>

            {/* Sign Up Button */}
            <button
              onClick={handleClick}
              className="w-full bg-[#60e5ae] text-black font-semibold text-[17px] py-3 rounded-md hover:bg-[#4ad49b] transition"
            >
              Sign Up
            </button>

            {/* Divider */}
            <div className="flex items-center justify-center my-6">
              <div className="w-1/4 h-px bg-gray-400"></div>
              <p className="mx-4 text-gray-500 text-sm">OR</p>
              <div className="w-1/4 h-px bg-gray-400"></div>
            </div>

            {/* Login Redirect */}
            <p className="text-center text-sm text-gray-500">
              Already have an account?{' '}
              <Link to="/login" className="text-black font-medium hover:underline">
                Log In
              </Link>
            </p>
          </div>

          {/* Left Image */}
          <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
            <img
              src={reg}
              alt="Registration"
              className="w-full h-auto lg:h-screen object-cover rounded-lg"
            />
          </div>
        </div>
        <Toaster />
      </Container>
    </div>
  );
};

export default Registration;
