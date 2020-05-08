import React, { useState } from 'react';
import './Login.css';

export default function Login(props) {
  // Will this work directly with Redux? or is there more I need to add?
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitting email ${email}`);
  };

  return (
    <div className="login-container">
      <form id="login" onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input
            required
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
