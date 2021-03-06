import React, { useState } from 'react';
import ButtonsUploadFails from './ButtonsUploadFails';
import Dialog from '../../../../General/Dialog/index';
import video from '../../../../../../assets/Icons/video.svg';
import doc from '../../../../../../assets/Icons/doc.svg';
import sound from '../../../../../../assets/Icons/sound.svg';
import photo from '../../../../../../assets/Icons/photo.svg';
import FormDialog from '../../../../General/FormDialog';
import DialogButtons from '../../../../General/DialogButtons';
import DialogSelectedTags from '../../../../General/DialogSelectedTags';
import SelectedTags from './ButtonsUploadFails/SelectedTags';

import style from './style.module.css';

function FailsBlock(props) {
  const [open, setOpen] = useState(false);
  const [format, setFormat] = useState('');
  const [openFail, setOpenFail] = useState(false);
  const [openTags, setOpenTags] = useState(false);
  const [type, setType] = useState(null);
  const [checkInfo, setCheckInfo] = useState(false);
  const [checkTime, setCheckTime] = useState(false);

  const body = document.querySelector('body');

  const changeCheckInfo = () => {
    setCheckInfo(!checkInfo);
  };

  const changeCheckTime = () => {
    setCheckTime(!checkTime);
  };

  const handleTagsClose = () => {
    body.style.overflow = 'visible';
    setOpenTags(false);
  };

  const handleTagsOpen = () => {
    body.style.overflow = 'hidden';
    setOpenTags(true);
  };

  const handleTypeClose = () => {
    body.style.overflow = 'visible';
    setOpenFail(false);
  };

  const handleTypeOpen = (type) => {
    body.style.overflow = 'hidden';
    setOpenFail(true);
    setType(type);
  };

  const handleClose = () => {
    body.style.overflow = 'visible';
    setOpen(false);
  };

  const handleOpen = (type) => {
    body.style.overflow = 'hidden';
    setOpen(true);
    setFormat(type);
  };

  return (
    <React.Fragment>
      <ul
        className={`${style.fails__block} ${
          props.failAdd ? '' : 'style.list__active'
        }`}
      >
        <li onClick={() => handleOpen('image')} className={style.block__item}>
          <img src={photo} alt="" />
          <p className={style.block__name}>????????</p>
        </li>
        <li
          onClick={() => handleOpen('application')}
          className={style.block__item}
        >
          <img src={doc} alt="" />
          <p className={style.block__name}>??????????????????</p>
        </li>
        <li onClick={() => handleOpen('video')} className={style.block__item}>
          <img src={video} alt="" />
          <p className={style.block__name}>??????????</p>
        </li>
        <li onClick={() => handleOpen('audio')} className={style.block__item}>
          <img src={sound} alt="" />
          <p className={style.block__name}>??????????</p>
        </li>
      </ul>
      <DialogButtons handleClose={handleClose} open={open}>
        <ButtonsUploadFails
          handleTagsOpen={handleTagsOpen}
          handleTypeOpen={handleTypeOpen}
          format={format}
          handleClose={handleClose}
        />
      </DialogButtons>
      <Dialog handleClose={handleTypeClose} open={openFail}>
        <FormDialog
          checkInfo={checkInfo}
          checkTime={checkTime}
          type={format}
          content={type}
          handleClose={handleTypeClose}
        />
      </Dialog>
      <DialogSelectedTags handleClose={handleTagsClose} open={openTags}>
        <SelectedTags
          changeCheckInfo={changeCheckInfo}
          changeCheckTime={changeCheckTime}
          checkInfo={checkInfo}
          checkTime={checkTime}
          type={format}
          handleClose={handleTagsClose}
          handleTypeOpen={handleTypeOpen}
          format={format}
        />
      </DialogSelectedTags>
    </React.Fragment>
  );
}

export default FailsBlock;
