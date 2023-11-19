import { createSlice } from "@reduxjs/toolkit";

const verifyOtpSlice = createSlice({
  name: "verifyotp",
  initialState: {
    verifyotp: null,
    verifyotploading: false,
    verifyotperror: null,
  },
  reducers: {
    setVerifyOtp: (state, action) => {
      state.verifyotp = action.payload;
      
    },
    setVerifyOtpLoading: (state, action) => {
      state.verifyotploading = action.payload;
    },
    setVerifyOtpError: (state, action) => {
      state.verifyotperror = action.payload;
    },
  },
});

export const { setVerifyOtp, setVerifyOtpLoading, setVerifyOtpError } = verifyOtpSlice.actions;
export default verifyOtpSlice.reducer;
