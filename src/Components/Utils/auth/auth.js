import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Auth({ children }) {
  const isLogIn = useSelector((state) => state.user.isLogIn);
  if (isLogIn) {
    return children;
  }
  else
   return <Navigate to='/'/>;

}

export default Auth;
