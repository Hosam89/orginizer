import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded'
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded'
export const NavigationItems = () => {
  return [
    {
      label: 'Dashboard',
      icon: <DashboardRoundedIcon />,
      bath: '/',
    },
    {
      label: 'Application',
      icon: <AppRegistrationRoundedIcon />,
      bath: '/application',
    },
  ]
}

export const getBreakPoints = () => {
  const breakPoints = {
    desktop900: '(min-width:900px)',
  }
  return breakPoints
}
