import React from 'react';
import AffiliationTitle from './AffiliationTitle';
import AffiliationItems from './AffiliationItems';

import style from './style.module.css';

function AffiliationTags(props) {
  return (
    <React.Fragment>
      <div className={style.tags}>
        <AffiliationTitle tag={props.tag} title="ПЕРИОД/ВЕК:" />
        <AffiliationItems title="ПЕРИОД/ВЕК:" centuries={props.centuries} />
      </div>

      <div className={style.tags}>
        <AffiliationTitle tag={props.tag} title="ТИП/ПРИНАДЛЕЖНОСТЬ:" />
        <AffiliationItems title="ТИП/ПРИНАДЛЕЖНОСТЬ:" types={props.types} />
      </div>
    </React.Fragment>
  );
}

export default AffiliationTags;
