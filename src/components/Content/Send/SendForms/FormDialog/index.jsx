import { useDispatch, useSelector } from 'react-redux';
import CloseButton from '../../../../General/buttons/CloseButton/CloseButton';
import AffiliationFile from './AffiliationFile';
import AffiliationForms from './AffiliationForms';
import AffiliationTitle from './AffiliationTitle';
import AffiliationItems from './AffiliationItems';
import AffiliationComment from './AffiliationComment';
import { UploadOneFail, addedTypes, addedCenturies, changeAuthorTag, changeCommentTag, changeTitleTag, changeYearTag, UploadTextFail } from '../../../../../redux/ducks/files';

import style from './style.module.css';

function AffiliationDialog(props) {

  const dispatch = useDispatch()

  const tags = useSelector(state => state.files.tags);
  const tag = useSelector(state => state.files.tag);


  const handleChangeTitle = (e) => {
    dispatch(changeTitleTag(e.target.value));
  }

  const handleChangeYear = (e) => {
    dispatch(changeYearTag(e.target.value));
  }

  const handleChangeAuthor = (e) => {
    dispatch(changeAuthorTag(e.target.value));
  }

  const handleChangeComment = (e) => {
    dispatch(changeCommentTag(e.target.value));
  }

  const handleAddedCenturiesClick = (item) => {
    dispatch(addedCenturies(item))
  }

  const handleAddedTypesClick = (item) => {
    dispatch(addedTypes(item))
  }

  const handleFailAddClick = () => {
    if(props.type === "text") {
      props.handleClose();
      return dispatch(UploadTextFail(tag, props.content.text));
    }
    if(typeof(props.content.file) === "object") {
      props.handleClose();
      return dispatch(UploadOneFail(props.content, props.type, tag));
    }
  }

  if(!props.content) {
    return null;
  }

  return (
    <div className={style.form__dialog}>
      <div className={style.title__info}>
        НАСТРОЙКА ПРИНАДЛЕЖНОСТИ ФОТОМАТЕРИАЛА!
          <span>?</span>
      </div>
      <CloseButton bgColor="initial" handleClick={props.handleClose} width="35px" height="35px" top="-40px" right="0" />
      
      <div className={style.dialog__info}>
        <AffiliationForms
          title={tag.name}
          year={tag.year}
          author={tag.author}
          handleChangeTitle={handleChangeTitle}
          handleChangeYear={handleChangeYear}
          handleChangeAuthor={handleChangeAuthor}   
        />
        <AffiliationFile type={props.type} content={props.content} />
      </div>
      
      <div className={style.tags}>
        <AffiliationTitle tag={tag} title="ПЕРИОД/ВЕК:" />
        <AffiliationItems handleAddedTypesClick={handleAddedTypesClick} handleAddedCenturiesClick={handleAddedCenturiesClick} title="ПЕРИОД/ВЕК:" tags={tags} />
      </div>

      <div className={style.tags}>
        <AffiliationTitle tag={tag} title="ТИП/ПРИНАДЛЕЖНОСТЬ:" />
        <AffiliationItems handleAddedTypesClick={handleAddedTypesClick} handleAddedCenturiesClick={handleAddedCenturiesClick}  title="ТИП/ПРИНАДЛЕЖНОСТЬ:" tags={tags} />
      </div>

      <AffiliationComment comment={tag.comment} handleChangeComment={handleChangeComment} />

      <button onClick={handleFailAddClick} className={style.dialog__button}>
        Применить
      </button>

    </div>
  )
}

export default AffiliationDialog;
