/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */

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
        <section className="form-section">
          <div className="form-section__mask">
            <form onSubmit={handleSubmit} className="form">
              <div className="u-margin-bottom-small">
                <h2 className="heading-secondary">
                  Registration
                </h2>
              </div>

              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  id="fname"
                  name="fullname"
                  placeholder="Full Name"
                  value={state.fullname}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="fname" className="form__label">Full name</label>
              </div>
              <div className="form__group">
                <input
                  type="email"
                  name="email"
                  className="form__input"
                  id="email"
                  placeholder="Email"
                  value={state.email}
                  onChange={handleChange}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  required
                />
                <label htmlFor="email" className="form__label">Email</label>
              </div>
              <div className="form__group">
                <input
                  type="text"
                  name="username"
                  className="form__input"
                  id="uname"
                  placeholder="Username"
                  value={state.username}
                  onChange={handleChange}
                />
                <label htmlFor="uname" className="form__label">Username</label>
              </div>
              <div className="form__group">
                <input
                  type="password"
                  name="password"
                  className="form__input"
                  id="password"
                  placeholder="Password"
                  value={state.password}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="password" className="form__label">Password</label>
              </div>
              <div className="form__group">
                <input
                  type="password"
                  name="password_confirmation"
                  className="form__input"
                  id="pass_confirmation"
                  placeholder="Password Confirmation"
                  value={state.password_confirmation}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="pass_confirmation" className="form__label">Password Confirmation</label>
              </div>

              <div className="form__group form-btn">
                <button type="submit"> Sign Up </button>
              </div>
            </form>
          </div>
        </section>
      )
  );
};

export default Registration;
