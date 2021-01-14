import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from './Logo.component';
import { userLogout } from '../services/apiRequests.services';
import actions from '../actions/index.actions';

const Navbar = ({ cssClass }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser);
  const [status, setStatus] = useState(currentUser.loggedIn);

  const handleLogout = () => {
    if (currentUser.user) {
      const { user } = currentUser;
      userLogout('log_out', user.id, user.auth_token).then(res => {
        if (res.statusText === 'No Content') {
          dispatch(actions.userActions.logout());
          setStatus(false);
        }
      }).catch(err => err);
    }
  };
  return (
    <nav className={cssClass === '' ? 'header__logo-box' : `header__logo-box ${cssClass}`}>
      <Logo />
      <div className="header-navbar__link">
        <div className="header-navbar__link--sign-up">
          <Link to={(status === true) ? '/homes' : '/registration'}>
            {(status === true) ? 'HOMES' : 'SIGN UP'}
          </Link>
        </div>
        <div className="header-navbar__link--sign-in">
          <Link to={(status === true) ? '/favourites' : '/login'}>
            {(status === true) ? 'FAVOURITES' : 'SIGN IN'}
          </Link>
        </div>
        {
          (status === true)
            ? (
              <div className="header-navbar__link--sign-in">
                <button type="submit" onClick={handleLogout}>
                  {(status === true) ? 'LOGOUT' : 'SIGN IN'}
                </button>
              </div>
            )
            : ''
        }
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  cssClass: '',
};

Navbar.propTypes = {
  cssClass: PropTypes.string,
};

export default Navbar;
