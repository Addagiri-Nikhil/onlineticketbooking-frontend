import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Login.css';

const HostLogin = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [loginStatus, setLoginStatus] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:7004/api/host-auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const host = await response.json();
        localStorage.setItem('host', JSON.stringify(host));
        setLoginStatus('Login successful!');
        navigate('/host/dashboard'); // or your intended host landing page
      } else {
        alert('Invalid credentials or unverified account.');
      }
    } catch (err) {
      console.error('Login error:', err);
      alert('Login failed due to server error.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Host Sign In</h2>
        <form onSubmit={handleLogin} className="login-form">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={credentials.email}
              onChange={handleChange}
              className="login-input"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
              className="login-input"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>
        <p className="login-footer">
          Don't have an account?{' '}
          <Link to="/host/signup" className="signup-link">
            Sign Up
          </Link>
        </p>
        {loginStatus && <p className="success-message">{loginStatus}</p>}
      </div>
    </div>
  );
};

export default HostLogin;
