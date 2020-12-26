import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ user }) => {
  console.log(user);

  return (
    <header>
      <nav>
        <div>
          {/* Logo here */}
          LOGO
        </div>
        <div>
          <Link to={user.user ? '/favourites' : '/login'}>
            {user.user ? 'FAVOURITES' : 'SIGNIN'}
          </Link>
          <Link to={user.user ? '/homes' : '/registration'}>
            {user.user ? 'HOMES' : 'SIGNUP'}
          </Link>
        </div>
      </nav>
      <section>
        <h3>Find Housing anywhere</h3>
        <p>
          The best offers for you at any point of your journey. Wherever you are,
          feel yourself like at your own home.
        </p>
        <div>
          <Link to={user.user ? '/homes' : '/registration'} className="btn__main">
            {user.user ? 'HOMES' : 'START FREE'}
          </Link>
        </div>
      </section>
    </header>
  );
};

Header.defaultProps = {
  user: {},
};

Header.propTypes = {
  user: PropTypes.instanceOf(Object),
};

export default Header;
