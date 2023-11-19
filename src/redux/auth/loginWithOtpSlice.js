import { createSlice } from "@reduxjs/toolkit";

const loginWithOtpSlice = createSlice({
  name: "loginwithotp",
  initialState: {
    loginwithotp: null,
    loginwithotploading: false,
    loginwithotperror: null,
  },
  reducers: {
    setLoginWithOtp: (state, action) => {
      state.loginwithotp = action.payload;
      
    },
    setLoginWithOtpLoading: (state, action) => {
      state.loginwithotploading = action.payload;
    },
    setLoginWithOtpError: (state, action) => {
      state.loginwithotperror = action.payload;
    },
  },
});

export const { setLoginWithOtp, setLoginWithOtpLoading, setLoginWithOtpError } = loginWithOtpSlice.actions;
export default loginWithOtpSlice.reducer;
