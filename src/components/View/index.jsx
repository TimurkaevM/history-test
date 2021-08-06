import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Auth from '../Auth';
import Registration from '../Registration';

import style from './style.module.css';

function index() {
  return (
    <div className={style.view}>
      <div className={style.view__container}>
        <div className={style.view__header}>
          <NavLink activeClassName={style.view__active} className={style.view__link} to='/auth'>Авторизация</NavLink>
          <NavLink activeClassName={style.view__active} className={style.view__link} to='/register'>Регистрация</NavLink>
        </div>
        <div className={style.view__routes}>
          <Route exact path="/auth" component={Auth} />
          <Route path="/register" component={Registration} />
        </div>
      </div>
    </div>
  )
}

export default index;
