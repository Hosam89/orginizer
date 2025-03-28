import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { jobApplications } from "../Data";
import theme from "../themes/theme";
import { useNavigate } from "react-router-dom";
import { Box, Grid2, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { setApplication } from "../store/slices/applicationSlice";
import CreateApplicationDialog from "../components/dashboared/CreateApplicationDialog";
import { useTranslation } from "react-i18next";

function Dashboard() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [data, setData] = React.useState(jobApplications);

  const handleDeleteRow = (id, e) => {
    e.stopPropagation();
    const updatedData = data.filter((row) => row.id !== id);
    setData(updatedData);
  };

  const columns = [
    {
      field: "company",
      headerName: t("company"),
      flex: 1,
    },
    {
      field: "position",
      headerName: t("position"),
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      cellClassName: (params) => {
        switch (params.value.toLowerCase()) {
          case "applied":
            return "status-applied";
          case "interview":
            return "status-interview";
          case "pending":
            return "status-pending";
          case "offer":
            return "status-offer";
          case "rejected":
            return "status-rejected";
          default:
            return "";
        }
      },
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
    {
      field: "platform",
      headerName: "Platform",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "",
      renderCell: (params) => (
        <IconButton
          aria-label="delete"
          size="small"
          onClick={(e) => handleDeleteRow(params.id, e)}
          sx={{ opacity: 0, transition: "opacity 0.3s" }}
        >
          <DeleteIcon />
        </IconButton>
      ),
      sortable: false,
      width: 50,
    },
  ];

  return (
    <div style={{ minHeight: "400px", marginInline: "auto", width: "70%" }}>
      <Grid2 container justifyContent="space-between">
        <Grid2>
          <Box>Filter Drop dows</Box>
        </Grid2>
        <Grid2>
          <CreateApplicationDialog setData={setData} />
        </Grid2>
      </Grid2>
      <DataGrid
        rows={data}
        columns={columns}
        checkboxSelection
        disableSelectionOnClick
        disableColumnResize={true}
        disableColumnMenu
        density="compact"
        onRowClick={(params) => {
          dispatch(setApplication(params.row));
          navigate(`/application/${params.id}`);
        }}
        getRowSpacing={(params) => ({
          bottom: 8,
        })}
        sx={{
          border: "none",
          boxShadow: "none",
          ".MuiDataGrid-cell": {
            borderBottom: "none",
            outline: "none",
            border: "none",
            "&:focus": {
              outline: "none",
            },
          },

          ".MuiDataGrid-columnHeaders": {
            backgroundColor: "#f0f0f0",
            borderBottom: "none",
          },
          ".MuiDataGrid-footerContainer": {
            borderTop: "none",
            display: "none",
          },

          // Show trash icon only on hover
          "& .MuiDataGrid-row:hover .MuiIconButton-root": {
            opacity: 1,
          },

          // Custom background colors for different statuses
          "& .status-applied": {
            backgroundColor: theme.palette.applied.main,
            color: "#1e88e5",
          },
          "& .status-interview": {
            backgroundColor: theme.palette.interview.main,
            color: "#673ab7",
          },
          "& .status-pending": {
            backgroundColor: theme.palette.pending.main,
            color: "#fbc02d",
          },
          "& .status-offer": {
            backgroundColor: theme.palette.offer.main,
            color: "#388e3c",
          },
          "& .status-rejected": {
            backgroundColor: theme.palette.rejected.main,
            color: "#d32f2f",
          },
        }}
      />
    </div>
  );
}

export default Dashboard;
