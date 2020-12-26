/* eslint-disable camelcase */
import React, { useState /* useEffect */ } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import axios from 'axios';
import actions from '../../actions/index.actions';
import { postFormRequest } from '../../services/apiRequests.services';

const Registration = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [state, setState] = useState({
    fullname: '',
    email: '',
    username: '',
    password: '',
    password_confirmation: '',
  });

  const [status, setStatus] = useState({ loading: false });

  const handleChange = event => {
    setState(prevProps => ({
      ...prevProps,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = event => {
    setStatus({ loading: true });
    postFormRequest('sign_up', { user: { ...state } }).then(response => {
      if (response.data.is_success === true) {
        dispatch(actions.userActions.createUser(response.data.user));
        history.push('/');
      } else {
        console.log('todo populate registration error');
      }
    }).catch(error => {
      console.log('registrations error', error);
    });
    event.preventDefault();
  };

  return (
    status.loading === true ? (
      <h1>
        Submitting form...
      </h1>
    )
      : (
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
      )
  );
};

export default Registration;
