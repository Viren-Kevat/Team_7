import React, { useState } from 'react';
import './signin.css';

const signIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const emailchange = (e)=>{
    setEmail(e.target.value)
  }

  const passwordchange =(e)=>{
    setPassword(e.target.value)
  }

  return (
    <div className="sign-in-container">
      <h2 className="sign-in-title">Sign In</h2>
      <form onSubmit={handleSubmit} className="sign-in-form" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={emailchange}
            required
            placeholder="Enter your email"
            style={{ width: "-webkit-fill-available"}}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={passwordchange}
            required
            placeholder="Enter your password"
            style={{ width: "-webkit-fill-available"}}

          />
        </div>
        <button type="submit" className="sign-in-button">Sign In</button>
        <input type="hidden" name="sign-in-form" value="contact" />
      </form>
    </div>
  );
};

export default signIn;
