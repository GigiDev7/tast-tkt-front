import React from "react";
import { useNavigate, Navigate } from "react-router-dom";

const AdminGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user")!);

  if (!user || user.role !== "admin") {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default AdminGuard;
