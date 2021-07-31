import ListItemDocument from './ListItemDocument';
import ListItemImage from './ListItemImage';
import ListItemVideo from './ListItemVideo';
import ListItemAudio from './ListItemAudio';
import { useDispatch } from 'react-redux';
import { deleteOneFail } from '../../../../../../redux/ducks/files';

import style from './style.module.css';




function FailsList(props) {
  
  const dispatch = useDispatch()

  const handleDeleteFail = (id, format, amount, groupId = "") => {
    dispatch(deleteOneFail(id, format, amount, groupId));
  }

  

  return (
    <ul className={`${style.fails__list} ${props.failAdd ? '' : ''}`}>
      {props.image.length === 0 && props.images.length === 0 ?
        null : <ListItemImage handleDeleteFail={handleDeleteFail} image={props.image} images={props.images} />
      }
      {props.application.length === 0 && props.applications.length === 0 ?
        null : <ListItemDocument handleDeleteFail={handleDeleteFail} application={props.application} applications={props.applications} />
      }
      {props.video.length === 0 && props.videos.length === 0 ?
        null : <ListItemVideo handleDeleteFail={handleDeleteFail} video={props.video} videos={props.videos} />
      }
      {props.audio.length === 0 && props.audios.length === 0 ?
        null : <ListItemAudio handleDeleteFail={handleDeleteFail} audio={props.audio} audios={props.audios} />
      }
    </ul>
  );
}

export default FailsList;
