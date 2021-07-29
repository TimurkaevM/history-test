import React from 'react';
import { useState } from 'react';
import ReactPlayer from 'react-player';

import style from './style.module.css';



function Video(props) {
  const [ url , setUrl] = useState(null);

  let reader = new FileReader();
      reader.onload = () => {
        setUrl(reader.result);
      }
      reader.readAsDataURL(props.video.file);

  return (
      <ReactPlayer url={url} controls />
  )
}

export default Video;