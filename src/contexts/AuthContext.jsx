import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRoles, setUserRoles] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
          // Include the token in the Authorization header for authenticated requests
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/user", {
          withCredentials: true,
        });

        const user = response.data;

        setIsAuthenticated(true);
        setUserRoles(user.roles ? [user.roles] : []); // Assuming roles is a string, convert it to an array
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []); // Empty dependency array to execute only once when the component mounts

  const login = (userData) => {
    // Your authentication logic here
    // Set isAuthenticated and userRoles based on the userData
    setIsAuthenticated(true);
    setUserRoles(userData.roles || []); // Assuming your user data has a roles property
  };

  const logout = () => {
    // Your logout logic here
    // Reset isAuthenticated and userRoles
    setIsAuthenticated(false);
    setUserRoles([]);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRoles, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
