import { useState } from 'react';
import FormName from './FormName/index';
import FormText from './FormText/index';

import style from './style.module.css';

function SendForms() {
  return (
    <div className={style.forms}>
      <div className="container">
        <FormName />
        <FormText />
      </div>
    </div>
  );
}

export default SendForms;
