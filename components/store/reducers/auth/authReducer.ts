import { createSlice } from '@reduxjs/toolkit'


const initialState:any  = {
 
  token: null,

  userData: {
    _id: "",
    name: "John Doe",
    email: "john.doe+2@example.com",
    role: ""
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserDetails(state, { payload }) {
      state.token = payload.token
      state.userData = payload.userData
    },
   
  }
})

export const {
  setUserDetails,
  
} = authSlice.actions

export default authSlice.reducer
