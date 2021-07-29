import { useDispatch, useSelector } from 'react-redux';
import CloseButton from '../../../../General/buttons/CloseButton/CloseButton';
import AffiliationFile from './AffiliationFile';
import AffiliationForms from './AffiliationForms';
import AffiliationTitle from './AffiliationTitle';
import AffiliationItems from './AffiliationItems';
import AffiliationComment from './AffiliationComment';
import AffiliationFilesGroup from './AffiliationFilesGroup';
import { UploadGroupFails, UploadOneFail, UploadTextFail } from '../../../../../redux/ducks/files';

import style from './style.module.css';

function AffiliationDialog(props) {

  const dispatch = useDispatch();

  const tag = useSelector(state => state.files.tag);
  const tags = useSelector(state => state.files.tags);

  const handleFailAddClick = () => {
    if(props.type === "text") {
      props.handleClose();
      return dispatch(UploadTextFail(tag, props.content.text));
    }
    if(!Array.isArray(props.content.file)) {
      props.handleClose();
      return dispatch(UploadOneFail(props.content, props.type, tag));
    }

    if(Array.isArray(props.content.file)) {
      props.handleClose();
      return dispatch(UploadGroupFails(props.content, props.type, tag));
    }
  }

  if(!props.content) {
    return null;
  }

  console.log(Array.isArray(props.content.file))

  return (
    <div className={style.form__dialog}>
      <div className={style.title__info}>
        НАСТРОЙКА ПРИНАДЛЕЖНОСТИ ФОТОМАТЕРИАЛА!
          <span>?</span>
      </div>
      <CloseButton bgColor="initial" handleClick={props.handleClose} width="35px" height="35px" top="-40px" right="0" />
      
      <div className={style.dialog__info}>
        <AffiliationForms />
        {!Array.isArray(props.content.file) ? (
          <AffiliationFile type={props.type} content={props.content} />
        ) : (
          <AffiliationFilesGroup type={props.type} content={props.content} />
        )}
      </div>
      
      <div className={style.tags}>
        <AffiliationTitle tag={tag} title="ПЕРИОД/ВЕК:" />
        <AffiliationItems title="ПЕРИОД/ВЕК:" tags={tags} />
      </div>

      <div className={style.tags}>
        <AffiliationTitle tag={tag} title="ТИП/ПРИНАДЛЕЖНОСТЬ:" />
        <AffiliationItems title="ТИП/ПРИНАДЛЕЖНОСТЬ:" tags={tags} />
      </div>

      <AffiliationComment />

      <button onClick={handleFailAddClick} className={style.dialog__button}>
        Применить
      </button>

    </div>
  )
}

export default AffiliationDialog;
