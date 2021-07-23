import CloseButton from '../../../../General/buttons/CloseButton/CloseButton';

import style from './style.module.css';

function FormDialog(props) {

  return (
    <div className={style.form__dialog}>
      <div className={style.title__info}>
        НАСТРОЙКА ПРИНАДЛЕЖНОСТИ ФОТОМАТЕРИАЛА!
          <span>?</span>
      </div>
      <CloseButton bgColor="initial" handleClick={props.handleClose} width="35px" height="35px" top="-40px" right="0" />
      
      <div className={style.dialog__info}>
        
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
        
        <div className={style.documents}>
          <p>Фото</p>
          <p>Фото</p>
          <p>Фото</p>
          <p>Фото</p>
        </div>

      </div>
      
      <div className={style.tags}>

      <div className={style.tags__affiliation}>
        <div className={style.tags__title}>
          ПЕРИОД/ВЕК:
        </div>
        <div className={style.tags__choice}>
          <div className={style["tags__item-choice"]}>XV </div>
          <div className={style["tags__item-choice"]}>XV </div>
        </div>
      </div>

      <div className={style.tags__items}>
        <div className={style.tags__item}>XV </div>
        <div className={style.tags__item}>XV </div>
        <div className={style.tags__item}>XV </div>
        <div className={style.tags__item}>XV </div>
      </div>

      </div>

      <div className={style.tags}>

      <div className={style.tags__affiliation}>
        <div className={style.tags__title}>
          ПЕРИОД/ВЕК:
        </div>
        <div className={style.tags__choice}>
          <div className={style["tags__item-choice"]}>XV </div>
          <div className={style["tags__item-choice"]}>XV </div>
        </div>
      </div>

      <div className={style.tags__items}>
        <div className={style.tags__item}>XV </div>
        <div className={style.tags__item}>XV </div>
        <div className={style.tags__item}>XV </div>
        <div className={style.tags__item}>XV </div>
      </div>

      </div>

      <div className={style.comment}>
        
        <div className={style.comment__title}>
          Комментарий к файлу
        </div>

        <textarea className={style.comment__text} name="comment" id="comment" rows="7"></textarea>

      </div>

      <button className={style.dialog__button}>
        Применить
      </button>

    </div>
  )
}

export default FormDialog;
