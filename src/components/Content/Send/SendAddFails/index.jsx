import { useState } from 'react';
import FailsBlock from './FailsBlock/index';
import FailsButton from './FailsButton/index';
import FailsList from './FailsList/index';
import MessageSendBtn from './MessageSend/index';


import style from './style.module.css';

function SendAddFails() {
  const [failAdd, setFailAdd] = useState(false);

  const handleClickClose = () => {
    setFailAdd(false);
  }

  const handleClickOpen = () => {
    setFailAdd(true);
  }

  return (
    <div className={style.fails}>
      <div className="container">
        {failAdd ? (
          <FailsBlock handleClick={handleClickClose} />
        ) : (
          <FailsButton handleClick={handleClickOpen} />
        )}
        <FailsList failAdd={failAdd} />
        <MessageSendBtn />
      </div>
    </div>
  );
}

export default SendAddFails;
