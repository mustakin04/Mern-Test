import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import banner from "../assets/banner.jpg";
import Container from "../component/Container";
import Navbar from "../component/Navbar";
import { CiEdit } from "react-icons/ci";
import { FaChartPie } from "react-icons/fa";
import { Select, Option } from "@material-tailwind/react";
import { RxCross2 } from "react-icons/rx";
import { CgCalendarDates } from "react-icons/cg";
import { LuDot } from "react-icons/lu";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import deleted from "../assets/deleted.jpg"

const TaskDetails = () => {
  const { id } = useParams();
  const navigate=useNavigate()
  const [show, setShow] = useState(false);
  const [showDelete,SetShowDelete]=useState(false)
  const [update, setUpdate] = useState({});
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    priority: "",
  });

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(
          `https://mern-test-9ndt.onrender.com/api/v1/task/getSingleTask/${id}`
        );
        setUpdate(response.data.task);
        setFormData({
          title: response.data.task.title,
          description: response.data.task.description,
          date: response.data.task.date,
          priority: response.data.task.priority,
        });
      } catch (error) {
        toast.error("❌ Failed to load task");
      }
    };

    fetchTask();
  }, [id]);

  const handleClick = () => {
    setShow(true);
  };

  const handleChange = (e) => {
    if (typeof e === "string") {
      setFormData((prev) => ({ ...prev, priority: e }));
    } else {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.patch(
        `https://mern-test-9ndt.onrender.com/api/v1/task/updateTask/${id}`,
        formData
      );
      toast.success(response.data.message);
      setUpdate(formData);
      setShow(false);
    } catch (error) {
      toast.error("❌ Update failed");
    }
  };
   const handleDeletedTask=()=>{
         SetShowDelete(true)
   }
  const handleYes=async()=>{
         try{
         const deleteTask=await 
        axios.delete(`https://mern-test-9ndt.onrender.com/api/v1/task/deletedSingleTask/${id}`)
        toast.success(deleteTask.data.message)
       setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
       }catch(error){
        toast.error(error.message)
       }
       
  }
  return (
    <div>
      <div
        className="w-full h-[180px] bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="w-full h-full bg-black bg-opacity-70">
          <Container className="relative">
            <Navbar />

            <div className="absolute w-full bg-white py-12 px-5 border">
              <div className="flex justify-between items-center">
                <p className="font-poppins font-semibold text-[24px] text-[#1f1f1f]">
                  Task Details
                </p>
                <div className="flex gap-3">
                  <div
                    className="flex gap-3 bg-[#ffab00] bg-opacity-10 text-[#ffab00] py-[10px] px-[14px] cursor-pointer"
                    onClick={handleClick}
                  >
                    <CiEdit className="text-2xl" />
                    <p>Edit Task</p>
                  </div>
                  <Link to="/dashboard">
                    <p className="font-poppins font-semibold bg-[#60e5ae] px-[53px] py-[12px] text-[16px] text-[#1f1f1f] rounded-md">
                      Back
                    </p>
                  </Link>
                </div>
              </div>

              {/* Task content */}
              <div className="mt-[46px]">
                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <div className="h-[43px] w-[43px] flex justify-center items-center rounded-full bg-[#60e5ae]">
                      <FaChartPie className="text-xl" />
                    </div>
                    <h3 className="font-poppins font-semibold text-[24px] text-[#1f1f1f]">
                      {update.title}
                    </h3>
                  </div>
                </div>

                <div className="ml-14 mb-[28px]">
                  <p className="font-poppins font-normal text-[14px] text-[#667085]">
                    {update.description}
                  </p>
                </div>

                <div className="ml-[52px]">
                  <p className="font-poppins font-semibold text-[18px] text-[#1f1f1f]">
                    End Date
                  </p>
                  <div className="flex gap-10 items-center">
                    <div className="flex gap-3">
                      <CgCalendarDates className="text-2xl" />
                      <h3 className="font-poppins font-normal text-[14px] text-[#1f1f1f]">
                        {update.date}
                      </h3>
                    </div>
                    <div className="flex items-center gap-3 font-medium font-poppins text-[32px] text-[#dd9221]">
                      <LuDot className="text-3xl" />
                      <p>{update.priority}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <p className="font-poppins font-semibold bg-[#ff4c24] text-[18px] text-[#ff4c24] px-[85px] py-[16px]
                 mb-10 bg-opacity-15 rounded-md"
                 onClick={handleDeletedTask}>Delete Task</p>
            </div>
           {
            showDelete&&(
                 <div className="absolute top-[-30px] left-10 w-[566px] h-[491px] py-6 bg-white border rounded-md shadow-md">
                <img src={deleted} alt="" />
                <p className="font-poppins font-semibold text-[40px] text-[#1f1f1f] mt-1 text-center">
                    Are you Sure!!</p>
                <p className="font-poppins font-normal text-[18px] text-[#737791] my-1 text-center">
                    Do you Want to delete this Task ont this app?</p>
                <div className="flex justify-evenly">
                    <p className="font-poppins font-semibold bg-[#60e5ae] px-[53px] py-[12px] 
                    text-[16px] text-[#1f1f1f] rounded-md"
                    onClick={handleYes}>
                      yes
                    </p>
                    <p className="font-poppins font-semibold bg-[#ff4c24] text-[#ff4c24]
                     px-[53px] py-[12px] text-[16px] bg-opacity-15 rounded-md"
                     onClick={()=>SetShowDelete(false)}>
                      No
                    </p>
                </div>
            </div>
            )
           }
            </div>
          </Container>

          {/* Modal */}
          {show && (
            <div className="absolute top-24 right-20 p-6 bg-white w-[500px] py-14 border rounded-md shadow-lg">
              <div className="absolute top-5 right-5">
                <RxCross2 className="text-4xl cursor-pointer" onClick={() => setShow(false)} />
              </div>
              <h4 className="font-poppins font-semibold text-[20px] text-[#1f1f1f] text-center mb-5">
                Edit Task
              </h4>

              {/* Form */}
              <div className="w-full mb-4">
                <label className="block mb-2 text-sm text-slate-600">Title</label>
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-md px-3 py-2"
                  placeholder="Type here..."
                />
              </div>

              <div className="w-full mb-4">
                <label className="block mb-2 text-sm text-slate-600">Description</label>
                <input
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-md px-3 py-2"
                  placeholder="Type here..."
                />
              </div>

              <div className="w-full mb-4">
                <label className="block mb-2 text-sm text-slate-600">Date</label>
                <input
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-md px-3 py-2"
                />
              </div>

              <div className="w-full mb-6">
                <label className="block mb-2 text-sm text-slate-600">Change Status</label>
                <Select
                  label="Select Priority"
                  value={formData.priority}
                  onChange={(val) => setFormData((prev) => ({ ...prev, priority: val }))}
                >
                  <Option value="Pending">Pending</Option>
                  <Option value="InProgress">InProgress</Option>
                  <Option value="Done">Done</Option>
                </Select>
              </div>

              <div
                className="cursor-pointer bg-green-600 text-white text-center py-3 rounded-md font-poppins font-medium"
                onClick={handleSubmit}
              >
                Submit
              </div>
            </div>
          )}
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default TaskDetails;
