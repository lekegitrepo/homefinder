// API URL: https://homefinderapi.herokuapp.com/api/v1/...
import React, { useState } from 'react';

const Registration = () => {
  const [state, setState] = useState({
    fullname: '',
    email: '',
    username: '',
    password: '',
    password_confirmation: '',
  });

  const handleChange = event => {
    setState(prevProps => ({
      ...prevProps,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <section className="registration-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          value={state.fullname}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={state.email}
          onChange={handleChange}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={state.username}
          onChange={handleChange}
        />
        <input type="password" name="password" placeholder="Password" value={state.password} onChange={handleChange} required />
        <input type="password" name="password_confirmation" placeholder="Password Confirmation" value={state.password_confirmation} onChange={handleChange} required />

        <button type="submit"> Register </button>
      </form>
    </section>
  );
};

export default Registration;
