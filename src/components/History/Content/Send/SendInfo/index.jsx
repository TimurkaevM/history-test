import { useState } from 'react';
import Dialog from '../../../General/Dialog';
import style from './style.module.css';

function SendTitle() {
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
      <div className={style.title}>
        <div className={style.title__name}>
          форма отправки информации
        </div>
        <div className={style.title__info}>
          Убедительная просьба присылать в одном материале информацию одной тематики или одного периода!
          <span onClick={handleOpen}>?</span>
        </div>
        <Dialog handleClose={handleClose} open={open}>
          <div className={style.title__dialog}>
            Привет
          </div>
        </Dialog>
      </div>
  );
}

export default SendTitle;
