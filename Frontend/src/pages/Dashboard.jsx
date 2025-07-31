import React, { useEffect, useState } from "react";
import banner from "../assets/banner.jpg";
import Container from "../component/Container";
import Navbar from "../component/Navbar";
import { FaAddressBook, FaChartPie } from "react-icons/fa";
import { Select, Option } from "@material-tailwind/react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { CgCalendarDates } from "react-icons/cg";
import { LuDot } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { userData } from "../../slices/cardSlices";
import PrivateRoute from "../component/PrivateRoute";

const Dashboard = () => {
  const dispatch=useDispatch()
  const [show, setShow] = useState(false);
  const [allTask, setAllTask] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    priority: "",
  });
  const [data, setData] = useState(""); // priority filter

  const handleClick = () => {
    setShow(true);
  };

  const handleChange = (eOrValue) => {
    if (typeof eOrValue === "string") {
      setFormData((prev) => ({ ...prev, priority: eOrValue }));
    } else {
      const { name, value } = eOrValue.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const getTask = async () => {
    try {
      const response = await axios.get(
        "https://mern-test-9ndt.onrender.com/api/v1/task/getAllTask",
        { withCredentials: true }
      );

      const alltask = response.data.task;

      if (data) {
        const filtertask = alltask.filter((task) => task.priority === data);
        setAllTask(filtertask);
      } else {
        setAllTask(alltask);
      }

      setShow(false);
    } catch (error) {
      console.error("❌ Error fetching tasks:", error.response?.data || error.message);
    }
  };

  const handleSubmit = async () => {
    try {
      const result = await axios.post(
        "https://mern-test-9ndt.onrender.com/api/v1/task/createTask",
        formData
      );
      toast.success(result.data.message);
      console.log(result.data.task)
      dispatch(userData(result.data))
      setShow(false);
      setFormData({ title: "", description: "", date: "", priority: "" });
      getTask();
    } catch (error) {
      const message = error?.response?.data?.message || "Something went wrong";
      toast.error(message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const deleteTask = await axios.delete(
        `https://mern-test-9ndt.onrender.com/api/v1/task/deletedSingleTask/${id}`
      );
      toast.success(deleteTask.data.message);
      setAllTask((prevTasks) => prevTasks.filter((task) => task._id !== id));
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Fetch all tasks on first load
  useEffect(() => {
    getTask();
  }, []);

  // Re-fetch when `data` (priority filter) changes
  useEffect(() => {
    getTask();
  }, [data]);

  return (
     <PrivateRoute>
       <div>
      <div
        className="w-full h-[300px] bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="w-full h-full bg-black bg-opacity-70 ">
          <Container className="relative ">
            <Navbar />
            <div className="mt-[47px]">
              <p className="font-poppins font-medium text-[24px] text-[#60e5ae]">
                Hi Mustakin
              </p>
              <h1 className="font-poppins font-semibold text-[40px] text-white mb-10">
                Welcome to Dashboard
              </h1>
            </div>

            <div className="absolute w-full bg-white py-12 px-5 border">
              <div className="flex justify-between">
                <div>
                  <p className="font-poppins font-semibold text-[24px] text-[#1f1f1f]">
                    All Task List
                  </p>
                </div>
                <div className="flex gap-3">
                  {/* Priority Filter */}
                  <div className="w-72">
                    <Select label="Filter by Priority" value={data} onChange={(val) => setData(val)}>
                      <Option value="Pending">Pending</Option>
                      <Option value="Done">Done</Option>
                      <Option value="InProgress">InProgress</Option>
                    </Select>
                  </div>
                  {/* Add Task Button */}
                  <div
                    className="w-72 rounded-md bg-[#60e5ae] py-[12px] px-[44px] cursor-pointer"
                    onClick={handleClick}
                  >
                    <div className="flex gap-[10px]">
                      <FaAddressBook className="text-2xl text-center" />
                      <p className="font-poppins font-medium text-[16px] text-[#1f1f1f]">
                        Add New Task
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Task List */}
              <div className="flex flex-wrap gap-5 mt-[46px]">
                {allTask.map(({ _id, title, description, date, priority }, index) => (
                  <Link
                    to={`/taskDetails/${_id}`}
                    key={index}
                    className="w-[404px] p-3 h-[176px] border shadow-sm"
                  >
                    <div className="flex justify-between">
                      <div className="flex gap-3">
                        <div className="h-[43px] w-[43px] flex justify-center items-center rounded-full bg-[#60e5ae]">
                          <FaChartPie className="text-xl" />
                        </div>
                        <h3 className="font-poppins font-semibold text-[24px] text-[#1f1f1f]">
                          {title}
                        </h3>
                      </div>
                      <div>
                        <RiDeleteBin5Line
                          className="text-2xl text-[#ff4c24] cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault(); // prevent navigation
                            handleDelete(_id);
                          }}
                        />
                      </div>
                    </div>
                    <div className="ml-12 mb-[28px]">
                      <p className="font-poppins font-normal text-[14px] text-[#667085]">
                        {description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-3">
                        <CgCalendarDates className="text-2xl" />
                        <h3 className="font-poppins font-normal text-[14px] text-[#1f1f1f]">
                          {date}
                        </h3>
                      </div>
                      <div className="flex items-center gap-3 text-[#e343e6]">
                        <LuDot className="text-3xl" />
                        <p>{priority}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Container>

          {/* Modal */}
          {show && (
            <div className="absolute top-24 right-20 p-6 bg-white w-[500px] py-14 border rounded-md shadow-lg">
              <div className="absolute top-5 right-5">
                <RxCross2 className="text-4xl cursor-pointer" onClick={() => setShow(false)} />
              </div>
              <h4 className="font-poppins font-semibold text-[20px] text-[#1f1f1f] text-center mb-5">
                Add Task
              </h4>
              <div className="w-full mb-4">
                <label className="block mb-2 text-sm text-slate-600">Title</label>
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-md text-sm"
                  placeholder="Type here..."
                />
              </div>
              <div className="w-full mb-4">
                <label className="block mb-2 text-sm text-slate-600">Description</label>
                <input
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-md text-sm"
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
                  className="w-full border px-3 py-2 rounded-md text-sm"
                />
              </div>
              <div className="w-full mb-6">
                <label className="block mb-2 text-sm text-slate-600">Priority</label>
                <Select
                  label="Select Priority"
                  value={formData.priority}
                  onChange={(val) => setFormData({ ...formData, priority: val })}
                >
                  <Option value="Pending">Pending</Option>
                  <Option value="Done">Done</Option>
                  <Option value="InProgress">InProgress</Option>
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
     </PrivateRoute>
  );
};

export default Dashboard;
