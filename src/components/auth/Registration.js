/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Loader from 'react-loader-spinner';
import Navbar from '../Navbar.component';
import actions from '../../actions/index.actions';
import { postFormRequest } from '../../services/apiRequests.services';
import Error from '../Error.component';

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

  const [status, setStatus] = useState({ loading: false, error: false, data: '' });

  const handleChange = event => {
    setState(prevProps => ({
      ...prevProps,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = event => {
    setStatus({ loading: true });
    postFormRequest('sign_up', { user: { ...state } }).then(response => {
      if (response.statusText === 'Created') {
        dispatch(actions.userActions.createUser(response.data.user));
        history.push('/');
      } else {
        setStatus({ loading: false, error: true, data: '' });
      }
    }).catch(error => setStatus({ loading: false, error: true, data: error }));
    event.preventDefault();
  };

  return (
    status.loading === true
      ? (
        <div className="loader">
          <Loader type="Bars" height={20} width={20} color="#cf3917" />
        </div>
      )
      : (
        <section className="form-section">
          <div className="form-section__mask">
            <Navbar cssClass="u-padding-left" />
            <form onSubmit={handleSubmit} className="form">
              <div className="u-margin-bottom-small">
                <h2 className="heading-secondary">
                  Registration
                </h2>
              </div>

              <div>
                { status.error === true
                  ? <Error content={status.data} title="Failed Registration Attempt" nav={false} />
                  : ''}
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
