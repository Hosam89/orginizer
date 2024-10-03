import { Button, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import LanguageIcon from '@mui/icons-material/Language'
import i18n from '../../languages/i18n' // Assuming you have your i18n configuration here
import { useTranslation } from 'react-i18next'

function LanguageMenu() {
  const { t } = useTranslation()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    handleClose()
  }
  return (
    <>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          backgroundColor: 'white',
          borderRadius: '50%',
          padding: 0,
          minWidth: 0,
        }}
      >
        <LanguageIcon fontSize='large' />
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {/* Menu items to switch language */}
        <MenuItem onClick={() => changeLanguage('en')}>{t('english')}</MenuItem>
        <MenuItem onClick={() => changeLanguage('de')}>{t('german')}</MenuItem>
      </Menu>
    </>
  )
}

export default LanguageMenu
