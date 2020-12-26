import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import { getHomesListRequest } from '../../services/apiRequests.services';
import Card from '../Card.component';

const Homes = () => {
  // const currentUser = useSelector(state => state.currentUser);
  // console.log('This is current user initial state Homes index page:', currentUser);

  const [list, setList] = useState([]);

  // console.log('This is Home list', list);

  useEffect(() => {
    getHomesListRequest('homes').then(response => {
      if (response.statusText === 'OK') {
        setList(response.data);
      } else {
        console.log('todo populate registration error');
      }
    }).catch(error => {
      console.log('registrations error', error);
    });
  }, [list]);

  return (
    <section>
      <h1>List of Houses for rent</h1>
      {list.homes.map(item => <Card key={v4()} detail={item} />)}
      <Link to="/">
        Back to Home page
      </Link>
    </section>
  );
};

export default Homes;
