import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';

// const mockRouter = require('react-router-dom');
// Just render plain div with its children
// mockRouter.displayName = 'mockRouter';
const mockRouter = ({ children }) => (
  <div>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </div>
);
// module.exports = rrd;

mockRouter.defaultValue = {
  children: <div />,
};

mockRouter.propTypes = {
  children: PropTypes.element,
};
export default mockRouter;
