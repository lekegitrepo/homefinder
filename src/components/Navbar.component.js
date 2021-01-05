import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from './Logo.component';

const Navbar = ({ userStatus }) => (
  <nav className="header__logo-box">
    <Logo />
    <div className="header-navbar__link">
      <div className="header-navbar__link--sign-in">
        <Link to={userStatus.user ? '/favourites' : '/login'}>
          {userStatus.user ? 'FAVOURITES' : 'SIGN IN'}
        </Link>
      </div>
      <div className="header-navbar__link--sign-up">
        <Link to={userStatus.user ? '/homes' : '/registration'}>
          {userStatus.user ? 'HOMES' : 'SIGN UP'}
        </Link>
      </div>
    </div>
  </nav>
);

Navbar.defaultProps = {
  userStatus: {},
};

Navbar.propTypes = {
  userStatus: PropTypes.instanceOf(Object),
};

export default Navbar;
