import CloseButton from '../../../../../General/buttons/CloseButton/CloseButton';
import UploadGroup from './UploadGroup';
import UploadOne from './UploadOne';

import style from './style.module.css';

function ButtonsUploadFails(props) {

  return (
    <div className={style.buttons}>
      <CloseButton bgColor="initial" handleClick={props.handleClose} width="35px" height="35px" top="-40px" right="0" />
      <div className={style.buttons__title}>
        Выберите тип загрузки
      </div>

      
      <div className={style.buttons__block}>
        <UploadOne handleTypeOpen={props.handleTypeOpen} handleClose={props.handleClose} format={props.format} />
        <UploadGroup handleTypeOpen={props.handleTypeOpen} handleClose={props.handleClose} format={props.format} />
      </div>
    </div>
  );
}

export default ButtonsUploadFails;
