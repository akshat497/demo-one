import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchUser,
  verifyOtp,
  merchnatOnBoardi,
  loginUserWithOtp,
  loginUser,
  userOnboarding,
} from "../../redux/auth/authThunk";
import OtpLoginModal from "../modals/OtpLoginModal";
import MerchantOnBoard from "./MerchantOnBoard";
import { useNavigate } from "react-router-dom";


export default function LoginComponent() {
    const navigate=useNavigate()
    const styles = {
        form: {
          display: "flex",
          flexDirection: "column",
          maxWidth: "300px",
          margin: "0 auto",
        },
        inputGroup: {
          marginBottom: "15px",
        },
        input: {
          width: "100%",
          padding: "10px",
          boxSizing: "border-box",
          borderRadius: "5px",
          border: "1px solid #ccc",
        },
        submitButton: {
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
          cursor: "pointer",
        },
      };
      
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.login.loading);
  const searchUserResponse = useSelector(
    (state) => state.searchuser.searchuser
  );
  const loginResponse = useSelector(
    (state) => state.login.user
  );
  const merchantOnBoardResponse = useSelector(
    (state) => state.merchantonboard.merchantonboard
  );
  const userOnBoardResponse=useSelector((state)=>state.useronboard.useronboard)
  const verifyUserResponse=useSelector((state)=>state.verifyotp.verifyotp)
  const searchUserLoading = useSelector(
    (state) => state.searchuser.searchuserloading
  );
  const [mobile, setmobile] = useState("");
  const [password, setpassword] = useState("");

  const [mobileNumber, setMobileNumber] = useState("");
  const [otpForLogin, setOtpForLogin] = useState(""); 
  const [otp, setOTP] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const [displayVerifyOtpForm, setDisplayVerifyOtpForm] = useState(false);
  const [displayMerchantOnBoardForm, setDisplayMerchantOnBoardForm] =
    useState(false);
  const [uniqueId, setUniqueId] = useState(null);
  const [merchantOnboardData, setMerchantOnboardData] = useState({
    entity_type: "",
    nature_of_business: "",
    legal_name: "",
    trade_name: "",
    pan_number: "",
    gst_no: "",
    udyam_number: "",
    date_of_registration: "",
    registration_no: "",
    address: {
      area: "",
      city: "",
      line: "",
      state: "",
      pincode: "",
      district: "",
    },
  });
  const [displayLoginWithOtpForm, setDisplayLoginWithOtpForm] = useState(false);
  const [displayLoginForm, setDisplayLoginForm] = useState(false);
  const [userOnBoardForm, setuserOnBoardForm] = useState(false);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setCoordinates({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []); // Empty dependency array to ensure it runs only once on mount
useEffect(()=>{
    if(loginResponse?.statuscode==='02'){
        setDisplayLoginWithOtpForm(true)
        setDisplayLoginForm(false)
        setDisplayVerifyOtpForm(false)
        setuserOnBoardForm(false)
        setDisplayLoginForm(false)
        setDisplayMerchantOnBoardForm(false)
        setDisplayVerifyOtpForm(false)
    }
},[loginResponse])
  const handleSearchUser = (e) => {
    e.preventDefault();

    const userCredentials = {
      mobile: mobileNumber,
      mac_id: "demomac_id", // Replace with your logic for getting mac_id
      coordinates: coordinates,
    };

    dispatch(searchUser(userCredentials));
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();

    const otpVerificationData = {
      unique_id: uniqueId,
      otp: otp,
      mac_id: "demomac_id", // Replace with your logic for getting mac_id
      password: password,
      usertype: "Merchant",
    };

    dispatch(verifyOtp(otpVerificationData));
  };


useEffect(()=>{
    if(merchantOnBoardResponse?.status==="success"){
       localStorage.setItem("Authorization",merchantOnBoardResponse?.token)
        navigate('/dash-board')
    }
},[merchantOnBoardResponse])
  const handleMerchantOnboardSubmit = async (e) => {
    e.preventDefault();

    // Dispatch action to call merchantonboard API
     dispatch(merchnatOnBoardi(merchantOnboardData));
   
  };
  const [formData, setFormData] = useState({
    name: '',
    date_of_birth: '',
    gender: '',
    email_id: '',
    address: {
      area: '',
      city: '',
      line: '',
      state: '',
      pincode: '',
      district: '',
    },
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the field is in the address object, update it accordingly
    if (name.startsWith('address.')) {
      const addressField = name.split('.')[1];
      setFormData((prevData) => ({
        ...prevData,
        address: {
          ...prevData.address,
          [addressField]: value,
        },
      }));
    } else {
      // Otherwise, update the field directly
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., send data to an API
    dispatch(userOnboarding(formData))
  };
  useEffect(()=>{
    if(verifyUserResponse?.statuscode==="06"){
        localStorage.setItem("Authorization",verifyUserResponse?.token);
        setuserOnBoardForm(true)
        setDisplayLoginForm(false)
        
        setDisplayLoginWithOtpForm(false)
        setDisplayMerchantOnBoardForm(false)
        setDisplayVerifyOtpForm(false)
        

    }
  },[verifyUserResponse])
  useEffect(()=>{
    if(userOnBoardResponse?.statuscode==="07"){
        localStorage.setItem("Authorization",userOnBoardResponse?.token);
        setuserOnBoardForm(false)
        setDisplayLoginForm(false)
        
        setDisplayLoginWithOtpForm(false)
        setDisplayMerchantOnBoardForm(true)
        setDisplayVerifyOtpForm(false)
        

    }
  },[userOnBoardResponse])
  useEffect(() => {
    debugger;
    

    if (searchUserResponse !== null && searchUserResponse !== undefined) {
        console.log(typeof searchUserResponse?.statuscode);
    const status = searchUserResponse?.status
    const Status = searchUserResponse?.Status
      if (Status === "Success" && searchUserResponse?.statuscode === "05") {
        setUniqueId(searchUserResponse?.unique_id);
        setOTP(""); // Clear OTP field
        setDisplayVerifyOtpForm(true);
        setDisplayMerchantOnBoardForm(false);
      } else if (
        status === "Success" &&
        searchUserResponse?.statuscode === "07"
      ) {
        localStorage.setItem("Authorization",searchUserResponse?.token)
        setMerchantOnboardData((prevData) => ({
          ...prevData,
          legal_name: "", // Add default values as needed
          pan_number: "",
          gst_no: "",
          udyam_number: "",
          date_of_registration: "",
          registration_no: "",
        }));
        setDisplayMerchantOnBoardForm(true);
        setDisplayVerifyOtpForm(false);
      } else if (searchUserResponse?.statuscode === "02") {
        // Handle status code 02 - Display "Login with OTP" form
        setDisplayMerchantOnBoardForm(false);
        setDisplayVerifyOtpForm(false); // Hide the default OTP form
        setDisplayLoginWithOtpForm(true);
      }else if (status === 'pending' && searchUserResponse?.statuscode === '03') {
        
        setDisplayLoginForm(true)
    }else if (status === 'Success' && searchUserResponse?.statuscode === '06') {
      
        setuserOnBoardForm(true)
    }else if(searchUserResponse?.message==="Login success, go to dashboard"){
        navigate("/dash-board")
    }
    else {
        setDisplayVerifyOtpForm(false);
        setDisplayMerchantOnBoardForm(false);
      }
    }
  }, [searchUserResponse]);
  const handleLoginWithOtpSubmit = (e) => {
    e.preventDefault();
    const otpLoginPayload = {
        otp: otpForLogin,
        mobile: mobileNumber,
        mac_id: "demomac_id", // Replace with your logic for getting mac_id
      };
      dispatch(loginUserWithOtp(otpLoginPayload))
  };
  const handleLoginFormSubmit=(e)=>{
    e.preventDefault();
    const  loginPayload={
        mobile,
    password
    }
    dispatch(loginUser(loginPayload))
}
  return (
    <>
      <OtpLoginModal />
      <section style={{ backgroundColor: "#342461" }}>
        <div className="container-fluid" id="login_bg_img">
          <div className="row">
            <div className="logo_login">
              <a href="/">
                <img src="img/logo-white.png" alt="logo" />
              </a>
            </div>
            <div className="col-md-8 col-12">
              <div className="login_inner_section">
                <a href="index.html">
                  <img
                    src="./img/new_user_app.png"
                    width="45%"
                    height="100%"
                    className="pt-5"
                    alt=""
                  />
                </a>
                <h3 className="pt-4"> One Place For Everything Banking</h3>
                <p />
                <p />
                <p />
                <p />
              </div>
            </div>
            <div className="col-md-4 col-12 p-2 login_welcome">
              <div className="log_hadding">
                <h1 style={{ fontWeight: 600 }}>Hey, Welcome back!</h1>
                <p className="mb-5">
                  Securely login to your EgPaid Merchant Account
                </p>
                <form onSubmit={handleSearchUser} className={displayMerchantOnBoardForm||displayVerifyOtpForm||displayLoginForm||userOnBoardForm||displayLoginWithOtpForm?"d-none":"d-block"}>
                  <div className="mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Mobile Number"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <br />
                  <button
                    style={{ width: "100%" }}
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {searchUserLoading ? "Proceeding..." : "Proceed"} &nbsp;
                  </button>
                </form>

                {/* Conditional rendering for OTP input and verify button */}
                {displayVerifyOtpForm === true && (
                  <form onSubmit={handleVerifyOTP} >
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOTP(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                      />
                    </div>
                    <br />
                    <button
                      style={{ width: "100%" }}
                      type="submit"
                      className="btn btn-primary"
                      disabled={loading}
                    >
                      Verify OTP &nbsp;
                    </button>
                  </form>
                )}
                {displayLoginWithOtpForm && (
    <form onSubmit={handleLoginWithOtpSubmit}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter OTP for Login"
          value={otpForLogin}
          onChange={(e) => setOtpForLogin(e.target.value)}
          
        />
      </div>
      <br />
      <button
        style={{ width: "100%" }}
        type="submit"
        className="btn btn-primary"
        disabled={loading}
      >
        Login with OTP &nbsp;
      </button>
    </form>
  )}
  {userOnBoardForm&&(
    <form onSubmit={handleSubmit}  style={styles.form}>
      <div style={styles.inputGroup}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
           placeholder="Name"
          style={styles.input}
          
         
        />
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="date_of_birth">Date of Birth:</label>
        <input
          type="date"
          id="date_of_birth"
          name="date_of_birth"
          value={formData.date_of_birth}
          onChange={handleChange}
         
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
           
          style={styles.input}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="email_id">Email ID:</label>
        <input
          type="email"
          id="email_id"
          name="email_id"
          value={formData.email_id}
          onChange={handleChange}
           placeholder="Email"
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="area">Area:</label>
        <input
          type="text"
          id="area"
          name="address.area"
          value={formData.address.area}
          onChange={handleChange}
           placeholder="Area"
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="address.city"
          value={formData.address.city}
          onChange={handleChange}
           placeholder="City"
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="line">Line:</label>
        <input
          type="text"
          id="line"
          name="address.line"
          value={formData.address.line}
          onChange={handleChange}
           placeholder="Line"
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="state">State:</label>
        <input
          type="text"
          id="state"
          name="address.state"
          value={formData.address.state}
          onChange={handleChange}
           placeholder="State"
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="pincode">Pincode:</label>
        <input
          type="text"
          id="pincode"
          name="address.pincode"
          value={formData.address.pincode}
          onChange={handleChange}
           placeholder="Pincode"
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="district">District:</label>
        <input
          type="text"
          id="district"
          name="address.district"
          value={formData.address.district}
          onChange={handleChange}
           placeholder="District"
          style={styles.input}
        />
      </div>

      <button type="submit"  style={styles.submitButton}>Submit</button>
    </form>
  )}
  {displayLoginForm &&(
        // Render login form
        <form onSubmit={handleLoginFormSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
      <label htmlFor="Mobile">Mobile Number:</label>
      <input
        type="text"
        id="Mobile"
        value={mobile}
        onChange={(e) =>
          setmobile(e.target.value)
        }
        placeholder="Enter Legal Name"
        style={styles.input}
        required
      />
    </div>
    <div style={styles.inputGroup}>
      <label htmlFor="Password">Password:</label>
      <input
        type="text"
        id="Password"
        value={password}
        onChange={(e) =>
         setpassword(e.target.value)
        }
        placeholder="Enter Legal Name"
        style={styles.input}
        required
      />
    </div>
          <button type="submit" style={styles.submitButton}>
            Login
          </button>
        </form>
      )}
                {/* Conditional rendering for merchantonboard form */}
                {displayMerchantOnBoardForm && (
                    <form onSubmit={handleMerchantOnboardSubmit} style={styles.form}>
    <div style={styles.inputGroup}>
      <label htmlFor="legalName">Legal Name:</label>
      <input
        type="text"
        id="legalName"
        value={merchantOnboardData.legal_name}
        onChange={(e) =>
          setMerchantOnboardData((prevData) => ({
            ...prevData,
            legal_name: e.target.value,
          }))
        }
        placeholder="Enter Legal Name"
        style={styles.input}
      />
    </div>

    <div style={styles.inputGroup}>
      <label htmlFor="tradeName">Trade Name:</label>
      <input
        type="text"
        id="tradeName"
        value={merchantOnboardData.trade_name}
        onChange={(e) =>
          setMerchantOnboardData((prevData) => ({
            ...prevData,
            trade_name: e.target.value,
          }))
        }
        placeholder="Enter Trade Name"
        style={styles.input}
      />
    </div>

    <div style={styles.inputGroup}>
      <label htmlFor="panNumber">PAN Number:</label>
      <input
        type="text"
        id="panNumber"
        value={merchantOnboardData.pan_number}
        onChange={(e) =>
          setMerchantOnboardData((prevData) => ({
            ...prevData,
            pan_number: e.target.value,
          }))
        }
        placeholder="Enter PAN Number"
        style={styles.input}
      />
    </div>

    <div style={styles.inputGroup}>
      <label htmlFor="gstNumber">GST Number:</label>
      <input
        type="text"
        id="gstNumber"
        value={merchantOnboardData.gst_no}
        onChange={(e) =>
          setMerchantOnboardData((prevData) => ({
            ...prevData,
            gst_no: e.target.value,
          }))
        }
        placeholder="Enter GST Number"
        style={styles.input}
      />
    </div>

    <div style={styles.inputGroup}>
      <label htmlFor="udyamNumber">Udyam Number:</label>
      <input
        type="text"
        id="udyamNumber"
        value={merchantOnboardData.udyam_number}
        onChange={(e) =>
          setMerchantOnboardData((prevData) => ({
            ...prevData,
            udyam_number: e.target.value,
          }))
        }
        placeholder="Enter Udyam Number"
        style={styles.input}
      />
    </div>

    <div style={styles.inputGroup}>
      <label htmlFor="registrationDate">Date of Registration:</label>
      <input
        type="text"
        id="registrationDate"
        value={merchantOnboardData.date_of_registration}
        onChange={(e) =>
          setMerchantOnboardData((prevData) => ({
            ...prevData,
            date_of_registration: e.target.value,
          }))
        }
        placeholder="Enter Date of Registration"
        style={styles.input}
      />
    </div>

    <div style={styles.inputGroup}>
      <label htmlFor="registrationNumber">Registration Number:</label>
      <input
        type="text"
        id="registrationNumber"
        value={merchantOnboardData.registration_no}
        onChange={(e) =>
          setMerchantOnboardData((prevData) => ({
            ...prevData,
            registration_no: e.target.value,
          }))
        }
        placeholder="Enter Registration Number"
        style={styles.input}
      />
    </div>
    <div style={styles.inputGroup}>
      <label htmlFor="area">Area:</label>
      <input
        type="text"
        id="area"
        value={merchantOnboardData.address.area}
        onChange={(e) =>
          setMerchantOnboardData((prevData) => ({
            ...prevData,
            address: { ...prevData.address, area: e.target.value },
          }))
        }
        placeholder="Enter Area"
        style={styles.input}
      />
    </div>

    <div style={styles.inputGroup}>
      <label htmlFor="city">City:</label>
      <input
        type="text"
        id="city"
        value={merchantOnboardData.address.city}
        onChange={(e) =>
          setMerchantOnboardData((prevData) => ({
            ...prevData,
            address: { ...prevData.address, city: e.target.value },
          }))
        }
        placeholder="Enter City"
        style={styles.input}
      />
    </div>

    <div style={styles.inputGroup}>
      <label htmlFor="line">Line:</label>
      <input
        type="text"
        id="line"
        value={merchantOnboardData.address.line}
        onChange={(e) =>
          setMerchantOnboardData((prevData) => ({
            ...prevData,
            address: { ...prevData.address, line: e.target.value },
          }))
        }
        placeholder="Enter Line"
        style={styles.input}
      />
    </div>

    <div style={styles.inputGroup}>
      <label htmlFor="state">State:</label>
      <input
        type="text"
        id="state"
        value={merchantOnboardData.address.state}
        onChange={(e) =>
          setMerchantOnboardData((prevData) => ({
            ...prevData,
            address: { ...prevData.address, state: e.target.value },
          }))
        }
        placeholder="Enter State"
        style={styles.input}
      />
    </div>

    <div style={styles.inputGroup}>
      <label htmlFor="pincode">Pincode:</label>
      <input
        type="text"
        id="pincode"
        value={merchantOnboardData.address.pincode}
        onChange={(e) =>
          setMerchantOnboardData((prevData) => ({
            ...prevData,
            address: { ...prevData.address, pincode: e.target.value },
          }))
        }
        placeholder="Enter Pincode"
        style={styles.input}
      />
    </div>

    <div style={styles.inputGroup}>
      <label htmlFor="district">District:</label>
      <input
        type="text"
        id="district"
        value={merchantOnboardData.address.district}
        onChange={(e) =>
          setMerchantOnboardData((prevData) => ({
            ...prevData,
            address: { ...prevData.address, district: e.target.value },
          }))
        }
        placeholder="Enter District"
        style={styles.input}
      />
    </div>
    <button type="submit" style={styles.submitButton}>
      Submit Merchant Onboard
    </button>
  </form>
)}

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
