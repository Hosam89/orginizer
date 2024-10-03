import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './routes/Dashboard'
import Application from './routes/Application'
import './App.css'
import { Box } from '@mui/material'
import MiniDrawer from './components/layout/NavigationDrawer'
import UserProfile from './routes/UserProfile'
import Login from './routes/Login'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const user = useSelector((state) => state.user?.user)

  const handleDrawerToggle = (isOpen) => {
    setDrawerOpen(isOpen)
  }

  const drawerWidth = 240

  return (
    <div className='App'>
      <BrowserRouter>
        {user && user.isUserSignedIn ? (
          <>
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
          </>
        ) : (
          <Login />
        )}
      </BrowserRouter>
      <ToastContainer />
    </div>
  )
}

export default App
