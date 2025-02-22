import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { collapsedWidth, drawerWidth } from "../../utils/MultiPerpFunctions";
import { Grid2 } from "@mui/material";
import UserCard from "./UserCard";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import theme from "../../themes/theme";

function Appbar({ drawerOpen }) {
  console.log("====================================");
  console.log(drawerOpen);
  console.log("====================================");
  const { t } = useTranslation();
  const application = useSelector((state) => state.application);
  const location = useLocation();
  const locationName = () => {
    if (String(location.pathname).includes("application")) {
      return `${t("application")} ${t("at")} ${application.company}`;
    }
    if (String(location.pathname).includes("profile")) {
      return "Profile";
    }
    return "Dashboard";
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          width: drawerOpen
            ? `calc(100% - ${drawerWidth}px)`
            : `calc(100% - ${collapsedWidth}px)`,
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
            }}
          >
            {locationName()}
          </Typography>
          <Grid2 container spacing={1.5}>
            <UserCard />
          </Grid2>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Appbar;
