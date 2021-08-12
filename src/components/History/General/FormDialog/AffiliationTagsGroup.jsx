import React from 'react';
import AffiliationTitle from './AffiliationTitle';
import AffiliationItems from './AffiliationItems';

import style from './style.module.css';

function AffiliationTagsGroup(props) {
  return (
    <React.Fragment>
      <div className={props.checkTime ? style.tags : style.deactivate}>
        <AffiliationTitle tag={props.tag} title="ПЕРИОД/ВЕК:" />
        <AffiliationItems title="ПЕРИОД/ВЕК:" centuries={props.centuries} />
      </div>

      <div className={props.checkInfo ? style.tags : style.deactivate}>
        <AffiliationTitle tag={props.tag} title="ТИП/ПРИНАДЛЕЖНОСТЬ:" />
        <AffiliationItems title="ТИП/ПРИНАДЛЕЖНОСТЬ:" types={props.types} />
      </div>
    </React.Fragment>
  );
}

export default AffiliationTagsGroup;
