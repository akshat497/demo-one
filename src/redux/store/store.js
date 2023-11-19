import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../auth/loginSlice"
import searchuserReducer from '../auth/searchUserSlice'
import loginwithotpReducer from '../auth/loginWithOtpSlice'
import verifyotpReducer from '../auth/verifyOtpSlice'
import useronboardReducer from '../auth/UserOnBoardSlice'
import merchantonboardReducer from '../auth/merchantOnBoardSlice'
import thunk from "redux-thunk";
const store = configureStore({
    reducer: {
      login: loginReducer,
      searchuser:searchuserReducer,
      verifyotp:verifyotpReducer,
      loginwithotp:loginwithotpReducer,
      useronboard:useronboardReducer,
      merchantonboard:merchantonboardReducer
    },
    middleware: [thunk],
  });
  
  export default store;