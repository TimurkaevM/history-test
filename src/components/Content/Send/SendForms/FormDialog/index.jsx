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
    </div>
  )
}

export default FormDialog;
