
import ContributionSidebar from './ContributionSidebar';
import ContributionRoutes from './ContributionRoutes';

import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAudio, getDocument, getMaterial, getPhoto, getVideo } from '../../../../redux/ducks/contribution';

import style from './style.module.css';


function Contribution() {
  const dispatch = useDispatch();

  const token = localStorage.getItem('token');
  const decode = jwt_decode(token);

  useEffect(() => {
    dispatch(getMaterial());
    dispatch(getPhoto());
    dispatch(getAudio());
    dispatch(getDocument());
    dispatch(getVideo());
  }, [dispatch]);

  return (
    <div className={style.contribution}>
      <ContributionSidebar />
      <ContributionRoutes />
    </div>
  );
}

export default Contribution;
