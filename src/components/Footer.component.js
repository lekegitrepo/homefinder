import React from 'react';
import Logo from './Logo.component';

const Footer = () => (
  <footer className="footer p-auto">
    <div className="footer__logo--container">
      <Logo />
    </div>
    <p>
      <span> Lafeyette Ave 156, Brooklyn, NY, USA </span>
      <span> 35 St Andrew&apos;s St, Cambridge C82 3AR, Great Britain </span>
      <span> +347 853 106 681</span>
    </p>
    <div className="footer__social--icons">
      <i className="fab fa-facebook-f" />
      <i className="fab fa-twitter" />
      <i className="fab fa-instagram" />
    </div>
    <p className="footer__copyright">HomeFinder 2020. All right reserved</p>
  </footer>
);

export default Footer;
