import React from 'react';
import { useState } from 'react';

import style from './style.module.css';

function Audio(props) {
  const [url, setUrl] = useState(null);

  let reader = new FileReader();
  reader.onload = () => {
    console.log(reader.result);
    setUrl(reader.result);
  };
  reader.readAsDataURL(props.audio.file);
  console.log(props.audio.id);

  return (
    <div className={style.img__block}>
      <audio src={url} controls preload="auto"></audio>
      <div
        className={style.remove}
        onClick={() =>
          props.handleDeleteFail(
            props.audio.id,
            'audio',
            props.amount,
            props.groupId,
          )
        }
      >
        <svg
          className={style.svg}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
        >
          <path
            className={style.path}
            id="_8_copy"
            data-name="8 copy"
            d="M761.161,793.907C602.711,952.3,345.808,952.3,187.353,793.9s-158.45-415.2,0-573.592,415.353-158.392,573.8,0S919.614,635.513,761.161,793.907ZM223.216,256.163c-138.643,138.593-138.643,363.3,0,501.891s363.434,138.594,502.077,0,138.648-363.3,0-501.9S361.864,117.567,223.216,256.163ZM599.775,417.484l-89.656,89.625,89.658,89.626a25.354,25.354,0,0,1-35.863,35.849l-89.658-89.626L384.6,632.583a25.354,25.354,0,0,1-35.863-35.85L438.4,507.109l-89.658-89.625a25.354,25.354,0,0,1,35.861-35.85l89.658,89.627,89.658-89.625A25.353,25.353,0,1,1,599.775,417.484Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default Audio;
