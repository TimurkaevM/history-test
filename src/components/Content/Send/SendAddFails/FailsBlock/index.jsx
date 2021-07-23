import { useState } from 'react';
import CloseButton from '../../../../General/buttons/CloseButton/CloseButton';
import video from '../../../../../assets/Icons/video.svg';
import doc from '../../../../../assets/Icons/doc.svg';
import sound from '../../../../../assets/Icons/sound.svg';
import photo from '../../../../../assets/Icons/photo.svg';

import style from './style.module.css';

function FailsBlock(props) {
  const [ open, setOpen] = useState(false);

  return (
    <ul className={`${style.fails__block} ${props.failAdd ? '' : "style.list__active"}`}>
      <li className={style.block__item}>
        <img src={photo} alt="" />
        <p className={style.block__name}>Фото</p>
      </li>
      <li className={style.block__item}>
        <img src={doc} alt="" />
        <p className={style.block__name}>Документы</p>
      </li>
      <li className={style.block__item}>
        <img src={video} alt="" />
        <p className={style.block__name}>Видео</p>
      </li>
      <li className={style.block__item}>
        <img src={sound} alt="" />
        <p className={style.block__name}>Аудио</p>
      </li>
      <CloseButton handleClick={props.handleClick} width="35px" height="35px" top="-18px" right="-18px" />
    </ul>
  );
}

export default FailsBlock;
