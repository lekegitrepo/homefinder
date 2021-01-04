import React from 'react';
import Button from './button/Button';
import statsImage from '../images/stats.png';

const Stats = () => (
  <section className="p-auto stats">
    <div className="stats__header">
      <h6 className="stats__header--primary">SIMPLE AND FAST WAY TO RENT</h6>
      <h3 className="stats__header--secondary">Comfortable home from reliable people</h3>
    </div>
    <div className="stats__box">
      <div className="stats__box--description">
        <h2 className="stats__box--description__header">All stats at your fingertips at any time</h2>
        <p className="stats__box--description__text">
          Consequat dolor adipisicing tempor in id tempor culpa cupidatat irure cupidatat ut
          excepteur exercitation sed cupidatat duis eu aute nulla non eu aliquip
          id cupidatat.cupidatat ut excepteur exercitation sed cupidatat duis eu aute nulla
          non eu aliquip id cupidatat.
        </p>
        <div className="stats__box--description__btn">
          <Button text="LEARN MORE" link="/homes" />
        </div>
      </div>
      <div className="stats__box--image">
        <img src={statsImage} alt="stats" />
      </div>
    </div>
  </section>
);

export default Stats;
