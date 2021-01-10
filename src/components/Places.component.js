import React from 'react';
import Button from './button/Button';
import Card from './cards/Card.component';
import img1 from '../images/11.jpg';
import img2 from '../images/20.jpg';
import img3 from '../images/6.jpg';

const Places = () => {
  const details = [
    {
      id: 1,
      home_type: 'Apartment',
      description: 'This is a beautiful house',
      image_link: `${img1}`,
      location: '',
    },
    {
      id: 2,
      home_type: 'Mansion',
      description: '',
      image_link: `${img2}`,
      location: '',
    },
    {
      id: 3,
      home_type: 'Cottage',
      description: '',
      image_link: `${img3}`,
      location: '',
    },
  ];
  console.log(details);
  return (
    <section className="places p-auto">
      <div className="places--card-comp composition">
        <Card
          detail={details[0]}
          local
          cssClass="composition__card-comp composition__card-comp--c1"
        />
        <Card
          detail={details[1]}
          local
          cssClass="composition__card-comp composition__card-comp--c2"
        />
        <Card
          detail={details[2]}
          local
          cssClass="composition__card-comp composition__card-comp--c3"
        />
      </div>
      <div className="places--description">
        <h4 className="places--description__header">Only best places for your rest</h4>
        <p className="places--description__text">
          Commodo adipisicing est non sint ad excepteur consequat esse ut culpa.
          Ea ullamco in aliqua velit tempor officia labore est. Anim ut ut do veniam
          ad excepteur sit id dolor. Est aute dolore in occaecat aliqua eiusmod
          culpa nulla nulla enim nulla ut dolore ut.
        </p>
        <Button text="START FREE" link="/registration" />
      </div>
    </section>
  );
};

export default Places;
