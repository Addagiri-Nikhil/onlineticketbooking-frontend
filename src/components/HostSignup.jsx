import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Signup.css'; // Assuming you are using the same CSS as Signup.jsx

export default function HostSignup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    otp: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      };

      if (formData.phoneNumber) {
        payload.phoneNumber = formData.phoneNumber;
      }

      await axios.post('http://localhost:7004/api/host-auth/send-otp', payload);
      setSuccess('OTP sent to your email!');
      navigate('/host/verify-otp', { state: { email: formData.email } }); // Route for Host OTP page
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send OTP');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Host Signup</h2>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <form onSubmit={handleSubmit} className="signup-form">
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="signup-input"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="signup-input"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="signup-input"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="signup-input"
              required
            />
          </div>
          <button type="submit" className="signup-button">
            Send OTP
          </button>
        </form>

        <p className="signup-footer">
          Already a host?{' '}
          <Link to="/host/login" className="signin-link">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
