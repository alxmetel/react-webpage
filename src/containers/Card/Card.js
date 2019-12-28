import React from 'react';
import style from './Card.less';
import Button from '../../components/Button/Button';

const card = props => {
  const photoSrc = require("../../assets/images/" + props.cardContent.photo);
  const backgroundPhoto = {
    'backgroundImage':
      `linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)),
      url(${photoSrc})`,
    'backgroundSize': 'cover',
    'backgroundPosition': 'center right -80px',
    'backgroundRepeat': 'no-repeat'
  }
  const fullName = props.cardContent.firstName + " " + props.cardContent.middleName + " " + props.cardContent.lastName;
  return (
    <div className={style.card}>

      <div className={style.photoColumn}>
        <img
          className={style.photo}
          src={photoSrc}
          alt={fullName}
        />
      </div>

      <div className={style.textColumn}>

        <div className={style.contentWrapper}>
          <h2 className={style.name}>{fullName}</h2>
          <p className={style.position}>{props.cardContent.position}</p>
          <hr />
          <p className={style.description}>{props.cardContent.description}</p>
          <div className={style.readMoreBlock}>
            <Button alert={props.cardContent.readMoreInfo} />
          </div>
        </div>

        <div
          className={style.photoBackground}
          style={backgroundPhoto}
        ></div>

      </div>
    </div>
  )
}

export default card;