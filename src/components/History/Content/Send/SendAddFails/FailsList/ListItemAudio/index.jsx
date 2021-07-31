import sound from '../../../../../../../assets/Icons/sound.svg';
import Audio from './Audio';

import style from './style.module.css';

function ListItemAudio(props) {  

  return (
    <li className={style.list__item}>
      <div className={style.list__header}>
          <img src={sound} alt="" />
          <p>Аудио</p>
      </div>
      <div className={style.list__content}>
        {!props.audio.length ? null : (
            props.audio.map(item => {
              return <Audio key={item.id} audio={item}/>
            })
          )}
          {!props.audios.length ? null : (
            
            props.audios.map(audio => {
            
              return <div key={audio.id} className={style.images__group}>
                {audio.file.map(item => {
                  return <Audio key={item.id} audio={item}/>
                })}
              </div>
            })
          )}
      </div>
    </li>
  )
}

export default ListItemAudio;
