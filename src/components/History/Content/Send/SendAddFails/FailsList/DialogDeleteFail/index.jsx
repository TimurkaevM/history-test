import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteOneFail } from '../../../../../../../redux/ducks/files';

import style from './style.module.css';

function DialogDeleteFail({ open, handleClose }) {
  const dispatch = useDispatch();

  const handleDeleteFail = () => {
    dispatch(deleteOneFail(open.id, open.format, open.amount, open.groupId));
    handleClose();
  };

  return (
    <div className={style['dialog-remove']}>
      <div className={style.title}>Вы уверены</div>
      <div className={style.buttons}>
        <div onClick={handleDeleteFail} className={style.button}>
          Да
        </div>
        <div onClick={handleClose} className={style.button}>
          Нет
        </div>
      </div>
    </div>
  );
}

export default DialogDeleteFail;
