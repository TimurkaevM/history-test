import { useSelector, useDispatch } from 'react-redux';
import { changeTitle } from '../../../../../redux/ducks/files';

import style from './style.module.css';

function FormName() {
  const dispatch = useDispatch();

  const title = useSelector(state => state.files.materials.title);

  const handleChange = (e) => {
    dispatch(changeTitle(e.target.value));
  }

  return (
    <div className={style.form__name}>
      <div className={style.form__title}>
        НАЗВАНИЕ МАТЕРИАЛА 
      </div>
      <input onChange={handleChange} value={title} className={style['form__input-name']} type="text" name="name" placeholder="Введите название..." />
    </div>
  )
}

export default FormName;
