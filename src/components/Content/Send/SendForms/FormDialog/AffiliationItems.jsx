import style from './style.module.css';

function AffiliationItems(props) {


  if(props.title === "ТИП/ПРИНАДЛЕЖНОСТЬ:") {
    return (
      <div className={style.tags__items}>
        {props.tags.types.map(item => {
            return <div onClick={() => props.handleAddedTypesClick(item)} key={item.id} className={style["tags__item-choice"]}>{item.type}</div>
        })}
      </div>
    )
  }

  if(props.title === "ПЕРИОД/ВЕК:") {
    return (
      <div className={style.tags__items}>
        {props.tags.centuries.map(item => {
            return <div onClick={() => props.handleAddedCenturiesClick(item)} key={item.id} className={style["tags__item-choice"]}>{item.type}</div>
        })}
      </div>
    )
  }
}

export default AffiliationItems
