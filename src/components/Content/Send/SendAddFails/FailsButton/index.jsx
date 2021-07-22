import React from 'react'
import addPlus from '../../../../../assets/Icons/addplus.svg';

import style from './style.module.css';

function FailsButton(props) {
  return (
    <div className={style.fails__add}>
      <div onClick={props.handleClick} className={style['fails__add-btn']}>
        <img src={addPlus} alt="" />
      </div>
      <div onClick={props.handleClick} className={style['fails__add-text']}>
        Добавить файл
      </div>
    </div>
  )
}

export default FailsButton;
