import sound from '../../../../../assets/Icons/sound.svg';
import ListItemDocument from './ListItemDocument';
import ListItemImage from './ListItemImage';

import style from './style.module.css';
import ListItemVideo from './ListItemVideo';

function FailsList(props) {  

  return (
    <ul className={`${style.fails__list} ${props.failAdd ? '' : ''}`}>
      {props.photo.length === 0 && props.photos.length === 0 ?
        null : <ListItemImage photo={props.photo} photos={props.photos} />
      }
      {props.document.length === 0 && props.documents.length === 0 ?
        null : <ListItemDocument document={props.document} documents={props.documents} />
      }
      {props.video.length === 0 && props.videos.length === 0 ?
        null : <ListItemVideo video={props.video} videos={props.videos} />
      }
      {props.audio.length === 0 && props.audios.length === 0 ?
        null : (
          <li className={style.list__item}>
            <img src={sound} alt="" />
            <p>Аудио</p>
          </li>
        )
      }
    </ul>
  );
}

export default FailsList;
