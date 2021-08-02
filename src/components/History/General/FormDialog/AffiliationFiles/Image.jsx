import React from 'react';
import style from './style.module.css';
import { useState, useEffect} from 'react';


function Image(props) {
  const [ url , setUrl] = useState(null);

  let reader = new FileReader();

  useEffect(() => {
    reader.onload = () => {
      console.log(reader.result);
      setUrl(reader.result)
    }
  }, [reader, props.item.file])
  
  reader.readAsDataURL(props.item.file);

  return (
    <img className={style.document__textarea} src={url} alt="" />
  )
}

export default Image
