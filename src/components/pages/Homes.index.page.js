import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import Loader from 'react-loader-spinner';
import { getHomesListRequest } from '../../services/apiRequests.services';
import Card from '../cards/Card.component';
import Navbar from '../Navbar.component';

const Homes = () => {
  const [list, setList] = useState([]);
  const [status, setStatus] = useState({ loading: false, error: false, data: '' });

  const fetchList = () => {
    setStatus({ loading: true });
    getHomesListRequest('homes').then(response => {
      if (response.statusText === 'OK') {
        setList(response.data);
        setStatus({ loading: false, error: false, data: '' });
      } else {
        setStatus({ loading: false, error: true, data: '' });
      }
    }).catch(error => setStatus({ loading: false, error: true, data: error }));
  };

  useEffect(() => {
    fetchList();
  }, [setList]);

  return (
    status.loading === true
      ? (
        <div className="loader">
          <Loader type="Bars" height={20} width={20} color="#cf3917" />
        </div>
      )
      : (
        <section className="home-list">
          <Navbar cssClass="u-padding-left u-bg-color" />
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
        </section>
      )
  );
};

export default Homes;
