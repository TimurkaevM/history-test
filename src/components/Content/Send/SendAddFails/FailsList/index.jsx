import video from '../../../../../assets/Icons/video.svg';
import doc from '../../../../../assets/Icons/doc.svg';
import sound from '../../../../../assets/Icons/sound.svg';
import photo from '../../../../../assets/Icons/photo.svg';

import style from './style.module.css';

function FailsList(props) {
  return (
    <ul className={`${style.fails__list} ${props.failAdd ? '' : ''}`}>
      <li className={style.list__item}>
        <img src={photo} alt="" />
        <p className={style.list__name}>Фото</p>
      </li>
      <li className={style.list__item}>
        <img src={doc} alt="" />
        <p className={style.list__name}>Документы</p>
      </li>
      <li className={style.list__item}>
        <img src={video} alt="" />
        <p className={style.list__name}>Видео</p>
      </li>
      <li className={style.list__item}>
        <img src={sound} alt="" />
        <p>Аудио</p>
      </li>
    </ul>
  );
}

export default FailsList;
