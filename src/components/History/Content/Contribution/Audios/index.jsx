import React from 'react';
import { useSelector } from 'react-redux';


import style from './style.module.css';

function Audio() {
  const audio = useSelector(state => state.contribution.audio);

  return (
    <div>
      <div className={style.photo__header}>
        <div className={style.photo__logo}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 1000 1000">
          <path id="_4_copy" data-name="4 copy" fillRule="evenodd" d="M544.223,836.132V792.289c127.926-28.22,213.211-127.063,213.211-254.637,0-128.291-88-230.5-213.211-254.635V239.174C688.7,260.329,800.079,385.218,800.079,537.652S688.7,814.976,544.223,836.132ZM437.617,793.756L245.728,665.7H181.764a42.661,42.661,0,0,1-42.643-42.684V452.285A42.663,42.663,0,0,1,181.764,409.6h63.964L437.617,281.552a42.666,42.666,0,0,1,42.643,42.685V751.069A42.667,42.667,0,0,1,437.617,793.756ZM245.728,473.625a21.333,21.333,0,0,0-21.322-21.34H203.085a21.331,21.331,0,0,0-21.321,21.34V601.676a21.33,21.33,0,0,0,21.321,21.342h21.321a21.332,21.332,0,0,0,21.322-21.342V473.625ZM437.617,697.717V324.237L288.368,417.606V657.7l149.249,93.367V697.717ZM672.151,537.652c0,75.195-55.69,136.8-127.928,147.242V642.208a106.732,106.732,0,0,0,0-209.11V390.414C616.461,400.846,672.151,462.454,672.151,537.652Z"/>
        </svg>
        </div>
        <div className={style.photo__title}>
          Аудио
        </div>
      </div>

      <div>
        {!Array.isArray(audio) ? (
            <div>{audio}</div>
          ) : (
            audio.map( item => {
              return (
                <img src={item.path_to_file} alt="" />
              )
            })
        )}
      </div>

    </div>
  )
}

export default Audio;
