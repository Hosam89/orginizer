import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Button, Container, Typography, Box } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { auth, googleProvider } from "../firebase/config";
import { signInWithPopup } from "firebase/auth";
import { showToast } from "../utils/MultiPerpFunctions";

const Login = () => {
  const [cookies, setCookie] = useCookies(["access_token"]);
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.accessToken) {
      navigate("/");
    }
  }, [cookies.accessToken, navigate]);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log(user);

      const tokenManager = user.stsTokenManager;

      // Set cookie and redirect
      setCookie("access_token", tokenManager.accessToken, {
        maxAge: tokenManager.expirationTime / 1000,
        path: "/",
        secure: true,
        httpOnly: false,
      });

      navigate("/");
    } catch (error) {
      let errorMessage;
      switch (error.code) {
        case "auth/user-cancelled":
          errorMessage =
            "You cancelled the login process. Please try again to login.";
          break;
        case "auth/popup-closed-by-user":
          errorMessage =
            "You closed the login popup. Please try again to login.";
          break;
        default:
          errorMessage = "An unexpected error occurred. Please try again.";
      }

      showToast(errorMessage, "error");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20vh",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Login to Your App
        </Typography>
        <Button
          variant="contained"
          startIcon={<GoogleIcon />}
          onClick={handleLogin}
          sx={{ mt: 3 }}
        >
          Sign in with Google
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
