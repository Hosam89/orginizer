import React from 'react'
import { Button, Container, Typography, Box } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import { auth, googleProvider } from '../firebase/config'
import { signInWithPopup } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { login } from '../store/slices/userSlice'
import { toast } from 'react-toastify'
import { showToast } from '../utils/MultiPerpFuncitons'

const Login = () => {
  const dispatch = useDispatch()

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      const user = result.user
      dispatch(
        login({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        })
      )
    } catch (error) {
      let errorMessage
      switch (error.code) {
        case 'auth/user-cancelled':
          errorMessage =
            'You cancelled the login process. Please try again to login.'
          break
        case 'auth/popup-closed-by-user':
          errorMessage =
            'You closed the login popup. Please try again to login.'
          break
        default:
          errorMessage = 'An unexpected error occurred. Please try again.'
      }

      showToast(errorMessage, 'error')
    }
  }

  return (
    <Container maxWidth='sm'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '20vh',
        }}
      >
        <Typography variant='h4' component='h1' gutterBottom>
          Login to Your App
        </Typography>
        <Button
          variant='contained'
          startIcon={<GoogleIcon />}
          onClick={handleLogin}
          sx={{ mt: 3 }}
        >
          Sign in with Google
        </Button>
      </Box>
    </Container>
  )
}

export default Login
