import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../Header.component';
import Stats from '../Stats.component';
import Places from '../Places.component';
import Testimony from '../Testimony.component';
import FullBgImage from '../FullBgImage.component';
import Footer from '../Footer.component';

const Home = () => {
  const currentUser = useSelector(state => state.currentUser);

  return (
    <section>
      <Header user={currentUser} />
      <Stats />
      <Places />
      <Testimony />
      <FullBgImage />
      <Footer />
    </section>
  );
};

export default Home;
