import style from './style.module.css';

function AffiliationTitle(props) {
  return (
    <div className={style.tags__affiliation}>
      <div className={style.tags__title}>
        {props.title}
      </div>
      <div className={style.tags__choice}>
        <div className={style["tags__item-choice"]}>XV </div>
        <div className={style["tags__item-choice"]}>XV </div>
      </div>   
    </div>
  )
}

export default AffiliationTitle
