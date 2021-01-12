import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import { getHomesListRequest } from '../../services/apiRequests.services';
import Card from '../cards/Card.component';

const Homes = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getHomesListRequest('homes').then(response => {
      if (response.statusText === 'OK') {
        setList(response.data);
        // console.log('This is the response:', response.data);
      } else {
        console.log('todo populate registration error');
      }
    }).catch(error => {
      console.log('registrations error', error);
    });
  }, [setList]);

  return (
    <section className="home-list">
      <div className="home-list__header">
        <h3 className="heading-secondary">List of Houses for rent</h3>
      </div>
      <div className="home-list__row">
        {
          (list.length === 0)
            ? <h3>No Rent House Available</h3>
            : list.homes.map(item => <Card key={v4()} detail={item} price={item.price} />)
        }
      </div>
      <Link to="/">
        Back to Home page
      </Link>
    </section>
  );
};

export default Homes;
