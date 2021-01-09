import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <div className="logo">
    <Link to="/" className="logo-link">
      <div className="logo-text">HF</div>
      <div className="logo-name">HomeFinder</div>
    </Link>
  </div>
);

export default Logo;
