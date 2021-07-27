import React from 'react'

import style from './style.module.css';

function AffiliationForms() {
  return (
    <div className={style.forms}>
      <div className={style.form}>
        <div className={style.form__title}>Название</div>
        <input className={style.form__input} type="text" name="title" />
      </div>
      <div className={style.form}>
        <div className={style.form__title}>Год</div>
        <input className={style.form__input} type="text" name="year" />
      </div>
      <div className={style.form}>
        <div className={style.form__title}>Автор</div>
        <input className={style.form__input} type="text" name="author" />
      </div>
    </div>
  )
}

export default AffiliationForms;
