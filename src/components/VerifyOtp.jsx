import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Signup.css'; // Reuse Signup.css for consistent styling

export default function VerifyOtp() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      await axios.post('http://localhost:7004/api/auth/verify-otp', {
        email,
        otp,
      });
      setSuccess('Account created successfully! Redirecting to login...');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      setError(err.response?.data || 'Invalid OTP');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Verify OTP</h2>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <form onSubmit={handleSubmit} className="signup-form">
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
          Already have an account?{' '}
          <Link to="/" className="signin-link">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
