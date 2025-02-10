import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      // Redirect to login if no token is found
      navigate("/");
    } else {
      try {
        const decodedToken = jwtDecode(token);

        // Check if the token has expired
        if (decodedToken.exp * 1000 < Date.now()) {
          // Remove expired token and redirect to login
          localStorage.removeItem("role");
          localStorage.removeItem("token");
          navigate("/");
        }
      } catch (error) {
        console.error("Invalid token:", error);
        // Remove invalid token and redirect to login
        localStorage.removeItem("role");
        localStorage.removeItem("token");
        navigate("/");
      }
    }
  }, [token, navigate]); // Dependency array ensures the effect runs when token or navigate changes

  if (!token) {
    return null; // Render nothing until navigation is handled
  }

  return children; // Render the protected component if the token is valid
};

export default ProtectedRoute;
