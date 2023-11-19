
import { createAxiosInstance, createAxiosInstanceAuth } from "./InstanceApi";
export const SearchUser = async (body) => {
    try {
     
      const response = await createAxiosInstance().post(process.env.REACT_APP_BASE_URL+'search-user',body );
      return response.data;
    } catch (error) {
  
      throw error;
    }
  };
  export const LoginUserWithOtp = async (body) => {
    try {
     
      const response = await createAxiosInstance().post(process.env.REACT_APP_BASE_URL+'saved_mac_id',body );
      return response.data;
    } catch (error) {
  
      throw error;
    }
  };
export const LoginUser = async (body) => {
    try {
     
      const response = await createAxiosInstance().post(process.env.REACT_APP_BASE_URL+'login-with-password',body );
      return response.data;
    } catch (error) {
  
      throw error;
    }
  };
  export const VerifyOtp = async (body) => {
    try {
     
      const response = await createAxiosInstance().post(process.env.REACT_APP_BASE_URL+'verify-otp',body );
      return response.data;
    } catch (error) {
  
      throw error;
    }
  };
  export const UserOnBoarding = async (body) => {
    try {
     
      const response = await createAxiosInstanceAuth().post(process.env.REACT_APP_BASE_URL+'user-onbording',body );
      return response.data;
    } catch (error) {
  
      throw error;
    }
  };
  export const MerchantOnBoard = async (body) => {
    try {
     
      const response = await createAxiosInstanceAuth().post(process.env.REACT_APP_BASE_URL+'merchant-onbording',body );
      return response.data;
    } catch (error) {
  
      throw error;
    }
  };

 