import React from 'react';
import { useState } from 'react';

import style from './style.module.css';



function Audio(props) {
  const [ url , setUrl] = useState(null);

  let reader = new FileReader();
      reader.onload = () => {
        console.log(reader.result);
        setUrl(reader.result)
      }
      reader.readAsDataURL(props.audio.file);
      console.log(props.audio.id)

  return (
    <audio src={url} preload='auto' controls preload='auto'>
          
    </audio>
  )
}

export default Audio;
