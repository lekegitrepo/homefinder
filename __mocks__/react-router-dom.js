import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';

const mockRouter = ({ children }) => (
  <div>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </div>
);

mockRouter.defaultValue = {
  children: <div />,
};

mockRouter.propTypes = {
  children: PropTypes.element,
};

export default mockRouter;
