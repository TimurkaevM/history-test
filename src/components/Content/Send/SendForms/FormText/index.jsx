import { useState } from 'react';
import Dialog from '../../../../General/Dialog';
import FormDialog from '../FormDialog';

import style from './style.module.css';

function FormText() {
  const [ open, setOpen ] = useState(false);
  const body = document.querySelector('body');

  const handleClose = () => {
    body.style.overflow = 'visible'; 
    setOpen(false);
  }

  const handleOpen = () => {
    body.style.overflow = 'hidden'; 
    setOpen(true);
  }

  return (
    <div className={style.form__text}>
      <div className={style.form__subtitle}>
        Добавить текст 
      </div>
      <textarea className={style['form__input-text']} type="text" name="text" placeholder="Введите текст..." />
      <div onClick={handleOpen} className={style.form__prompt}>
        !!!Принадлежность текста не настроена
      </div>
      <Dialog handleClose={handleClose} open={open}>
        <FormDialog handleClose={handleClose} />
      </Dialog>
    </div>
  )
}

export default FormText
