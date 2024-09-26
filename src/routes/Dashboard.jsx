import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import { jobApplications } from '../Data'

function Dashboard() {
  const columns = [
    { field: 'company', headerName: 'Company', width: 200 },
    { field: 'position', headerName: 'Position', width: 200 },
    { field: 'status', headerName: 'Status', width: 200 },
    { field: 'date', headerName: 'Date', width: 200 },

    { field: 'platfrom', headerName: 'Platform', width: 200 },
  ]

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={jobApplications}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
        pagination={false}
        sx={{
          border: 'none',
          boxShadow: 'none',
          '.MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '.MuiDataGrid-columnHeaders': {
            backgroundColor: '#f0f0f0',
            borderBottom: 'none',
          },
          '.MuiDataGrid-footerContainer': {
            borderTop: 'none',
            display: 'none',
          },
        }}
      />
    </div>
  )
}

export default Dashboard
