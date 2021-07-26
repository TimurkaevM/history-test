import React from 'react';
import style from './style.module.css';
import { useState, useEffect} from 'react';


function Image(props) {
  const [ url , setUrl] = useState(null);

  let reader = new FileReader();
      reader.onload = () => {
        console.log(reader.result);
        setUrl(reader.result)
      }
      reader.readAsDataURL(props.video.file);

  return (
    // <video className={style.image} src={url} alt="" />
    <video width="750" height="500" controls >
      <source src={url} type="video/mp4"/>
     </video>
  )
}

export default Image;
