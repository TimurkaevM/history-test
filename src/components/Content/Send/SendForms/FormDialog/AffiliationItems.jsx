import style from './style.module.css';

function AffiliationItems(props) {
  return (
    <div className={style.tags__items}>
      {props.tags.map(item => {
          return <div key={item.id} className={style["tags__item-choice"]}>{item.type}</div>
      })}
    </div>
  )
}

export default AffiliationItems
