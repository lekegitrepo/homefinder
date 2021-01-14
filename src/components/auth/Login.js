/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import actions from '../../actions/index.actions';
import { postFormRequest } from '../../services/apiRequests.services';
import Navbar from '../Navbar.component';
import Error from '../Error.component';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [status, setStatus] = useState({ loading: false, error: false, data: '' });

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
    setStatus({ loading: true });

    postFormRequest('sign_in', { session: { ...state } }).then(response => {
      if (response.statusText === 'OK') {
        dispatch(actions.userActions.createUser(response.data.user));
        history.push('/homes');
      } else {
        setStatus({ loading: false, error: true, data: '' });
      }
    }).catch(error => setStatus({ loading: false, error: true, data: error }));
    event.preventDefault();
  };

  return (
    status.loading === true
      ? (<h1> Submitting form... </h1>)
      : (
        <section className="form-section">
          <div className="form-section__mask">
            <Navbar cssClass="u-padding-left" />
            <form onSubmit={handleSubmit} className="form login">
              <div className="u-margin-bottom-small">
                <h2 className="heading-secondary">
                  Login
                </h2>
              </div>
              <div>
                { status.error === true && status.loading === false
                  ? <Error content={status.data} title="Failed Login Attempt" nav={false} />
                  : ''}
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

              <div className="form__group form-btn">
                <button type="submit"> Sign In </button>
              </div>
            </form>
          </div>
        </section>
      )
  );
};

export default Login;
