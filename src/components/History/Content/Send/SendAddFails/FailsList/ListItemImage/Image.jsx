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
  }, [props.image.file])
  
  reader.readAsDataURL(props.image.file);

  return (
    <img className={style.image} src={url} alt="" />
  )
}

export default Image;
