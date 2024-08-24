import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: "Saurav",
    age: 50
  },
  reducers: {
    setUserData(state, action) {
      return state = {
        ...state,
        ...action.payload
      }
    },
    getUserData(state, action) {
      return state;
    },
  },
})

export const { setUserData, getUserData } = userSlice.actions
export default userSlice.reducer