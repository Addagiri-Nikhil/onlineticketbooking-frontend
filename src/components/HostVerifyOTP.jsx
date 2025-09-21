import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Signup.css'; // Use same styles for consistency

const HostVerifyOTP = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const handleVerify = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      await axios.post('http://localhost:7004/api/host-auth/verify-otp', {
        email,
        otp,
      });
      setSuccess('Host verified successfully! Redirecting to login...');
      setTimeout(() => {
        navigate('/host/login');
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Host OTP Verification</h2>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <form onSubmit={handleVerify} className="signup-form">
          <div>
            <input
              type="text"
              name="otp"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="signup-input"
              required
            />
          </div>
          <button type="submit" className="signup-button">
            Verify OTP
          </button>
        </form>
        <p className="signup-footer">
          Already verified?{' '}
          <Link to="/host/login" className="signin-link">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HostVerifyOTP;
