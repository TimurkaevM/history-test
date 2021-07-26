import { useState } from 'react';
import { useSelector } from 'react-redux';
import FailsBlock from './FailsBlock/index';
import FailsButton from './FailsButton/index';
import FailsList from './FailsList/index';
import MessageSendBtn from './MessageSend/index';


import style from './style.module.css';

function SendAddFails() {
  const [failAdd, setFailAdd] = useState(false);
  const photo = useSelector(state => state.files.materials.photo);
  const photos = useSelector(state => state.files.materials.photos);
  const audio = useSelector(state => state.files.materials.audio);
  const audios = useSelector(state => state.files.materials.audios);
  const video = useSelector(state => state.files.materials.video);
  const videos = useSelector(state => state.files.materials.videos);
  const document = useSelector(state => state.files.materials.document);
  const documents = useSelector(state => state.files.materials.documents);

  console.log(photo)

  const handleClickClose = () => {
    setFailAdd(false);
  }

  const handleClickOpen = () => {
    setFailAdd(true);
  }

  return (
    <div className={style.fails}>
      <div className="container">
        {failAdd ? (
          <FailsBlock handleClick={handleClickClose} />
        ) : (
          <FailsButton handleClick={handleClickOpen} />
        )}
        {photo.length === 0 && photos.length === 0 && audio.length === 0 && audios.length === 0 && document.length === 0 && documents.length === 0 && video.length === 0 && videos.length === 0 ?
          null :
          <FailsList 
            photo={photo} 
            audio={audio} 
            video={video} 
            document={document}
            photos={photos} 
            audios={audios} 
            videos={videos} 
            documents={documents}   
            failAdd={failAdd}
          />
        }
        <MessageSendBtn />
      </div>
    </div>
  );
}

export default SendAddFails;
