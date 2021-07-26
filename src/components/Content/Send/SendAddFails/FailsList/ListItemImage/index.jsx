import photo from '../../../../../../assets/Icons/photo.svg';

import style from './style.module.css';
import Image from './Image';

function ListItemImage(props) {  

  return (
    <li className={style.list__item}>
      <div className={style.list__header}>
        <img src={photo} alt="" />
        <p className={style.list__name}>Фото</p>
      </div>
      <div className={style.list__content}>
        {!props.photo.length ? null : (
            props.photo.map(photo => {
              return <Image photo={photo}/>
            })
          )}
          {!props.photos.length ? null : (
            
            props.photos.map(photos => {
            
              return (
                <div className={style.images__group}>
                  {photos.files.map(photo => {
                    return <Image  photo={photo}/>
                  })}
                </div>
              )
            })
          )}
      </div>
    </li>      
  );
}

export default ListItemImage;
