import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const AuthWrapper = ({ children }) => {
  const [cookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookies.access_token) {
      navigate("/login");
    }
  }, [cookies.access_token, navigate]);

  return <>{children}</>;
};

export default AuthWrapper;
