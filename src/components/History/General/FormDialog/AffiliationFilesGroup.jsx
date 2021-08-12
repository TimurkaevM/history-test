import Audio from './AffiliationFiles/Audio';
import Document from './AffiliationFiles/Document';
import Image from './AffiliationFiles/Image';
import Video from './AffiliationFiles/Video';

import style from './style.module.css';

function AffiliationFileGroups(props) {
  if (props.type === 'image') {
    return (
      <div className={style.group}>
        {props.content.file.map((item) => {
          return <Image item={item} />;
        })}
      </div>
    );
  }

  if (props.type === 'video') {
    return (
      <div className={style.group}>
        {props.content.file.map((item) => {
          return <Video item={item} />;
        })}
      </div>
    );
  }

  if (props.type === 'audio') {
    return (
      <div className={style.group}>
        {props.content.file.map((item) => {
          return <Audio item={item} />;
        })}
      </div>
    );
  }

  if (props.type === 'application') {
    return (
      <div className={style.group}>
        {props.content.file.map((item) => {
          return <Document item={item} />;
        })}
      </div>
    );
  }
}

export default AffiliationFileGroups;
