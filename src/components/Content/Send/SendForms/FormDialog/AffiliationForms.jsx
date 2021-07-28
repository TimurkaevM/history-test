import React from 'react'

import style from './style.module.css';

function AffiliationForms(props) {

  return (
    <div className={style.forms}>
      <div className={style.form}>
        <div className={style.form__title}>Название</div>
        <input value={props.title} onChange={props.handleChangeTitle} className={style.form__input} type="text" name="title" />
      </div>
      <div className={style.form}>
        <div className={style.form__title}>Год</div>
        <input value={props.year} onChange={props.handleChangeYear} className={style.form__input} type="text" name="year" />
      </div>
      <div className={style.form}>
        <div className={style.form__title}>Автор</div>
        <input value={props.author} onChange={props.handleChangeAuthor} className={style.form__input} type="text" name="author" />
      </div>
    </div>
  )
}

export default AffiliationForms;
