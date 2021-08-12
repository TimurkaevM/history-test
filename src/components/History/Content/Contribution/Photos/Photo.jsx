import React from 'react';

import style from './style.module.css';

function Photo({ photo }) {
  return (
    <div className={style.image}>
      <img src={photo.path_to_file} alt="#" />
      <div className={style.name}>{photo.title}</div>
    </div>
  );
}

export default Photo;
