import React from 'react';
import { useSelector } from 'react-redux';

import style from './style.module.css';

function Material(props) {
  const materials = useSelector(state => state.contribution.material);

  if(!materials) {
    return ("dsadassd")
  }


  return (  
    <div className={style}>
      {materials.map(material => {
        return (
          <div className={style.material}>
            <div className={`${style.material__logo} ${material.status === "В обработке" ? style.blue : ""} ${material.status === "Обработано" ? style.green : ""}`}>
              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 545.7 545.64">
                <path d="M489.36,794.69q-105.5,0-211-.09c-7.62,0-33.37-1.6-49.37-17.6-13.5-13.5-12.42-34.17-12.42-40.06q-.08-214.4,0-428.78C216.55,300.69,223,274,235,265c13.58-10.18,32.22-15.94,37.88-15.94q65.34,0,130.67.08c4.13,0,8.92.82,15.45,1.86,1.61.26,12.37,2.81,14,4,15,11,12.81,23.46,18.12,41.22,5.17,17.33,4.84,22,29,21.58,68.72-1.16,137.47-.44,206.21-.36a160.4,160.4,0,0,1,18.33,1.19c22.6,2.56,57.19,17.37,57.19,47.43,0,5.43.38,10.88.38,16.32q0,173.9,0,347.79c0,5-.25,10-.25,15C762,753,758,768,747,779c-4.82,4.82-25,15.59-41.2,15.59q-108.22,0-216.44,0Zm0-341.65v.08H279.8c-5.9,0-11.81-.22-17.69.16-8.11.52-11.47,3.8-11.93,11.89-.4,7-.11,14-.11,21.06q0,117,0,234.08c.05,25.54,14.73,40.42,38.52,40.44q200.75.22,401.47,0c16.4,0,29.91-6.24,35.3-23.19A69.39,69.39,0,0,0,728.54,717q.32-115.68.11-231.36c0-7.24.11-14.5-.19-21.73-.25-6.07-3.85-9.54-9.79-10.35a64.91,64.91,0,0,0-8.82-.45Q599.62,453,489.38,453Zm-.12-32.91q110.55,0,221.11,0a58.88,58.88,0,0,0,8.8-.59c6.22-.94,9.8-4.56,9.85-11,0-5.66-.58-11.35-.3-17,1.14-22.45-16.87-41.23-41.32-41-82.76.9-165.54.37-248.32.36a88.7,88.7,0,0,1-9.51-.31c-6.08-.65-9.43-3.95-9.33-10.33.11-7,.35-14.06.18-21.09-.54-21.85-15.33-36.29-37.14-36.33q-46.95-.08-93.89,0c-24.24.07-38.6,14.59-39.18,38.38-.7,28.56-.48,57.14-.57,85.71,0,8.13,3.05,11.62,11.05,12.77a58,58,0,0,0,8.14.4Q379,420.15,489.26,420.13Z" transform="translate(-216.53 -249.06)"/>
              </svg>
            </div>
            <div className={style.material__name}>
              {material.title}
            </div>
            <div className={style.material__date}>
              <div className={style.date_title}>
                Дата отправки материала
              </div>
              <div className={style.date__time}>
                  01.01.2001
              </div>
            </div>
            <div className={`${style.material__status} ${material.status === "В обработке" ? style.blue : ""} ${material.status === "Обработано" ? style.green : ""}`}>
              <div className={style.status__title}>статус</div>
              <div className={style.status__variant}>{material.status}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Material
