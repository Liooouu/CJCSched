import React from "react";
import { Navigate } from "react-router-dom";

// adminOnly = true if this route is for admin only
const ProtectedRoute = ({ children, adminOnly = false }) => {
  // Get user info from localStorage
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  // Redirect if user is not logged in
  if (!user || !user.email) {
    return <Navigate to="/login" replace />;
  }

  // Redirect if route is admin-only but user is not an admin
  if (adminOnly && user.role !== "admin") {
    return <Navigate to="/homepage" replace />;
  }

  // Otherwise, allow access
  return children;
};

export default ProtectedRoute;
