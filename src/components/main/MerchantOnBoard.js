// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { merchnatOnBoardi } from '../../redux/auth/authThunk';

// export default function MerchantOnBoard() {
//     const dispatch = useDispatch();
//     const merchantUserResponse = useSelector(
//         (state) => state.merchantonboard.merchantonboard
//       );
//       const searchUserLoading = useSelector(
//         (state) => state.searchuser.searchuserloading
//       );
//     const styles = {
//         form: {
//           display: "flex",
//           flexDirection: "column",
//           maxWidth: "300px",
//           margin: "0 auto",
//         },
//         inputGroup: {
//           marginBottom: "15px",
//         },
//         input: {
//           width: "100%",
//           padding: "10px",
//           boxSizing: "border-box",
//           borderRadius: "5px",
//           border: "1px solid #ccc",
//         },
//         submitButton: {
//           backgroundColor: "#4CAF50",
//           color: "white",
//           padding: "10px",
//           borderRadius: "5px",
//           cursor: "pointer",
//         },
//       };
//       const [merchantOnboardData, setMerchantOnboardData] = useState({
//         entity_type: "",
//         nature_of_business: "",
//         legal_name: "",
//         trade_name: "",
//         pan_number: "",
//         gst_no: "",
//         udyam_number: "",
//         date_of_registration: "",
//         registration_no: "",
//         address: {
//           area: "",
//           city: "",
//           line: "",
//           state: "",
//           pincode: "",
//           district: "",
//         },
//       });
//       const handleMerchantOnboardSubmit = async (e) => {
//         e.preventDefault();
    
//         // Dispatch action to call merchantonboard API
//         const response = await dispatch(merchnatOnBoardi(merchantOnboardData));
    
//         if (response?.status === "success" && response?.token) {
//           // Store the token in localStorage
//           localStorage.setItem("Authorization", response.token);
//         }
//       };
//       useEffect(() => {
//         debugger;
        
    
//         if (merchantUserResponse !== null && merchantUserResponse !== undefined) {
//             console.log(typeof merchantUserResponse?.statuscode);
//         const status = merchantUserResponse?.status
        
//           if (
//             status === "Success" &&
//             merchantUserResponse?.statuscode === "03"
//           ) {
//             localStorage.setItem("Authorization",searchUserResponse?.token)
//             setMerchantOnboardData((prevData) => ({
//               ...prevData,
//               legal_name: "", // Add default values as needed
//               pan_number: "",
//               gst_no: "",
//               udyam_number: "",
//               date_of_registration: "",
//               registration_no: "",
//             }));
//             setDisplayMerchantOnBoardForm(true);
//             setDisplayVerifyOtpForm(false);
//           } else if (searchUserResponse?.statuscode === "02") {
//             // Handle status code 02 - Display "Login with OTP" form
//             setDisplayMerchantOnBoardForm(false);
//             setDisplayVerifyOtpForm(false); // Hide the default OTP form
//             setDisplayLoginWithOtpForm(true);
//           }else {
//             setDisplayVerifyOtpForm(false);
//             setDisplayMerchantOnBoardForm(false);
//           }
//         }
//       }, [merchantUserResponse]);
//   return (

//   )
// }
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, merchnatOnBoardi, searchUser } from '../../redux/auth/authThunk';

export default function MerchantOnBoard() {
  const dispatch = useDispatch();
  const merchantUserResponse = useSelector((state) => state.merchantonboard.merchantonboard);
  const searchUserLoading = useSelector((state) => state.searchuser.searchuserloading);

  const styles = {
    form: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '300px',
      margin: '0 auto',
    },
    inputGroup: {
      marginBottom: '15px',
    },
    input: {
      width: '100%',
      padding: '10px',
      boxSizing: 'border-box',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    submitButton: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  const [merchantOnboardData, setMerchantOnboardData] = useState({
    entity_type: '',
    nature_of_business: '',
    legal_name: '',
    trade_name: '',
    pan_number: '',
    gst_no: '',
    udyam_number: '',
    date_of_registration: '',
    registration_no: '',
    address: {
      area: '',
      city: '',
      line: '',
      state: '',
      pincode: '',
      district: '',
    },
  });

  const [displayLoginForm, setDisplayLoginForm] = useState(false);
  const [mobile, setmobile] = useState("");
  const [password, setpassword] = useState("");

  const handleMerchantOnboardSubmit = async (e) => {
    e.preventDefault();

    // Dispatch action to call merchantonboard API
    const response = await dispatch(merchnatOnBoardi(merchantOnboardData));

    if (response?.status === 'success' && response?.token) {
      // Store the token in localStorage
      localStorage.setItem('Authorization', response.token);
    }
  };

  useEffect(() => {
    if (merchantUserResponse !== null && merchantUserResponse !== undefined) {
      const status = merchantUserResponse?.status;

      if (status === 'Success' && merchantUserResponse?.statuscode === '03') {
        setMerchantOnboardData((prevData) => ({
          ...prevData,
          legal_name: '', // Add default values as needed
          pan_number: '',
          gst_no: '',
          udyam_number: '',
          date_of_registration: '',
          registration_no: '',
        }));
        setDisplayLoginForm(true);
      } else {
        setDisplayLoginForm(false);
      }
    }
  }, [merchantUserResponse]);
const handleLoginFormSubmit=()=>{
    const  loginPayload={
        mobile,
    password
    }
    dispatch(loginUser(loginPayload))
}
  return (
    <>
      {displayLoginForm ? (
        // Render login form
        <form onSubmit={handleLoginFormSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
      <label htmlFor="Mobile">Mobile Number:</label>
      <input
        type="text"
        id="Mobile"
        value={merchantOnboardData.legal_name}
        onChange={(e) =>
          setmobile(e.target.value)
        }
        placeholder="Enter Legal Name"
        style={styles.input}
      />
    </div>
    <div style={styles.inputGroup}>
      <label htmlFor="Password">Password:</label>
      <input
        type="text"
        id="Password"
        value={merchantOnboardData.legal_name}
        onChange={(e) =>
         setpassword(e.target.value)
        }
        placeholder="Enter Legal Name"
        style={styles.input}
      />
    </div>
          <button type="submit" style={styles.submitButton}>
            Login
          </button>
        </form>
      ) : (
        // Render the original merchant onboard form
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
    </>
  );
}

