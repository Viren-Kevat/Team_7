import React, { useState } from 'react';
import './signin.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const emailchange = (e) => {
    setEmail(e.target.value);
  };

  const passwordchange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="sign-in-container">
      <h2 className="sign-in-title">Sign In</h2>
      <form
        onSubmit={handleSubmit}
        className="sign-in-form"
        name="sign-in"
      >
        <input type="hidden" name="form-name" value="sign-in" />
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email" 
            value={email}
            onChange={emailchange}
            required
            placeholder="Enter your email"
            style={{ width: "-webkit-fill-available" }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={passwordchange}
            required
            placeholder="Enter your password"
            style={{ width: "-webkit-fill-available" }}
          />
        </div>
        <button type="submit" className="sign-in-button">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
