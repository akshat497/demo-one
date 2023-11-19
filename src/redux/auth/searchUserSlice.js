import { createSlice } from "@reduxjs/toolkit";

const searchUserSlice = createSlice({
  name: "searchuser",
  initialState: {
    searchuser: null,
    searchuserloading: false,
    searchusererror: null,
  },
  reducers: {
    setSearchUser: (state, action) => {
      state.searchuser = action.payload;
      
    },
    setSearchUserLoading: (state, action) => {
      state.searchuserloading = action.payload;
    },
    setSearchUserError: (state, action) => {
      state.searchusererror = action.payload;
    },
  },
});

export const { setSearchUser, setSearchUserLoading, setSearchUserError } = searchUserSlice.actions;
export default searchUserSlice.reducer;
