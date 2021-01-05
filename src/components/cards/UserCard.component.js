import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({
  imagePath, name, ocupation, testimony,
}) => (
  <section className="user">
    <div className="user__image">
      <img src={imagePath} alt="user" />
    </div>
    <h3 className="user__name">{name}</h3>
    <div className="user__ocupation">{ocupation}</div>
    <p className="user__testimony">{testimony}</p>
  </section>
);

UserCard.defaultProps = {
  imagePath: '#',
  name: '',
  ocupation: '',
  testimony: '',
};

UserCard.propTypes = {
  imagePath: PropTypes.string,
  name: PropTypes.string,
  ocupation: PropTypes.string,
  testimony: PropTypes.string,
};

export default UserCard;
