import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({ text, link }) => (<Link to={link} className="btn link">{text}</Link>);

Button.defaultProps = {
  text: '',
  link: '#',
};

Button.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};

export default Button;
