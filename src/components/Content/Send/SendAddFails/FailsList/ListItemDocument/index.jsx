import doc from '../../../../../../assets/Icons/doc.svg';

import style from './style.module.css';
import Document from './Document';

function ListItemDocument(props) {  

  return (
    <li className={style.list__item}>
      <div className={style.list__header}>
        <img src={doc} alt="" />
        <p className={style.list__name}>Документы</p>
      </div>
      <div className={style.list__content}>
        {!props.document.length ? null : (
          props.document.map(item => {
            return <Document document={item} />
          })
        )}
        {!props.documents.length ? null : (
          
          props.documents.map(document => {
          
            return (
              <div className={style.group}>
                {document.files.map(item => {
                  return <Document  document={item}/>
                })}
              </div>
            )
          })
        )}
      </div>
    </li>
  );
}

export default ListItemDocument;
