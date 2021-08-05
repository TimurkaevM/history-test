import React from 'react';
import style from './style.module.css'

function WorkshopMaster() {
  return (
    <React.Fragment>
      <div className={style.master__title}>Название файла</div>
      <div className={style.master}>

        <div className={style.original}>
          <div className={style.original__title}>Оригинал</div>
          <div className={style.original__tusks}>
            <div className={style.tusks__title}>Нуждается в</div>
          </div>
          <div className={style.original__file}>
            
          </div>
        </div>


        <div className={style.processed}>
          <div className={style.original__title}>Обработанный файл</div>
          <div className={style.processed__file}>
            <div className={style.processed__add}>
              +
            </div>
          </div>
          <button className={style.processed__button}>
            принять на обработку
          </button>
        </div>


      </div>
    </React.Fragment>
  )
}

export default WorkshopMaster;
