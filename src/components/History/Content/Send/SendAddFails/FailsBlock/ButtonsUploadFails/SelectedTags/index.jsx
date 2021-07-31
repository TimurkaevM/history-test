import { useState } from 'react';
import CloseButton from '../../../../../../General/buttons/CloseButton/CloseButton';
import { v4 as uuidv4 } from 'uuid';

import style from './style.module.css';

function SelectedTags(props) {
  const [ checkInfo, setCheckInfo ] = useState(false);
  const [ checkTime, setCheckTime ] = useState(false);

  const changeCheckInfo = () => {
    setCheckInfo(!checkInfo)
  }

  const changeCheckTime = () => {
    setCheckTime(!checkTime)
  }

  function generateId () {
    const id = uuidv4();

      return id;
  }

  function fileUploadHandler(event) {
    const files = [...event.target.files];

    if(!files.length) {
      return
    }

    const filterFiles = files.filter( file => {
      if(!file.type.match(props.format)) {
        return false
      }
      return true
    });

    const obj = {
      id: generateId(),
      file: []
    };

    filterFiles.forEach(file => {
      obj.file.push({
        id: generateId(),
        file: file
      })
    })

    props.handleTypeOpen(obj);
    props.handleClose();
    console.log(obj)
  }


  return (
    <div className={style.tags}>
      <CloseButton bgColor="initial" handleClick={props.handleClose} width="35px" height="35px" top="-40px" right="0" />
      <div className={style.tags__title}>ВЫБЕРИТЕ ОБЩИЕ ХАРАКТЕРИСТИКИ ФАЙЛОВ</div>
      <div className={style.check}>
        <input 
          className={style.check__input} 
          type="checkbox" 
          id="scales" 
          name="scales"
          checked={checkInfo} 
          onChange={changeCheckInfo}
        />
        <label className={`${style.check__label} ${checkInfo ? style.checked : ""}`} htmlFor="scales">
          <h4>ПРЕДНАДЛЕЖНОСТИ ИНФОРМАЦИИ</h4>
          <p>(ИСТОРИЯ, ЛИЧНОСТЬ, СОБЫТИЕ, ТРАДИЦИИ и т.д.)</p>
        </label>
      </div>

      <div className={style.check}>
        <input 
          checked={checkTime} 
          onChange={changeCheckTime} 
          className={style.check__input} 
          type="checkbox" 
          id="horns" 
          name="horns" 
        />
        <label className={`${style.check__label} ${checkTime ? style.checked : ""}`} htmlFor="horns">
          <h4>ВРЕМЯ</h4>
          <p>(ВЕК, ПЕРИОД)</p>
        </label>
      </div>

      <div className={style.button}>
        <label htmlFor="groupFiles">
          <div className={style.tags__button}>
            ДАЛЕЕ
          </div>
        </label>
        <input onChange={(event)=> fileUploadHandler(event)} multiple={true} type="file" id="groupFiles" name="groupFiles" />
      </div>
    </div>
  )
}

export default SelectedTags;
