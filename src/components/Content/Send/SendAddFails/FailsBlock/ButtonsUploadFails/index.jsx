import { useState } from 'react';
import CloseButton from '../../../../../General/buttons/CloseButton/CloseButton';

import style from './style.module.css';

function ButtonsUploadFails(props) {

  const [ main, setMain ] = useState(null);


  function fileUploadHandler(event) {
    const files = event.target.files[0];
    console.log(files)
}



  return (
    <div className={style.buttons}>
      <CloseButton bgColor="initial" handleClick={props.handleClose} width="35px" height="35px" top="-40px" right="0" />
      <div className={style.buttons__title}>
        Выберите тип загрузки
      </div>
      
      <div className={style.buttons__block}>
        <div className={style.button}>
          <label htmlFor="oneFail" >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 1000 1000">
              <path id="_2" data-name="2" fillRule="evenodd" d="M933.607,539.608L556.862,709.042c-36.07,15.7-50.428,15.7-83.721,0L96.394,539.608c-29.595-15.711-28.671-65.182,0-83.665L473.141,256.935c33.293-16.633,54.126-17.556,83.721,0L933.607,455.943C962.276,471.654,961.351,526.673,933.607,539.608ZM515,290.718L130.2,497.776,515,660,899.8,497.776Zm0,0C517.05,291.386,517.78,293.972,515,290.718Z"/>
            </svg>
            <div className={style.button__title}>Добавить один</div>
            <div className={style.button__subtitle}>файл</div>
          </label>
          <input onChange={(event) => fileUploadHandler(event)} type="file" id="oneFail" name="oneFail" />
        </div>

        <div className={style.button}>
          <label htmlFor="groupFiles">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 1000 1000">
              <path id="_2" data-name="2" fillRule="evenodd" d="M890.735,516.155L560.393,664.876c-31.626,13.786-44.216,13.786-73.409,0L156.641,516.155c-17.532-9.317-22.264-43.835-22.264-62.679,22.051,12.621,53.058,26.679,51.908,25.964l337.4,155.78,337.4-155.78c0.592-.134,30.662-15.321,51.908-25.964C913,472.755,907.03,508.551,890.735,516.155Zm0-155.781L560.393,509.1c-31.626,13.783-44.216,13.783-73.409,0L156.641,360.374c-25.949-13.79-25.139-57.214,0-73.437L486.984,112.256c29.193-14.6,47.46-15.41,73.409,0L890.735,286.937C915.873,300.727,915.061,349.02,890.735,360.374ZM523.687,141.909l-337.4,181.746,337.4,142.394,337.4-142.394Zm0,0C525.486,142.5,526.125,144.765,523.687,141.909Zm0,649.1,337.4-155.784c0.592-.136,30.662-15.319,51.908-25.961,0,19.28-5.969,55.076-22.264,62.68L560.393,820.655c-31.626,13.792-44.216,13.792-73.409,0L156.641,671.939c-17.532-9.317-22.264-43.834-22.264-62.68,22.051,12.623,53.058,26.676,51.908,25.961Z"/>
            </svg>
            <div className={style.button__title}>Добавить группу</div>
            <div className={style.button__subtitle}>Взаимосвязанных файлов</div>
          </label>
          <input multiple={true} type="file" id="groupFiles" name="groupFiles" />
        </div>
      </div>
    </div>
  );
}

export default ButtonsUploadFails;
