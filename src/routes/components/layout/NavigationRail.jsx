import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import theme from '../../../themes/theme'
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from '@mui/material'
import { NavigationItems } from '../../utils/MultiPerpFuncitons'
import { Link, useLocation } from 'react-router-dom'

export default function NavigationRail() {
  const navigationItems = NavigationItems()
  const location = useLocation()

  return (
    <Drawer
      variant='permanent'
      sx={{
        position: 'fixed',
        top: '64px',
      }}
    >
      <Box
        sx={{
          backgroundColor: theme.Palette.primary,
          width: '80px',
          paddingTop: '4px',
          height: '100%',
        }}
      >
        <Toolbar />
        <List>
          {navigationItems.map((item, index) => {
            const isSelected = location.pathname.endsWith(item.bath)
            return (
              <ListItem
                key={index}
                sx={{
                  display: 'block',
                  padding: '0 4px 8px 4px',
                  position: 'relative',
                }}
              >
                <Link to={item.bath}>
                  <ListItemButton
                    sx={{
                      height: '40px',
                      justifyContent: 'center',
                      padding: '0',
                      margin: '0 4px',
                      backgroundColor: isSelected ? '#deeef2' : '',
                      borderRadius: '8px',
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: '0',
                        color: isSelected ? 'black' : 'white',
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                  </ListItemButton>
                </Link>
                <Typography
                  fontSize='12px'
                  sx={{
                    margin: '0',
                    padding: '0',
                    fontSize: '12px',
                    textAlign: 'center',
                    color: isSelected ? 'black' : 'white',
                  }}
                >
                  {item.label}
                </Typography>
              </ListItem>
            )
          })}
        </List>
      </Box>
    </Drawer>
  )
}
