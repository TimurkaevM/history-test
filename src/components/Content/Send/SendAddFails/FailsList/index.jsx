import ListItemDocument from './ListItemDocument';
import ListItemImage from './ListItemImage';
import ListItemVideo from './ListItemVideo';
import ListItemAudio from './ListItemAudio';

import style from './style.module.css';


function FailsList(props) {  

  return (
    <ul className={`${style.fails__list} ${props.failAdd ? '' : ''}`}>
      {props.image.length === 0 && props.images.length === 0 ?
        null : <ListItemImage image={props.image} images={props.images} />
      }
      {props.application.length === 0 && props.applications.length === 0 ?
        null : <ListItemDocument application={props.application} applications={props.applications} />
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
