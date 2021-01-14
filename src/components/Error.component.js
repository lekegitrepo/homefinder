import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ content }) => {};

Error.defaultProps = {
  content: <div />
}

Error.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ])
}

export default Error;
