import video from '../../../../../../assets/Icons/video.svg';

import style from './style.module.css';
import Video from './Video';

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
              return <Video amount="one" handleDeleteFail={props.handleDeleteFail} key={item.id} video={item}/>
            })
          )}
          {!props.videos.length ? null : (
            
            props.videos.map(video => {
            
              return <div key={video.id} className={style.images__group}>
                {video.file.map(item => {
                  return <Video groupId = {video.id} amount="group" handleDeleteFail={props.handleDeleteFail} key={item.id} video={item}/>
                })}
              </div>
            })
          )}
      </div>
    </li>
  );
}

export default ListItemVideo;
