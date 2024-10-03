import {
  Avatar,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
} from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getInitiatls } from '../../utils/MultiPerpFuncitons'
import LogoutIcon from '@mui/icons-material/Logout'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/slices/userSlice'
import { auth } from '../../firebase/config'
import { signOut } from 'firebase/auth'

function UserCard() {
  const user = useSelector((state) => state.user.user)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const dispatch = useDispatch()
  const handleLogout = async () => {
    try {
      await signOut(auth)
      dispatch(logout())
    } catch (error) {
      console.error('Error signing out: ', error)
    }
  }
  return (
    <>
      <Button
        sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}
        onClick={(event) => setAnchorEl(event.currentTarget)}
      >
        {user.photoURL ? (
          <Avatar src={user.photoURL} alt={user.displayName} />
        ) : (
          <Avatar>{getInitiatls(user.displayName)}</Avatar>
        )}
      </Button>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={() => setAnchorEl(null)}
        onClick={() => setAnchorEl(null)}
        slotProps={{
          paper: { sx: { borderRadius: '28px', maxWidth: '328px' } },
        }}
      >
        <ListItem>
          <ListItemAvatar>
            <Avatar src={user.photoURL} alt={user.displayName} />
          </ListItemAvatar>
          <ListItemText primary={user.displayName} secondary={user.email} />
        </ListItem>

        <ListItem disablePadding sx={{ margin: '8px 0', height: '48px' }}>
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText
              primary='Logout'
              primaryTypographyProps={{
                fontSize: '14px',
                color: '#757575',
              }}
            />
          </ListItemButton>
        </ListItem>
      </Menu>
    </>
  )
}

export default UserCard
