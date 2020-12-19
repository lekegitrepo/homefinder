import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <div>
        {/* Logo here */}
        LOGO
      </div>
      <div>
        <Link to="/login">
          SIGNIN
        </Link>
        <Link to="/registration">
          SIGNUP
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
        <Link to="/registration" className="btn__main">
          START FREE
        </Link>
      </div>
    </section>
  </header>
);

export default Header;
