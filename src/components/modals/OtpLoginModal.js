import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUserWithOtp } from '../../redux/auth/authThunk';

export default function OtpLoginModal() {
  const dispatch = useDispatch();

  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handleLoginWithOtp = () => {
    const userData = {
      mobile: mobileNumber,
      otp: otp,
      mac_id:"demomac_id"
    };

    dispatch(loginUserWithOtp(userData));
  };
const handleClear=()=>{
    setOtp("")
    setMobileNumber("")
}
  return (
    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title fs-5" id="exampleModalLabel">
              OTP LOGIN
            </h3>
  
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="mobileNumber" className="form-label">
                Enter Mobile Number
              </label>
              <input
                type="number"
                className="form-control"
                id="mobileNumber"
                placeholder="Enter Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="otp" className="form-label">
                Enter OTP
              </label>
              <input
                type="number"
                className="form-control"
                id="otp"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
          </div>
          <div className="modal-footer">
          <button type="button" className="btn btn-secondary mx-2" data-bs-dismiss="modal" aria-label="Close" onClick={handleClear}>Close</button>
            <button type="button" className="btn btn-primary" onClick={handleLoginWithOtp}>
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
