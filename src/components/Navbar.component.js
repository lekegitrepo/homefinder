import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from './Logo.component';

const Navbar = ({ cssClass }) => {
  const currentUser = useSelector(state => state.currentUser);
  console.log('This is user Object', currentUser);
  return (
    <nav className={cssClass === '' ? 'header__logo-box' : `header__logo-box ${cssClass}`}>
      <Logo />
      <div className="header-navbar__link">
        <div className="header-navbar__link--sign-in">
          <Link to={currentUser.user ? '/favourites' : '/login'}>
            {currentUser.user ? 'FAVOURITES' : 'SIGN IN'}
          </Link>
        </div>
        <div className="header-navbar__link--sign-up">
          <Link to={currentUser.user ? '/homes' : '/registration'}>
            {currentUser.user ? 'HOMES' : 'SIGN UP'}
          </Link>
        </div>
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
