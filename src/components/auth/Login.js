/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import actions from '../../actions/index.actions';
import { postFormRequest } from '../../services/apiRequests.services';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [state, setState] = useState({
    email: '',
    password: '',
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

    postFormRequest('sign_in', { session: { ...state } }).then(response => {
      if (response.data.is_success === true) {
        dispatch(actions.userActions.createUser(response.data.user));
        history.push('/homes');
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
            <form onSubmit={handleSubmit} className="form login">
              <div className="u-margin-bottom-small">
                <h2 className="heading-secondary">
                  Login
                </h2>
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
              {/* <input
                type="email"
                name="email"
                placeholder="Email"
                value={state.email}
                onChange={handleChange}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
              /> */}

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
              {/* <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={state.password}
                    onChange={handleChange}
                    required
                  />
              */}

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
