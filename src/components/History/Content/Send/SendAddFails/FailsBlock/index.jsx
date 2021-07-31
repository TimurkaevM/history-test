import React, { useState } from 'react';
import CloseButton from '../../../../General/buttons/CloseButton/CloseButton';
import ButtonsUploadFails from './ButtonsUploadFails';
import Dialog from '../../../../General/Dialog/index';
import video from '../../../../../../assets/Icons/video.svg';
import doc from '../../../../../../assets/Icons/doc.svg';
import sound from '../../../../../../assets/Icons/sound.svg';
import photo from '../../../../../../assets/Icons/photo.svg';
import FormDialog from '../../SendForms/FormDialog/index'

import style from './style.module.css';
import DialogButtons from '../../../../General/DialogButtons';
import DialogSelectedTags from '../../../../General/DialogSelectedTags';
import SelectedTags from './ButtonsUploadFails/SelectedTags';

function FailsBlock(props) {
  const [ open, setOpen] = useState(false);
  const [ format, setFormat] = useState('');
 
  const [ openFail, setOpenFail] = useState(false);
  const [ openTags, setOpenTags] = useState(false);
  const [ type, setType] = useState(null);

  const body = document.querySelector('body');

  console.log(openTags)

  const handleTagsClose = () => {
    body.style.overflow = 'visible'; 
    setOpenTags(false);
  }

  const handleTagsOpen = (type) => {
    body.style.overflow = 'hidden'; 
    setOpenTags(true);
  }

  const handleTypeClose = () => {
    body.style.overflow = 'visible'; 
    setOpenFail(false);
  }

  const handleTypeOpen = (type) => {
    body.style.overflow = 'hidden'; 
    setOpenFail(true);
    setType(type);
  }

  const handleClose = () => {
    body.style.overflow = 'visible'; 
    setOpen(false);
  }

  const handleOpen = (type) => {
    body.style.overflow = 'hidden'; 
    setOpen(true);
    setFormat(type);
  }


  return (
    <React.Fragment>
      <ul className={`${style.fails__block} ${props.failAdd ? '' : "style.list__active"}`}>
        <li onClick={() => handleOpen("image")} className={style.block__item}>
          <img src={photo} alt="" />
          <p className={style.block__name}>Фото</p>
        </li>
        <li onClick={() => handleOpen("application")} className={style.block__item}>
          <img src={doc} alt="" />
          <p className={style.block__name}>Документы</p>
        </li>
        <li onClick={() => handleOpen("video")} className={style.block__item}>
          <img src={video} alt="" />
          <p className={style.block__name}>Видео</p>
        </li>
        <li onClick={() => handleOpen("audio")} className={style.block__item}>
          <img src={sound} alt="" />
          <p className={style.block__name}>Аудио</p>
        </li>
        <CloseButton handleClick={props.handleClick} width="35px" height="35px" top="-18px" right="-18px" />
      </ul>
      <DialogButtons handleClose={handleClose} open={open}>
        <ButtonsUploadFails handleTagsOpen={handleTagsOpen} handleTypeOpen={handleTypeOpen} format={format} handleClose={handleClose} />
      </DialogButtons>
      <Dialog handleClose={handleTypeClose} open={openFail}>
        <FormDialog type={format} content={type} handleClose={handleTypeClose} />
      </Dialog>
      <DialogSelectedTags handleClose={handleTagsClose} open={openTags}>
        <SelectedTags type={format} handleClose={handleTagsClose} handleTypeOpen={handleTypeOpen} />
      </DialogSelectedTags>
    </React.Fragment>
  );
}

export default FailsBlock;
