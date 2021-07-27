import { useSelector } from 'react-redux';
import CloseButton from '../../../../General/buttons/CloseButton/CloseButton';
import AffiliationFile from './AffiliationFile';
import AffiliationForms from './AffiliationForms';
import AffiliationTitle from './AffiliationTitle';
import AffiliationItems from './AffiliationItems';
import AffiliationComment from './AffiliationComment';

import style from './style.module.css';

function AffiliationDialog(props) {
  const tags = useSelector(state => state.files.tags);

  return (
    <div className={style.form__dialog}>
      <div className={style.title__info}>
        НАСТРОЙКА ПРИНАДЛЕЖНОСТИ ФОТОМАТЕРИАЛА!
          <span>?</span>
      </div>
      <CloseButton bgColor="initial" handleClick={props.handleClose} width="35px" height="35px" top="-40px" right="0" />
      
      <div className={style.dialog__info}>
        <AffiliationForms />
        <AffiliationFile />
      </div>
      
      <div className={style.tags}>
        <AffiliationTitle title="ПЕРИОД/ВЕК:" />
        <AffiliationItems tags={tags.centuries} />
      </div>

      <div className={style.tags}>
        <AffiliationTitle title="ТИП/ПРИНАДЛЕЖНОСТЬ:" />
        <AffiliationItems tags={tags.types} />
      </div>

      <AffiliationComment />

      <button className={style.dialog__button}>
        Применить
      </button>

    </div>
  )
}

export default AffiliationDialog;
