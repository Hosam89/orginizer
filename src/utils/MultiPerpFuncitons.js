import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded'
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
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
