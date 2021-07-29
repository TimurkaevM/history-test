import { useDispatch } from 'react-redux';
import { removeCenturies, removeTypes } from '../../../../../redux/ducks/files';

import style from './style.module.css';

function AffiliationTitle(props) {

  const dispatch = useDispatch();

  const handleRemoveCenturiesClick = (item) => {
    dispatch(removeCenturies(item))
  }

  const handleRemoveTypesClick = (item) => {
    dispatch(removeTypes(item))
  }


  if(props.title === "ТИП/ПРИНАДЛЕЖНОСТЬ:") {
    return (
      <div className={style.tags__affiliation}>
        <div className={style.tags__title}>
          {props.title}
        </div>
        <div className={style.tags__choice}>
          {!props.tag.centuries ? 
            null : (
              props.tag.types.map( item => {
                return  <div onClick={() => handleRemoveTypesClick(item.id)} className={style["tags__item-choice"]}>{item.type}</div>
              })
            ) 
          }
        </div>   
      </div>
    )
  }

  if(props.title === "ПЕРИОД/ВЕК:") {
    return (
      <div className={style.tags__affiliation}>
        <div className={style.tags__title}>
          {props.title}
        </div>
        <div className={style.tags__choice}>
          {!props.tag.centuries ? 
            null : (
              props.tag.centuries.map( item => {
                return  <div onClick={() => handleRemoveCenturiesClick(item.id)} className={style["tags__item-choice"]}>{item.type}</div>
              })
            ) 
          }
        </div>   
      </div>
    )
  }
}

export default AffiliationTitle
