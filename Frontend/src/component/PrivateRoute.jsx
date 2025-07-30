import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router'; // corrected import

const PrivateRoute = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true); // loading state

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/v1/authentication/getUser", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res,"1555")
        setUserData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
        setUserData(null);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // you can customize this
  }

  if (!userData) {
    return <Navigate to="/login" replace />; // use full path and 'replace'
  }

  return children;
};

export default PrivateRoute;