import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import PropTypes from 'prop-types';
import axios from 'axios';

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();

  const handleChange = event => {
    setState(prevProps => ({
      ...prevProps,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = event => {
    const { email, password } = state;

    axios.post('https://homefinderapi.herokuapp.com/api/v1/sign_in', {
      session: {
        email,
        password,
      },
    },
    { withCredentials: true }).then(response => {
      if (response.data.is_success === true) {
        console.log(response);
        history.push('/homes');
      } else {
        console.log('todo populate registration error');
      }
    }).catch(error => {
      console.log('registrations error', error);
    });
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

/* Login.defaultProps = {};

Login.propTypes = {}; */

export default Login;
