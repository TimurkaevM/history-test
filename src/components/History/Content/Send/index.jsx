import SendForms from './SendForms';
import SendTitle from './SendInfo';
import SendAddFails from './SendAddFails';

import style from './style.module.css';

function Send() {
  return (
    <div className={style.send}>
      <SendTitle />
      <SendForms />
      <SendAddFails />
    </div>
  );
}

export default Send;
