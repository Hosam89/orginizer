import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './routes/Dashboard'
import Application from './routes/Application'
import './App.css'
// MUI Components
import { Box, ThemeProvider } from '@mui/material'

import MiniDrawer from './components/layout/NavigationDrawer'
import theme from './themes/theme'
import UserProfile from './routes/UserProfile'

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleDrawerToggle = (isOpen) => {
    setDrawerOpen(isOpen)
  }
  const drawerWidth = 240
  return (
    <ThemeProvider theme={theme}>
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
              <Route path='/application?/:id' element={<Application />} />
              <Route path='profile' element={<UserProfile />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}

export default App
