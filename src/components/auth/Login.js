import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
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
          type="email"
          name="email"
          placeholder="Email"
          value={state.email}
          onChange={handleChange}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />
        <input type="password" name="password" placeholder="Password" value={state.password} onChange={handleChange} required />

        <button type="submit"> Register </button>
      </form>
    </section>
  );
};

export default Login;
