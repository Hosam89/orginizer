import { createSlice } from "@reduxjs/toolkit";

// Helper function to load user from localStorage
const loadUserFromLocalStorage = () => {
  try {
    const serializedUser = localStorage.getItem("user");
    return serializedUser ? JSON.parse(serializedUser) : null;
  } catch (err) {
    return null;
  }
};

const initialState = {
  user: loadUserFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
