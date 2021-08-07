import React, { useEffect } from 'react';
import Contacts from './Contacts';
import Chat from './Chat';
import { loadApplicaton } from '../../../../redux/ducks/application';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import StartPage from './Chat/StartPage';

import styles from './style.module.css';

function Messenger() {
  const dispatch = useDispatch();
  const darkTheme = useSelector((state) => state.application.darkTheme);

  useEffect(() => {
    dispatch(loadApplicaton());
  }, [dispatch]);

  return (
    <div
      className={darkTheme ? styles['container-dark'] : styles['container']}
      name={darkTheme ? styles['dark'] : null}
    >
    <Switch>
      <Route exact path={'/history/chat/:id?'}>
        <Contacts />
        <div className={styles['chat_profile_block']}>
          <Chat />
        </div>
      </Route>
      <Route>
        <Contacts />
        <StartPage />
      </Route>
    </Switch>
  </div>  
  )
}

export default Messenger;
