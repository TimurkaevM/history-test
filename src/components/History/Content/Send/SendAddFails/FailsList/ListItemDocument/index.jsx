import doc from '../../../../../../../assets/Icons/doc.svg';

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
        {!props.application.length
          ? null
          : props.application.map((item) => {
              return (
                <Document
                  amount="one"
                  handleDeleteFail={props.handleDeleteFail}
                  application={item}
                />
              );
            })}
        {!props.applications.length
          ? null
          : props.applications.map((application) => {
              return (
                <div className={style.group}>
                  {application.file.map((item) => {
                    return (
                      <Document
                        groupId={application.id}
                        amount="group"
                        handleDeleteFail={props.handleDeleteFail}
                        application={item}
                      />
                    );
                  })}
                </div>
              );
            })}
      </div>
    </li>
  );
}

export default ListItemDocument;
