import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from './Navbar.component';
import Button from './button/Button';

const Header = ({ user }) => (
  <header className="header">
    <Navbar />
    <section className="header__text-box">
      <h3>Find Housing anywhere</h3>
      <p>
        The best offers for you at any point of your journey. Wherever you are,
        feel yourself like at your own home.
      </p>
      <div className="btn-container">
        {/* <Link to={user.user ? '/homes' : '/registration'} className="btn__main">
          {user.user ? 'HOMES' : 'START FREE'}
        </Link> */}
        <Button
          text={user.user ? 'HOMES' : 'START FREE'}
          link={user.user ? '/homes' : '/registration'}
        />
      </div>
    </section>
  </header>
);

Header.defaultProps = {
  user: {},
};

Header.propTypes = {
  user: PropTypes.instanceOf(Object),
};

export default Header;
