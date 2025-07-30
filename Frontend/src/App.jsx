import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import TaskDetails from './pages/TaskDetails';
import SpinWheel from './pages/SpinWeel';
import Registration from './pages/Registration';
import { Provider } from 'react-redux'
import { store } from "../store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/taskDetails/:id",
    element: <TaskDetails />,
  },
  {
    path: "/spin",
    element: <SpinWheel />,
  }
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
