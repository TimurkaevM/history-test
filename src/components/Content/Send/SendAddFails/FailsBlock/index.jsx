import video from '../../../../../assets/Icons/video.svg';
import doc from '../../../../../assets/Icons/doc.svg';
import sound from '../../../../../assets/Icons/sound.svg';
import photo from '../../../../../assets/Icons/photo.svg';

import style from './style.module.css';


function FailsBlock(props) {
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
      <div>
        <svg onClick={props.handleClick} className={style.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
          <path className={style.path} id="_8_copy" data-name="8 copy" d="M761.161,793.907C602.711,952.3,345.808,952.3,187.353,793.9s-158.45-415.2,0-573.592,415.353-158.392,573.8,0S919.614,635.513,761.161,793.907ZM223.216,256.163c-138.643,138.593-138.643,363.3,0,501.891s363.434,138.594,502.077,0,138.648-363.3,0-501.9S361.864,117.567,223.216,256.163ZM599.775,417.484l-89.656,89.625,89.658,89.626a25.354,25.354,0,0,1-35.863,35.849l-89.658-89.626L384.6,632.583a25.354,25.354,0,0,1-35.863-35.85L438.4,507.109l-89.658-89.625a25.354,25.354,0,0,1,35.861-35.85l89.658,89.627,89.658-89.625A25.353,25.353,0,1,1,599.775,417.484Z"/>
        </svg>
      </div>
    </ul>
  );
}

export default FailsBlock;
