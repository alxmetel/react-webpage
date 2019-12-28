import React from 'react';
import style from './Button.less';

const showMore = message => {
  alert(message);
}

const button = props => (
  <button
    className={style.readMoreBtn}
    onClick={showMore.bind(this, props.alert)}
  >
    <span>&#10005;</span>Read More
  </button>
);

export default button;