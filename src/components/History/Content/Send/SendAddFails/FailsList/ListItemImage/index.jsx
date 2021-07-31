import photo from '../../../../../../../assets/Icons/photo.svg';

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
        {!props.image.length ? null : (
            props.image.map(image => {
              return <Image image={image}/>
            })
          )}
          {!props.images.length ? null : (
            
            props.images.map(images => {
            
              return (
                <div className={style.images__group}>
                  {images.file.map(image => {
                    return <Image  image={image}/>
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
