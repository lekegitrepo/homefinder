import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Homes = () => {
  const currentUser = useSelector(state => state.currentUser);
  console.log('This is current user initial state Homes index page:', currentUser);

  return (
    <section>
      <h1>List of Houses for rent</h1>
      <Link to="/">
        Back to Home page
      </Link>
    </section>
  );
};

export default Homes;
