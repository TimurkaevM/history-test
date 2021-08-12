import SendForms from './SendForms';
import SendTitle from './SendInfo';
import SendAddFails from './SendAddFails';
import { getCenturies, getTypes } from '../../../../redux/ducks/tags';
import { useEffect } from 'react';

import style from './style.module.css';
import { useDispatch } from 'react-redux';

function Send() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTypes());
    dispatch(getCenturies());
  }, [dispatch]);
  return (
    <div className={style.send}>
      <SendTitle />
      <SendForms />
      <SendAddFails />
    </div>
  );
}

export default Send;
