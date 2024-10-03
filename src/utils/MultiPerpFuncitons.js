import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded'
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import { toast } from 'react-toastify'
export const NavigationItems = () => {
  return [
    {
      label: 'Dashboard',
      icon: <DashboardRoundedIcon />,
      path: '/',
    },
    {
      label: 'Application',
      icon: <AppRegistrationRoundedIcon />,
      path: '/application',
    },
    {
      label: 'User Profile',
      icon: <ManageAccountsIcon />,
      path: '/profile',
    },
  ]
}

export const getBreakPoints = () => {
  const breakPoints = {
    desktop900: '(min-width:900px)',
  }
  return breakPoints
}

export const getInitiatls = (name) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
}

export const showToast = (message, type) => {
  const fixedValuse = {
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: false,
    draggable: false,
    theme: 'dark',
    pauseOnHover: false,
    progress: undefined,
  }
  switch (type) {
    case 'success':
      toast.success(message, {
        position: 'bottom-left',
        ...fixedValuse,
      })
      break
    case 'error':
      toast.error(message, {
        position: 'bottom-left',
        ...fixedValuse,
      })
      break
    case 'info':
      toast.info(message, {
        position: 'bottom-left',
        ...fixedValuse,
      })
      break
    case 'warning':
      toast.warn(message, {
        position: 'bottom-left',
        ...fixedValuse,
      })
      break
    default:
      toast(message)
      break
  }
}
