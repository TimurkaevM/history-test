import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addMasterRole,
  deleteMasterRole,
  getMasterRole,
} from '../../../../redux/ducks/user';
import style from './style.module.css';

function Main() {
  const dispatch = useDispatch();
  const master = useSelector((state) => state.user.master);
  console.log(master);

  useEffect(() => {
    dispatch(getMasterRole());
  }, [dispatch]);

  const changeRoleMaster = useCallback(() => {
    if (master === false) {
      return dispatch(addMasterRole());
    }
    if (master) {
      return dispatch(deleteMasterRole());
    }
  }, [master]);

  return (
    <div className={style.main}>
      <input
        onChange={changeRoleMaster}
        checked={master}
        className={style.input}
        type="checkbox"
        name="switch"
        id="switch"
      />
      <label className={style.label} htmlFor="switch"></label>
    </div>
  );
}

export default Main;
