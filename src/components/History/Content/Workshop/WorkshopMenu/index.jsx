import React from 'react';
import style from './style.module.css';

function WorkshopMenu() {
  return (
    <div className={style.menu}>
      <div className={style.menu__sidebar}>
        <div className={style.sidebar}>
          <p>Фото</p>
          <p>Документы</p>
          <p>Видео</p>
          <p>Текст</p>
          <p>Аудио</p>
        </div>
        <div className={style.sidebar}>
          <p>Принятые</p>
          <p>Завершенные</p>
        </div>
      </div>

      <div className={style.menu__main}>
        <div className={style.file}>
          <div className={style.file__tasks}>название файла</div>
        </div>
        <div className={style.file}>
          <div className={style.file__tasks}>название файла</div>
        </div>
        <div className={style.file}>
          <div className={style.file__tasks}>название файла</div>
        </div>
        <div className={style.file}>
          <div className={style.file__tasks}>название файла</div>
        </div>
      </div>
    </div>
  );
}

export default WorkshopMenu;
