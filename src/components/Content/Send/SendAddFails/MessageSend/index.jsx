import style from './style.module.css';

function MessageSendBtn() {
  return (
      <div className={style.message}>
        <button className={style.add__btn}>Отправить</button>
      </div>
  );
}

export default MessageSendBtn;
