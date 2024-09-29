import React from 'react'
import { Button, Container, Typography, Box } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import { auth, googleProvider } from '../firebase/config'
import { signInWithPopup } from 'firebase/auth' // Import signInWithPopup from Firebase
import { useDispatch } from 'react-redux'
import { login } from '../store/slices/userSlice'

const Login = () => {
  const dispatch = useDispatch()

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider) // Sign in with Google
      const user = result.user // Get the user object from Firebase

      // Dispatch login action to the Redux store
      dispatch(
        login({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        })
      )

      console.log('User logged in:', user)
    } catch (error) {
      console.error('Error logging in with Google:', error)
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
