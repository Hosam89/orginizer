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
