import video from '../../../../../../assets/Icons/video.svg';

import style from './style.module.css';
import Image from './Image';

function ListItemVideo(props) {  

  return (
    <li className={style.list__item}>
      <div className={style.list__header}>
        <img src={video} alt="" />
        <p className={style.list__name}>Видео</p>
      </div>
      <div className={style.list__content}>
        {!props.video.length ? null : (
            props.video.map(item => {
              return <Image video={item}/>
            })
          )}
          {!props.videos.length ? null : (
            
            props.videos.map(video => {
            
              return <div className={style.images__group}>
                {video.files.map(item => {
                  return <Image video={item}/>
                })}
              </div>
            })
          )}
      </div>
    </li>
  );
}

export default ListItemVideo;
