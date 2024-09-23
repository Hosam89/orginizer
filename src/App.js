import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './routes/Dashboard'
import Application from './routes/Application'
import './App.css'
// MUI Components
import { Box } from '@mui/material'

import MiniDrawer from './routes/components/layout/NavigationDrawer'

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleDrawerToggle = (isOpen) => {
    setDrawerOpen(isOpen)
  }
  const drawerWidth = 240
  return (
    <div className='App'>
      <BrowserRouter>
        <MiniDrawer
          onDrawerToggle={handleDrawerToggle}
          drawerWidth={drawerWidth}
        />

        <Box
          sx={{
            ml: drawerOpen ? `${drawerWidth}px` : '72px',
            mt: 8,
            p: 2,
            transition: 'margin 0.3s',
          }}
        >
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/application' element={<Application />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  )
}

export default App
