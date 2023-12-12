import React, { useEffect } from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"; // Adjust the path accordingly
import Adminpanel from "../pages/Adminpanel"

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  const { isAuthenticated, userRoles } = useAuth();
  const hasRequiredRole = roles
    ? roles.some((role) => userRoles.includes(role))
    : true;


  return (
    <Route
      {...rest}
      element={
        isAuthenticated && hasRequiredRole ? (
          <Component />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
