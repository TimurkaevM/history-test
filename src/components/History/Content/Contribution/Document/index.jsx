import React from 'react';
import { useSelector } from 'react-redux';


import style from './style.module.css';

function Document() {
  const document = useSelector(state => state.contribution.document);

  console.log(document)

  return (
    <div>
      <div className={style.photo__header}>
        <div className={style.photo__logo}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 1000 1000">
            <path id="_4_" data-name="4 " fillRule="evenodd" d="M772.145,817.744H226.878A90.867,90.867,0,0,1,136,726.888V363.472a90.866,90.866,0,0,1,90.879-90.852h68.156l22.719-45.427c12.05-23.752,20.345-45.428,45.439-45.428H635.827c25.1,0,32.052,19,45.439,45.428l22.72,45.427h68.159a90.865,90.865,0,0,1,90.878,90.852V726.888A90.866,90.866,0,0,1,772.145,817.744Zm45.439-454.272a45.433,45.433,0,0,0-45.439-45.426H681.266L658.547,272.62c-16.064-26.427-20.345-45.427-45.439-45.427h-227.2c-25.094,0-29.375,19-45.439,45.427l-22.72,45.426H226.878a45.431,45.431,0,0,0-45.439,45.426V726.888a45.434,45.434,0,0,0,45.439,45.432H772.145a45.436,45.436,0,0,0,45.439-45.432V363.472ZM499.51,726.888c-100.379,0-181.757-81.352-181.757-181.708S399.131,363.472,499.51,363.472,681.266,444.83,681.266,545.18,599.889,726.888,499.51,726.888Zm0-317.987A136.281,136.281,0,1,0,635.827,545.18,136.3,136.3,0,0,0,499.51,408.9Z"/>
          </svg>
        </div>
        <div className={style.photo__title}>
          Картинки
        </div>
      </div>

      <div>
        {document.map( item => {
          return (
            <img src={item.path_to_file} alt="" />
          )
        })}
      </div>

    </div>
  )
}

export default Document;
