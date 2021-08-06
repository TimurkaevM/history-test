import { useDispatch } from 'react-redux';
import { addedTypes, addedCenturies } from '../../../../redux/ducks/files';

import style from './style.module.css';

function AffiliationItems(props) {
  const dispatch = useDispatch();

  const handleAddedCenturiesClick = (item) => {
    dispatch(addedCenturies(item))
  }

  const handleAddedTypesClick = (item) => {
    dispatch(addedTypes(item))
  }


  if(props.title === "ТИП/ПРИНАДЛЕЖНОСТЬ:") {
    return (
      <div className={style.tags__items}>
        {props.types.map(item => {
            return <div onClick={() => handleAddedTypesClick(item)} key={item.id} className={style["tags__item-choice"]}>{item.title}</div>
        })}
      </div>
    )
  }

  if(props.title === "ПЕРИОД/ВЕК:") {
    return (
      <div className={style.tags__items}>
        {props.centuries.map(item => {
            return <div onClick={() => handleAddedCenturiesClick(item)} key={item.id} className={style["tags__item-choice"]}>{item.title}</div>
        })}
      </div>
    )
  }
}

export default AffiliationItems
