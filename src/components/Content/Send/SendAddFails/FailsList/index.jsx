import ListItemDocument from './ListItemDocument';
import ListItemImage from './ListItemImage';
import ListItemVideo from './ListItemVideo';
import ListItemAudio from './ListItemAudio';

import style from './style.module.css';


function FailsList(props) {  

  return (
    <ul className={`${style.fails__list} ${props.failAdd ? '' : ''}`}>
      {props.photo.length === 0 && props.photos.length === 0 ?
        null : <ListItemImage photo={props.photo} photos={props.photos} />
      }
      {props.application.length === 0 && props.documents.length === 0 ?
        null : <ListItemDocument application={props.application} documents={props.documents} />
      }
      {props.video.length === 0 && props.videos.length === 0 ?
        null : <ListItemVideo video={props.video} videos={props.videos} />
      }
      {props.audio.length === 0 && props.audios.length === 0 ?
        null : <ListItemAudio audio={props.audio} audios={props.audios} />
      }
    </ul>
  );
}

export default FailsList;
