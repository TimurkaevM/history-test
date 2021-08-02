import History from '../History/index';  
import { useEffect } from 'react';
import Auth from '../Auth';
import View from '../View/index';
import Registration from '../Registration/index';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import style from './style.module.css'

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(auth());
  //   dispatch(fetchImages());
  //   dispatch(fetchTickets());
  // }, [dispatch]);

  let routes;

  if (!isAuth) {
    routes = (
      <Switch>
        <Route path="/history" component={History} />
        <Redirect to="/history" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" component={View} />
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <div className={style.app}>
      {routes}
    </div>
  );
}

export default App;
