import React from 'react';
import style from './style.module.css';
import { useState } from 'react';


function Image(props) {
  const [ url , setUrl] = useState(null);

  let reader = new FileReader();
      reader.onload = () => {
        console.log(reader.result);
        setUrl(reader.result)
      }
      reader.readAsDataURL(props.photo.file);

  return (
    <img className={style.image} src={url} alt="" />
  )
}

export default Image
