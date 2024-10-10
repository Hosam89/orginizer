import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: '',
  company: '',
  position: '',
  status: '',
  date: '',
  platform: '',
}

const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setApplication: (state, action) => {
      state.id = action.payload.id
      state.company = action.payload.company
      state.position = action.payload.position
      state.status = action.payload.status
      state.date = action.payload.date
      state.platform = action.payload.platform
    },
  },
})

export const { setApplication } = applicationSlice.actions
export default applicationSlice.reducer
