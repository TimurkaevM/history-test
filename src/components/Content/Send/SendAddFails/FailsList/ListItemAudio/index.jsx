import sound from '../../../../../assets/Icons/sound.svg';

import style from './style.module.css';
import Image from './Image';

function FailsList(props) {  

  return (
    <li className={style.list__item}>
      <img src={sound} alt="" />
      <p>Аудио</p>
    </li>
  )
}

export default FailsList;
