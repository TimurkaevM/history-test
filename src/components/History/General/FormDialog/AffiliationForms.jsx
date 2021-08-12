import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeAuthorTag,
  changeTitleTag,
  changeYearTag,
} from '../../../../redux/ducks/files';

import style from './style.module.css';

function AffiliationForms() {
  const dispatch = useDispatch();

  const tag = useSelector((state) => state.files.tag);

  const handleChangeTitle = (e) => {
    dispatch(changeTitleTag(e.target.value));
  };

  const handleChangeYear = (e) => {
    dispatch(changeYearTag(e.target.value));
  };

  const handleChangeAuthor = (e) => {
    dispatch(changeAuthorTag(e.target.value));
  };

  return (
    <div className={style.forms}>
      <div className={style.form}>
        <div className={style.form__title}>Название</div>
        <input
          value={tag.title}
          onChange={handleChangeTitle}
          className={style.form__input}
          type="text"
          name="title"
        />
      </div>
      <div className={style.form}>
        <div className={style.form__title}>Год</div>
        <input
          value={tag.year}
          onChange={handleChangeYear}
          className={style.form__input}
          type="text"
          name="year"
        />
      </div>
      <div className={style.form}>
        <div className={style.form__title}>Автор</div>
        <input
          value={tag.author}
          onChange={handleChangeAuthor}
          className={style.form__input}
          type="text"
          name="author"
        />
      </div>
    </div>
  );
}

export default AffiliationForms;
