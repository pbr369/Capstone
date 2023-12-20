import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRoles, setUserRoles] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (token) {
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
        setUserRoles(user.roles ? [user.roles] : []);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []); // Empty

  const login = (userData) => {
    setIsAuthenticated(true);
    setUserRoles(userData.roles || []);

    // Store the token in local storage for persistence
    localStorage.setItem("jwt", userData.token);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRoles([]);

    // Remove the token from local storage
    localStorage.removeItem("jwt");
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
