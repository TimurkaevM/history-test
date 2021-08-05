import { useState } from 'react';
import { useSelector } from 'react-redux';
import FailsBlock from './FailsBlock/index';
import FailsButton from './FailsButton/index';
import FailsList from './FailsList/index';
import MessageSendBtn from './MessageSend/index';


import style from './style.module.css';

function SendAddFails() {
  const [failAdd, setFailAdd] = useState(false);
  const image = useSelector(state => state.files.materials.image.one);
  const images = useSelector(state => state.files.materials.image.group);
  const audio = useSelector(state => state.files.materials.audio.one);
  const audios = useSelector(state => state.files.materials.audio.group);
  const video = useSelector(state => state.files.materials.video.one);
  const videos = useSelector(state => state.files.materials.video.group);
  const application = useSelector(state => state.files.materials.application.one);
  const applications = useSelector(state => state.files.materials.application.group);

  const handleClickClose = () => {
    setFailAdd(false);
  }

  const handleClickOpen = () => {
    setFailAdd(!failAdd);
  }

  return (
    <div className={style.fails}>
      <div className="container">
        <FailsButton failAdd={failAdd} handleClick={handleClickOpen} />
        {image.length === 0 && images.length === 0 && audio.length === 0 && audios.length === 0 && application.length === 0 && applications.length === 0 && video.length === 0 && videos.length === 0 ?
          null :
          <FailsList 
            image={image} 
            audio={audio} 
            video={video} 
            application={application}
            images={images} 
            audios={audios} 
            videos={videos} 
            applications={applications}   
            failAdd={failAdd}
          />
        }
        <MessageSendBtn />
      </div>
    </div>
  );
}

export default SendAddFails;
