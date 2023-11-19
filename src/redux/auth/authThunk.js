import { LoginUser, LoginUserWithOtp, MerchantOnBoard, SearchUser, UserOnBoarding, VerifyOtp } from "../../services/Services";
import { setUserLogin, setLoadingLogin, setErrorLogin } from "./loginSlice";
import { setLoginWithOtp, setLoginWithOtpLoading, setLoginWithOtpError }  from './loginWithOtpSlice'
import { setSearchUser, setSearchUserLoading, setSearchUserError }  from './searchUserSlice'
import { setVerifyOtp, setVerifyOtpLoading, setVerifyOtpError } from './verifyOtpSlice'
import { setUserOnBoard, setUserOnBoardLoading, setUserOnBoardError }  from './UserOnBoardSlice'
import { setMerchantOnBoard, setMerchantOnBoardLoading, setMerchantOnBoardError } from './merchantOnBoardSlice'
import { toast } from "react-toastify";

export const searchUser = (userData) => async (dispatch) => {
    try {
      
      dispatch(setSearchUserLoading(true));
      const response = await SearchUser(userData); 
     

      
      dispatch(setSearchUser(response));
      dispatch(setSearchUserLoading(false));
    } catch (error) {
      console.log(error?.response?.data?.message )
      toast.error(error?.response?.data?.message ||error.message)
      // toast.error("something went wrong")
      dispatch(setSearchUserError(error));
      dispatch(setSearchUserLoading(false));
    }
  };

  export const loginUserWithOtp = (userData) => async (dispatch) => {
    try {
      
      dispatch(setLoginWithOtpLoading(true));
      const response = await LoginUserWithOtp(userData); 
     

      
      dispatch(setLoginWithOtp(response));
      dispatch(setLoginWithOtpLoading(false));
    } catch (error) {
      console.log(error?.response?.data?.message )
      toast.error(error?.response?.data?.message ||error.message)
      // toast.error("something went wrong")
      dispatch(setLoginWithOtpError(error));
      dispatch(setLoginWithOtpLoading(false));
    }
  };
  export const loginUser = (userData) => async (dispatch) => {
    try {
      
      dispatch(setLoadingLogin(true));
      const response = await LoginUser(userData); 
     

      
      dispatch(setUserLogin(response));
      dispatch(setLoadingLogin(false));
    } catch (error) {
      console.log(error?.response?.data?.message )
      toast.error(error?.response?.data?.message ||error.message)
      // toast.error("something went wrong")
      dispatch(setErrorLogin(error));
      dispatch(setLoadingLogin(false));
    }
  };
  export const verifyOtp = (userData) => async (dispatch) => {
    try {
      
      dispatch(setVerifyOtpLoading(true));
      const response = await VerifyOtp(userData); 
     

      
      dispatch(setVerifyOtp(response));
      dispatch(setVerifyOtpLoading(false));
    } catch (error) {
      console.log(error?.response?.data?.message )
      toast.error(error?.response?.data?.message ||error.message)
      // toast.error("something went wrong")
      dispatch(setVerifyOtpError(error));
      dispatch(setVerifyOtpLoading(false));
    }
  };
  export const userOnboarding = (userData) => async (dispatch) => {
    try {
      
      dispatch(setUserOnBoardLoading(true));
      const response = await UserOnBoarding(userData); 
     

      
      dispatch(setUserOnBoard(response));
      dispatch(setUserOnBoardLoading(false));
    } catch (error) {
      console.log(error?.response?.data?.message )
      toast.error(error?.response?.data?.message ||error.message)
      // toast.error("something went wrong")
      dispatch(setUserOnBoardError(error));
      dispatch(setUserOnBoardLoading(false));
    }
  };
  export const merchnatOnBoardi = (userData) => async (dispatch) => {
    try {
      
      dispatch(setMerchantOnBoardLoading(true));
      const response = await MerchantOnBoard(userData); 
     

      
      dispatch(setMerchantOnBoard(response));
      dispatch(setMerchantOnBoardLoading(false));
    } catch (error) {
      console.log(error?.response?.data?.message )
      toast.error(error?.response?.data?.message ||error.message)
      // toast.error("something went wrong")
      dispatch(setMerchantOnBoardError(error));
      dispatch(setMerchantOnBoardLoading(false));
    }
  };