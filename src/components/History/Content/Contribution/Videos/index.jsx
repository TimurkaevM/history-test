import React from 'react';
import { useSelector } from 'react-redux';

import style from './style.module.css';

function Video() {
  const video = useSelector((state) => state.contribution.video);

  return (
    <div>
      <div className={style.photo__header}>
        <div className={style.photo__logo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 1000 1000"
          >
            <path
              id="_4"
              data-name="4"
              fillRule="evenodd"
              d="M755.013,979.993H114.994v-832A128,128,0,0,1,243,19.99H755.013a128,128,0,0,1,128.005,128v832h-128ZM243,212H179v64h64V212Zm0,128H179v64h64v-64Zm0,128H179v64h64v-64Zm0,128H179v64h64V596Zm0,128H179v64h64v-64Zm0,128H179v64h64V852Zm448.012-736a32,32,0,0,0-32-32H339a32,32,0,0,0-32,32V436a32,32,0,0,0,32,32H659.01a32,32,0,0,0,32-32v-320Zm0,448a32,32,0,0,0-32-31.994H339a32,32,0,0,0-32,31.994v320A32,32,0,0,0,339,916H659.01a32,32,0,0,0,32-32.007v-320ZM819.016,212h-64v64h64V212Zm0,128h-64v64h64v-64Zm0,128h-64v64h64v-64Zm0,128h-64v64h64V596Zm0,128h-64v64h64v-64Zm0,128h-64v64h64V852Z"
            />
          </svg>
        </div>
        <div className={style.photo__title}>Видео</div>
      </div>

      <div>
        {!Array.isArray(video) ? (
          <div>{video}</div>
        ) : (
          video.map((item) => {
            return <img src={item.path_to_file} alt="" />;
          })
        )}
      </div>
    </div>
  );
}

export default Video;
