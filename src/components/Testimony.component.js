import React from 'react';
import UserCard from './cards/UserCard.component';
import user1 from '../images/user1.jpeg';
import user2 from '../images/user2.jpeg';
import user3 from '../images/user3.jpeg';

const Testimony = () => (
  <section className="testimony">
    <div className="testimony__header">
      <h6 className="testimony__header--primary">PEOPLE ARE ALREADY ENJOIN THE SERVICE</h6>
      <h3 className="testimony__header--secondary">Look what these people have to say</h3>
    </div>
    <div className="testimony__cards">
      <UserCard
        imagePath={user1}
        name="John Doe"
        ocupation="Programmer"
        testimony="Lorem ipsum est consequat qui ex sit nostrud adipisicing dolor irure duis in sunt ea proident eiusmod dolore deserunt qui in."
      />

      <UserCard
        imagePath={user3}
        name="Jane Doe"
        ocupation="Designer"
        testimony="Officia occaecat occaecat sunt laborum est dolor amet deserunt dolore exercitation ex non occaecat eu consequat."
      />

      <UserCard
        imagePath={user2}
        name="Mark Spencer"
        ocupation="Artist"
        testimony="Ea sint consectetur magna commodo minim adipisicing ut dolore anim laboris nostrud ut."
      />
    </div>
  </section>
);

export default Testimony;
