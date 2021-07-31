import React from 'react';
import AffiliationTitle from './AffiliationTitle';
import AffiliationItems from './AffiliationItems';


import style from './style.module.css';

function AffiliationTagsGroup(props) {
  console.log(props.checkTime)
  console.log(props.checkInfo)

  return (
    <React.Fragment>
      <div className={props.checkTime ? style.tags : style.deactivate}>
        <AffiliationTitle tag={props.tag} title="ПЕРИОД/ВЕК:" />
        <AffiliationItems title="ПЕРИОД/ВЕК:" tags={props.tags} />
      </div>

      <div className={props.checkInfo ? style.tags : style.deactivate}>
        <AffiliationTitle tag={props.tag} title="ТИП/ПРИНАДЛЕЖНОСТЬ:" />
        <AffiliationItems title="ТИП/ПРИНАДЛЕЖНОСТЬ:" tags={props.tags} />
      </div>
    </React.Fragment>
  )
}

export default AffiliationTagsGroup;
