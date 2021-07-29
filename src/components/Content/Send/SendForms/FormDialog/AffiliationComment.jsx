import { useDispatch, useSelector } from 'react-redux';
import { changeCommentTag } from '../../../../../redux/ducks/files';

import style from './style.module.css';

function AffiliationComment(props) {
  const dispatch = useDispatch()

  const tag = useSelector(state => state.files.tag);

  const handleChangeComment = (e) => {
    dispatch(changeCommentTag(e.target.value));
  }

  return (
    <div className={style.comment}>
      <div className={style.comment__title}>
        Комментарий к файлу
      </div>
      <textarea value={tag.comment} onChange={handleChangeComment} className={style.comment__text} name="comment" id="comment" rows="7"></textarea>
    </div>
  )
}

export default AffiliationComment
