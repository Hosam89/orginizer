import * as React from 'react'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { NavigationItems } from '../../utils/MultiPerpFunctions'
import { Link, useLocation } from 'react-router-dom'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import theme from '../../themes/theme'

import UserCard from './UserCard'
const drawerWidth = 240

const openedMixin = {
  width: drawerWidth,
  transition:
    theme.transitions?.create('width', {
      easing: theme.transitions?.easing?.sharp,
      duration: theme.transitions?.duration?.enteringScreen,
    }) || 'none', // Fallback if theme is undefined
  overflowX: 'hidden',
}

const closedMixin = {
  transition:
    theme.transitions?.create('width', {
      easing: theme.transitions?.easing?.sharp,
      duration: theme.transitions?.duration?.leavingScreen,
    }) || 'none', // Fallback if theme is undefined
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`, // Correct usage of spacing
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
}

export default function MiniDrawer({ onDrawerToggle }) {
  const [open, setOpen] = React.useState(false)
  const navigationItems = NavigationItems()

  const handleDrawerOpen = () => {
    setOpen(true)
    onDrawerToggle(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
    onDrawerToggle(false)
  }

  const location = useLocation()
  const locationName = (location) => {
    switch (location) {
      case '/':
        return 'Dashboard'
      case '/application':
        return 'Application'
      case '/profile':
        return 'Profile'
      default:
        return 'Unknown'
    }
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <MuiAppBar
        position='fixed'
        sx={{
          zIndex: theme.zIndex.drawer + 1,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          }),
        }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{ marginRight: 5, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1 }}>
            {locationName(location.pathname)}
          </Typography>

          {/* Box to align the profile logo and logout button on the right */}
          <UserCard />
        </Toolbar>
      </MuiAppBar>

      <MuiDrawer
        variant='permanent'
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          whiteSpace: 'nowrap',
          boxSizing: 'border-box',
          '& .MuiDrawer-paper': {
            boxShadow: 'none',
            border: 'none',
            backgroundColor: 'lightblue',
            ...(open ? openedMixin : closedMixin),
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            justifyContent: 'space-between',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            backgroundColor: theme.palette.primary.main,
          }}
        >
          <Typography variant='h6'>Organizer</Typography>
          <IconButton onClick={handleDrawerClose}>
            {open && <MenuOpenIcon />}
          </IconButton>
        </Box>
        <Divider />
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
                      ? { justifyContent: 'initial' }
                      : { justifyContent: 'center' }),
                  }}
                >
                  <ListItemIcon sx={open ? { mr: 3 } : { mr: 'auto' }}>
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
    </Box>
  )
}
