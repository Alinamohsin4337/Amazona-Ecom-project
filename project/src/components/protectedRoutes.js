import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Store } from "../Store";

export default function ProtectedRoute({ children }) {
  const { state } = useContext(Store);
  const { userInfo } = state;

  // Assuming userInfo.isAdmin represents the user's admin role
  const isAdmin = userInfo && userInfo.isAdmin;

  return isAdmin ? children : <Navigate to="/signin" />;
}
