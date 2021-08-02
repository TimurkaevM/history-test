import { v4 as uuidv4 } from 'uuid';

import style from './style.module.css';

function UploadGroup(props) {

  function generateId () {
    const id = uuidv4();

      return id;
  }

  // function fileUploadHandler(event) {
  //   const files = [...event.target.files];

  //   if(!files.length) {
  //     return
  //   }

  //   const filterFiles = files.filter( file => {
  //     if(!file.type.match(props.format)) {
  //       return false
  //     }
  //     return true
  //   });

  //   const obj = {
  //     id: generateId(),
  //     file: []
  //   };

  //   filterFiles.forEach(file => {
  //     obj.file.push({
  //       id: generateId(),
  //       file: file
  //     })
  //   })

  //   props.handleTypeOpen(obj);
  //   props.handleClose();
  //   console.log(obj)
  // }

  const handleClick = () => {
    props.handleTagsOpen();
    props.handleClose();
  }

  return (
    <div onClick={handleClick} className={style.button}>
      {/* <label htmlFor="groupFiles"> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 1000 1000">
          <path id="_2" data-name="2" fillRule="evenodd" d="M890.735,516.155L560.393,664.876c-31.626,13.786-44.216,13.786-73.409,0L156.641,516.155c-17.532-9.317-22.264-43.835-22.264-62.679,22.051,12.621,53.058,26.679,51.908,25.964l337.4,155.78,337.4-155.78c0.592-.134,30.662-15.321,51.908-25.964C913,472.755,907.03,508.551,890.735,516.155Zm0-155.781L560.393,509.1c-31.626,13.783-44.216,13.783-73.409,0L156.641,360.374c-25.949-13.79-25.139-57.214,0-73.437L486.984,112.256c29.193-14.6,47.46-15.41,73.409,0L890.735,286.937C915.873,300.727,915.061,349.02,890.735,360.374ZM523.687,141.909l-337.4,181.746,337.4,142.394,337.4-142.394Zm0,0C525.486,142.5,526.125,144.765,523.687,141.909Zm0,649.1,337.4-155.784c0.592-.136,30.662-15.319,51.908-25.961,0,19.28-5.969,55.076-22.264,62.68L560.393,820.655c-31.626,13.792-44.216,13.792-73.409,0L156.641,671.939c-17.532-9.317-22.264-43.834-22.264-62.68,22.051,12.623,53.058,26.676,51.908,25.961Z"/>
        </svg>
        <div className={style.button__title}>Добавить группу</div>
        <div className={style.button__subtitle}>Взаимосвязанных файлов</div>
      {/* </label> */}
      {/* <input onChange={(event)=> fileUploadHandler(event)} multiple={true} type="file" id="groupFiles" name="groupFiles" /> */}
    </div>
  );
}

export default UploadGroup;