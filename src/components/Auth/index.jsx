import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, ChangeError } from '../../redux/ducks/user';

import style from './style.module.css'


function Auth() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const emailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
    dispatch(ChangeError());
  };

  const passChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
    dispatch(ChangeError());
  };

  const handleClick = (e) => {
    e.preventDefault();
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const letters = /^[А-Яа-яёЁ]+$/;

    if (error === 'Пользователь не найден') {
      return setEmailError(error);
    }
    if (error === 'Неверный пароль') {
      return setPasswordError(error);
    }
    if (!email) {
      return setEmailError('Не может быть пустым');
    }
    if (!re.test(String(email).toLowerCase())) {
      return setEmailError('Некорректные данные');
    }
    if (!password) {
      return setPasswordError('Не может быть пустым');
    }
    if (password.length < 8) {
      return setPasswordError('минимум 8 символов');
    }
    if (letters.test(String(password).toLowerCase())) {
      return setPasswordError(
        'Можно использовать только Латинские буквы и цифры',
      );
    }
    if (email && password) {
      dispatch(login(email, password));
    }
  };

  return (
    <div className={style.auth}>
      <label for="email">Email</label>
      <input type="email" name="email" value={email} onChange={emailChange} />
      <label for="password">Password</label>
      <input type="password" name={password} value={password} onChange={passChange} />
      <button onClick={handleClick}>Sign up</button>
    </div>
  );
}

export default Auth;
