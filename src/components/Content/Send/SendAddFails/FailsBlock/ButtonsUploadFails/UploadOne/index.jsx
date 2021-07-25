import { useDispatch } from 'react-redux';
import { UploadOneFail } from '../../../../../../../redux/ducks/files';

import style from './style.module.css';

function UploadOne(props) {
  const dispatch = useDispatch();

  function fileUploadHandler(event) {
    const file = event.target.files[0];
    const photoId = new Date();

    if(!file.type.match(props.format)) {
      return
    }
    
    dispatch(UploadOneFail(file, props.format, photoId));
}



  return (
    <div className={style.button}>
      <label htmlFor="oneFail" >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 1000 1000">
          <path id="_2" data-name="2" fillRule="evenodd" d="M933.607,539.608L556.862,709.042c-36.07,15.7-50.428,15.7-83.721,0L96.394,539.608c-29.595-15.711-28.671-65.182,0-83.665L473.141,256.935c33.293-16.633,54.126-17.556,83.721,0L933.607,455.943C962.276,471.654,961.351,526.673,933.607,539.608ZM515,290.718L130.2,497.776,515,660,899.8,497.776Zm0,0C517.05,291.386,517.78,293.972,515,290.718Z"/>
        </svg>
        <div className={style.button__title}>Добавить один</div>
        <div className={style.button__subtitle}>файл</div>
      </label>
      <input onChange={(event)=> fileUploadHandler(event)}  type="file" id="oneFail" name="oneFail" />
    </div>
  );
}

export default UploadOne;
