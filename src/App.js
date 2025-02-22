import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import Application from "./routes/Application";
import "./App.css";
import { Box } from "@mui/material";
import UserProfile from "./routes/UserProfile";
import Login from "./routes/Login";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/layout/Layout";
import { collapsedWidth, drawerWidth } from "./utils/MultiPerpFunctions";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const user = useSelector((state) => state.user?.user);

  return (
    <div className="App">
      <BrowserRouter>
        {user && user.isUserSignedIn ? (
          <>
            <Layout drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
            <Box
              sx={{
                marginLeft: drawerOpen
                  ? `${drawerWidth + 8}px`
                  : `${collapsedWidth + 8}px`,
                marginTop: "72px",
                marginRight: 11,
                overflowX: "hidden",
                height: "calc(100% - 64px)",
                borderRadius: "12px",
                zIndex: 1202,
                position: "relative",
                transition: "margin-left 0.3s",
                backgroundColor: "white",
              }}
            >
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/application?/:id" element={<Application />} />
                <Route path="profile" element={<UserProfile />} />
              </Routes>
            </Box>
          </>
        ) : (
          <Login />
        )}
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
