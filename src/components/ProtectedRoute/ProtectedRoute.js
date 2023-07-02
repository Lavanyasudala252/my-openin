import Cookies from "js-cookie";
import React from "react";
import { Outlet, Navigate } from "react-router";

function ProtectedRoute() {
  const authToken = Cookies.get("jwt_token");

  if (authToken === undefined) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
