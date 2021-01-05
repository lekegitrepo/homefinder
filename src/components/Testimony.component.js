import React from 'react';
import UserCard from './cards/UserCard.component';

const Testimony = () => (
  <section className="testimony">
    <div className="testimony__header">
      <h6 className="testimony__header--primary">PEOPLE ARE ALREADY ENJOIN THE SERVICE</h6>
      <h3 className="testimony__header--secondary">Look what these people have to say</h3>
    </div>
    <div className="testimony__cards">
      <UserCard
        imagePath="#"
        name="John Doe"
        ocupation="Programmer"
        testimony="Lorem ipsum est consequat qui ex sit nostrud adipisicing dolor irure duis in sunt ea proident eiusmod dolore deserunt qui in."
      />

      <UserCard
        imagePath="#"
        name="Jane Doe"
        ocupation="Designer"
        testimony="Officia occaecat occaecat sunt laborum est dolor amet deserunt dolore exercitation ex non occaecat eu consequat."
      />
    </div>
  </section>
);

export default Testimony;
