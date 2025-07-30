import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import './App.css'
import Registration from './pages/registration';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import TaskDetails from './pages/TaskDetails';

function App() {
 const router = createBrowserRouter([
  {
    path: "/",
    Component: Registration,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
    {
    path: "/taskDetails/:id",
    Component: TaskDetails,
  },

]);

  return (
    <>
     <RouterProvider router={router} />,
    </>
  )
}

export default App
