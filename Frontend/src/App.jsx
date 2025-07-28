import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import './App.css'
import Registration from './pages/registration';

function App() {
 const router = createBrowserRouter([
 {
    path: "/",
    Component: Registration,
    // children: [
    //   { index: true, Component: Home },
    //   { path: "settings", Component: Settings },
    // ],
  },
]);

  return (
    <>
     <RouterProvider router={router} />,
    </>
  )
}

export default App
