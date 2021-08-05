import React, { useState } from 'react';
import ListItemDocument from './ListItemDocument';
import ListItemImage from './ListItemImage';
import ListItemVideo from './ListItemVideo';
import ListItemAudio from './ListItemAudio';
import Dialog from '../../../../General/Dialog'

import style from './style.module.css';
import DialogDeleteFail from './DialogDeleteFail';

function FailsList(props) {
  const [open, setOpen] = useState({
    open: false,
    id: "",
    format: "",
    amount: "",
    groupId: "",
  });

  const handleOpen = (id, format, amount, groupId) => {
    setOpen({
      open: true,
      id,
      format,
      amount,
      groupId,
    })
  }

  const handleClose = () => {
    setOpen({
      open: false,
      id: "",
      format: "",
      amount: "",
      groupId: "",
    })
  }

  return (
    <React.Fragment>
      <ul className={`${style.fails__list} ${props.failAdd ? '' : ''}`}>
      {props.image.length === 0 && props.images.length === 0 ?
        null : <ListItemImage handleDeleteFail={handleOpen} image={props.image} images={props.images} />
      }
      {props.application.length === 0 && props.applications.length === 0 ?
        null : <ListItemDocument handleDeleteFail={handleOpen} application={props.application} applications={props.applications} />
      }
      {props.video.length === 0 && props.videos.length === 0 ?
        null : <ListItemVideo handleDeleteFail={handleOpen} video={props.video} videos={props.videos} />
      }
      {props.audio.length === 0 && props.audios.length === 0 ?
        null : <ListItemAudio handleDeleteFail={handleOpen} audio={props.audio} audios={props.audios} />
      }
    </ul>
    <Dialog handleClose={handleClose} open={open.open}>
      <DialogDeleteFail  handleClose={handleClose} open={open} />
    </Dialog>
    </React.Fragment>
  );
}

export default FailsList;
