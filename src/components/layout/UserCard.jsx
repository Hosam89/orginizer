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
import { getInitials, showToast } from '../../utils/MultiPerpFunctions'
import LogoutIcon from '@mui/icons-material/Logout'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/slices/userSlice'
import { auth } from '../../firebase/config'
import { signOut } from 'firebase/auth'
import { useTranslation } from 'react-i18next'

function UserCard() {
  const { t } = useTranslation()
  const { photoURL, displayName, email } = useSelector(
    (state) => state.user.user
  )

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const dispatch = useDispatch()
  const handleLogout = async () => {
    try {
      await signOut(auth)
      dispatch(logout())
    } catch (error) {
      showToast('User loged out', 'success')
    }
  }
  return (
    <>
      <Button
        sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}
        onClick={(event) => setAnchorEl(event.currentTarget)}
      >
        {photoURL ? (
          <Avatar src={photoURL} alt={displayName} />
        ) : (
          <Avatar>{getInitials(displayName)}</Avatar>
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
            <Avatar src={photoURL} alt={displayName} />
          </ListItemAvatar>
          <ListItemText primary={displayName} secondary={email} />
        </ListItem>

        <ListItem disablePadding sx={{ margin: '8px 0', height: '48px' }}>
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText
              primary={t('logout')}
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
