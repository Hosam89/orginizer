import React from "react";
import Appbar from "./Appbar";
import NavigationDrawer from "./NavigationDrawer";
import { Box } from "@mui/material";
import theme from "../../themes/theme";
import { collapsedWidth, drawerWidth } from "../../utils/MultiPerpFunctions";

const Layout = ({ drawerOpen, setDrawerOpen }) => {
  return (
    <>
      <Appbar drawerOpen={drawerOpen} />
      <NavigationDrawer open={drawerOpen} setOpen={setDrawerOpen} />
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          position: "fixed",
          left: !drawerOpen ? collapsedWidth : drawerWidth,
          top: "64px",
          padding: "0px",
          borderTopLeftRadius: "20px",
          width: "20px",
          height: "100%",
          zIndex: 1200,
          transition: theme.transitions.create(["left"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }}
      />
    </>
  );
};

export default Layout;
