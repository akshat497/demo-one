import { createSlice } from "@reduxjs/toolkit";

const merchantOnBoardSlice = createSlice({
  name: "merchantonboard",
  initialState: {
    merchantonboard: null,
    merchantonboardloading: false,
    merchantonboarderror: null,
  },
  reducers: {
    setMerchantOnBoard: (state, action) => {
      state.merchantonboard = action.payload;
      
    },
    setMerchantOnBoardLoading: (state, action) => {
      state.merchantonboardloading = action.payload;
    },
    setMerchantOnBoardError: (state, action) => {
      state.merchantonboarderror = action.payload;
    },
  },
});

export const { setMerchantOnBoard, setMerchantOnBoardLoading, setMerchantOnBoardError } = merchantOnBoardSlice.actions;
export default merchantOnBoardSlice.reducer;
