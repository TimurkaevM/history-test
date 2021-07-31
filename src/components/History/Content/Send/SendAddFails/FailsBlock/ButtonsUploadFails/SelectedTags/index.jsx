import { useState } from 'react';
import CloseButton from '../../../../../../General/buttons/CloseButton/CloseButton';
import { v4 as uuidv4 } from 'uuid';

import style from './style.module.css';

function SelectedTags(props) {

  function generateId () {
    const id = uuidv4();

      return id;
  }

  console.log(!props.checkInfo && !props.checkTime)

  function fileUploadHandler(event) {
    const files = [...event.target.files];

    if(!props.checkInfo && !props.checkTime) {
      return
    }

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
          checked={props.checkInfo} 
          onChange={props.changeCheckInfo}
        />
        <label className={`${style.check__label} ${props.checkInfo ? style.checked : ""}`} htmlFor="scales">
          <h4>ПРЕДНАДЛЕЖНОСТИ ИНФОРМАЦИИ</h4>
          <p>(ИСТОРИЯ, ЛИЧНОСТЬ, СОБЫТИЕ, ТРАДИЦИИ и т.д.)</p>
        </label>
      </div>

      <div className={style.check}>
        <input 
          checked={props.checkTime} 
          onChange={props.changeCheckTime} 
          className={style.check__input} 
          type="checkbox" 
          id="horns" 
          name="horns" 
        />
        <label className={`${style.check__label} ${props.checkTime ? style.checked : ""}`} htmlFor="horns">
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
        <input disabled={!props.checkInfo && !props.checkTime} onChange={(event)=> fileUploadHandler(event)} multiple={true} type="file" id="groupFiles" name="groupFiles" />
      </div>
    </div>
  )
}

export default SelectedTags;
