import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3001/login', { email, password })
      .then((res) => {
        if (res.data.success) {
          console.log(res.data);
          // Handle successful login, e.g., save token, redirect, etc.
          navigate('/home'); // Redirect to a dashboard or home page after login
        } else {
          console.log('Login failed:', res.data.message);
        }
      })
      .catch((err) => {
        console.error('Error during login:', err);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <Link to="/register">Don't have an account? Signup</Link>
    </div>
  );
}

export default Login;