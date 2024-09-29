import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './routes/Dashboard'
import Application from './routes/Application'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './store/store'
// MUI Components
import { Box, ThemeProvider } from '@mui/material'
import MiniDrawer from './components/layout/NavigationDrawer'
import theme from './themes/theme'
import UserProfile from './routes/UserProfile'
import Login from './routes/Login'
import { useSelector } from 'react-redux'

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  // Get user from the Redux store
  const user = useSelector((state) => state.user.user)

  const handleDrawerToggle = (isOpen) => {
    setDrawerOpen(isOpen)
  }

  const drawerWidth = 240

  return (
    <Provider store={store}>
      {' '}
      {/* Wrap app with Redux Provider */}
      <ThemeProvider theme={theme}>
        <div className='App'>
          <BrowserRouter>
            {user ? (
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
                    {/* Conditionally render Dashboard or Login based on user state */}
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
        </div>
      </ThemeProvider>
    </Provider>
  )
}

export default App
