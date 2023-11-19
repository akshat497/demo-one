import { createSlice } from "@reduxjs/toolkit";

const UserOnBoardSlice = createSlice({
  name: "useronboard",
  initialState: {
    useronboard: null,
    useronboardloading: false,
    useronboarderror: null,
  },
  reducers: {
    setUserOnBoard: (state, action) => {
      state.useronboard = action.payload;
      
    },
    setUserOnBoardLoading: (state, action) => {
      state.useronboardloading = action.payload;
    },
    setUserOnBoardError: (state, action) => {
      state.useronboarderror = action.payload;
    },
  },
});

export const { setUserOnBoard, setUserOnBoardLoading, setUserOnBoardError } = UserOnBoardSlice.actions;
export default UserOnBoardSlice.reducer;
