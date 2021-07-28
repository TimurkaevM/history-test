import { useState } from 'react';
import Dialog from '../../../../General/Dialog';
import FormDialog from '../FormDialog';
import { useSelector, useDispatch } from 'react-redux';
import { changeText } from '../../../../../redux/ducks/files';


import style from './style.module.css';

function FormText() {
  const dispatch = useDispatch();
  const [ open, setOpen ] = useState(false);
  const text = useSelector(state => state.files.materials.text);


  const body = document.querySelector('body');


  const handleChange = (e) => {
    dispatch(changeText(e.target.value));
  }

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
      <textarea value={text.text} onChange={handleChange} className={style['form__input-text']} type="text" name="text" placeholder="Введите текст..." />
      <div onClick={handleOpen} className={text.text ? style.form__prompt : style.active}>
        !!!Принадлежность текста не настроена
      </div>
      <Dialog handleClose={handleClose} open={open}>
        <FormDialog type="text" content={text} handleClose={handleClose} />
      </Dialog>
    </div>
  )
}

export default FormText;
