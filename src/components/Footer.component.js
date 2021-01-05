import React from 'react';
import Logo from './Logo.component';

const Footer = () => (
  <footer className="footer">
    <div className="footer__logo--container">
      <Logo />
    </div>
    <p>
      Lafeyette Ave 156, Brooklyn, NY, USA
      35 St Andrew&apos;s St, Cambridge C82 3AR, Great Britain
      +347 853 106 681
    </p>
    <div className="footer__social--icons">
      <i className="fab fa-facebook" />
      <i className="fab fa-twitter-square" />
      <i className="fab fa-instagram" />
    </div>
    <p className="copyright">HomeFinder 2020. All right reserved</p>
  </footer>
);

export default Footer;
