import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.component';

const Error = ({ nav, content, title }) => (
  <section>
    { nav === true ? <Navbar cssClass="u-padding-left u-bg-color" /> : '' }
    <div className="u-center-text">
      <h3 className="heading-secondary">{ title }</h3>
      <p>
        Please,
        <Link to="/login"> log in </Link>
        or
        <Link to="/registration"> sign up </Link>
        { content }
      </p>
    </div>
  </section>
);

Error.defaultProps = {
  content: <div />,
  title: '',
  nav: false,
};

Error.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  title: PropTypes.string,
  nav: PropTypes.bool,
};

export default Error;
