import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import axios from 'axios';
import actions from '../../actions/index.actions';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const [status, setStatus] = useState({ loading: false });

  const currentUser = useSelector(state => state.currentUser);

  const handleChange = event => {
    setState(prevProps => ({
      ...prevProps,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = event => {
    const { email, password } = state;
    setStatus({ loading: true });

    axios.post('https://homefinderapi.herokuapp.com/api/v1/sign_in', {
      session: {
        email,
        password,
      },
    },
    { withCredentials: true }).then(response => {
      if (response.data.is_success === true) {
        dispatch(actions.userActions.createUser(response.data));
        console.log(response);
        console.log(currentUser);
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
    status.loading === true ? (
      <h1>
        Submitting form...
        {currentUser.user.user.fullname}
      </h1>
    )
      : (
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
      )
  );
};

/* Login.defaultProps = {};

Login.propTypes = {}; */

export default Login;
