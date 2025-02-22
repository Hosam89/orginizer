import * as React from "react";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavigationItems } from "../../utils/MultiPerpFunctions";
import { Link } from "react-router-dom";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { styled, useTheme } from "@mui/material";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(1),
  ...theme.mixins.toolbar,
}));

export default function NavigationDrawer({ open, setOpen }) {
  const navigationItems = NavigationItems();
  const theme = useTheme();

  const handleToggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <MuiDrawer
      variant="permanent"
      open={open}
      sx={{
        "& .MuiDrawer-paper": {
          width: open ? "260px" : "100px",
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          overflowX: "hidden",
        },
      }}
    >
      <DrawerHeader>
        <Box
          sx={{
            transition: theme.transitions.create("margin", {
              easing: theme.transitions.easing.easeInOut,
              duration: theme.transitions.duration.standard,
            }),
            mt: "4px",
            marginLeft: open ? "220px" : "-20px",
          }}
        >
          <IconButton onClick={handleToggleDrawer}>
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
      </DrawerHeader>
      <List>
        {navigationItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <Link to={item.path}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  px: 2.5,
                  mx: 1,
                  ...(open
                    ? { justifyContent: "initial" }
                    : { justifyContent: "center" }),
                }}
              >
                <ListItemIcon sx={open ? { mr: 3 } : { mr: "auto" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </MuiDrawer>
  );
}
