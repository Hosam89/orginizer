import { createSlice } from '@reduxjs/toolkit'

// Helper function to load user from localStorage
const loadUserFromLocalStorage = () => {
  try {
    const serializedUser = localStorage.getItem('user')
    return serializedUser ? JSON.parse(serializedUser) : null
  } catch (err) {
    return null
  }
}

// Initial state with user loaded from localStorage
const initialState = {
  user: loadUserFromLocalStorage(),
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
      localStorage.setItem('user', JSON.stringify(action.payload))
    },
    logout: (state) => {
      state.user = null
      localStorage.removeItem('user')
    },
  },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer
