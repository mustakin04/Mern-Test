import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import './App.css'
import Registration from './pages/registration';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
 const router = createBrowserRouter([
 {
    path: "/",
    Component: Registration,
    // children: [
    //   { index: true, Component: Login},
    //   { path: "/login", Component: Login },
    // ],
  },
  {
    path:"/login",
    Component:Login,
  },
   {
    path:"/dashboard",
    Component:Dashboard,
  }
]);

  return (
    <>
     <RouterProvider router={router} />,
    </>
  )
}

export default App
