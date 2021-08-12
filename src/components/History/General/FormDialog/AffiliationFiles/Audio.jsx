import React from 'react';
import { useState } from 'react';

import style from './style.module.css';

function Audio(props) {
  const [url, setUrl] = useState(null);

  let reader = new FileReader();
  reader.onload = () => {
    console.log(reader.result);
    setUrl(reader.result);
  };
  reader.readAsDataURL(props.item.file);

  return <audio src={url} preload="auto" controls></audio>;
}

export default Audio;
