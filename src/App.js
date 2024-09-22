import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './routes/Dashboard'
import Application from './routes/Application'
import theme from './themes/theme'
import './App.css'
// MUI Components
import { AppBar, Toolbar, IconButton, Box, CssBaseline } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import NavigationRail from './routes/components/layout/NavigationRail'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <CssBaseline />
        {/* AppBar */}
        <AppBar
          position='fixed'
          sx={{
            backgroundColor: theme.Palette.primary,
            boxShadow: 'none',
          }}
        >
          <Toolbar>
            <IconButton edge='start' color='inherit' aria-label='menu'>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Navigation Rail */}
        <NavigationRail />

        {/* Main content, shifted based on whether navigation rail is visible */}
        <Box
          sx={{
            ml: { md: '80px' },
            mt: 8,
            p: 2,
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
