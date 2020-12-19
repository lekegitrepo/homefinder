import React from 'react';
import { Link } from 'react-router-dom'

const Header = ({ navbar }) => (
  <header>
    <nav>{navbar}</nav>
    <section>
      <h3>Find Housing anywhere</h3>
      <p>
        The best offers for you at any point of your journey. Wherever you are,
        feel yourself like at your own home.
      </p>
      <div>
        <Link to='/registration' className='btn__main'>
          START FREE
        </Link>
      </div>
    </section>
  </header>
)

export default Header;
