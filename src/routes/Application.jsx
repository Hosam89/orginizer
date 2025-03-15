import {
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function Application() {
  const application = useSelector((state) => state.application);
  const { t } = useTranslation();

  // Local state to manage the selected status, assuming application object is read-only from Redux store
  const [status, setStatus] = useState(application.status);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <Grid2 container>
      <Grid2
        container
        lg={6}
        direction="column"
        gap={2}
        alignItems={"stretch"}
        sx={{ flexGrow: 1 }}
      >
        <TextField label={t("company")} value={application.company} fullWidth />
        <TextField
          label={t("position")}
          value={application.position}
          fullWidth
        />
        <FormControl fullWidth>
          <InputLabel>{t("status")}</InputLabel>
          <Select
            label={t("status")}
            value={status}
            onChange={handleStatusChange}
          >
            <MenuItem value="applied">Applied</MenuItem>
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="interview">Interview</MenuItem>
            <MenuItem value="offer">Offer</MenuItem>
            <MenuItem value="rejected">Rejected</MenuItem>
          </Select>
        </FormControl>
        <TextField
          type="date"
          label={t("date")}
          value={application.date}
          fullWidth
        />
        <TextField label={"Platform"} value={application.platform} fullWidth />
      </Grid2>
      <Grid2 lg={6} sx={{ flexGrow: 1 }}></Grid2>
    </Grid2>
  );
}

export default Application;
