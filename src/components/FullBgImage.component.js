import React from 'react';
import Button from './button/Button';

const FullBgImage = () => (
  <section className="start">
    <div className="start__mask">
      <h6 className="start__mask--header">Be everywhere at home</h6>
      <div className="start__mask--btn--container">
        <Button text="START FREE" link="/registration" />
      </div>
    </div>
  </section>
);

export default FullBgImage;
