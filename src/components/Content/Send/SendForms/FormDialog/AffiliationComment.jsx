import style from './style.module.css';

function AffiliationComment() {
  return (
    <div className={style.comment}>
      <div className={style.comment__title}>
        Комментарий к файлу
      </div>
      <textarea className={style.comment__text} name="comment" id="comment" rows="7"></textarea>
    </div>
  )
}

export default AffiliationComment
