import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registration, ChangeError } from '../../redux/ducks/user';

import style from './style.module.css'


function Registration() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');

  const emailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
    dispatch(ChangeError());
  };
  const nameChange = (e) => {
    setName(e.target.value);
    setNameError('');
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleClick = (e) => {
    e.preventDefault();
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const letters = /^[А-Яа-яёЁ]+$/;

    if (error !== null) {
      setEmailError(error);
      dispatch(ChangeError());
    }
    if (!name) {
      return setNameError('Не может быть пустым');
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
    if (email && password && name) {
      dispatch(registration(name, email, password));
    }
  };

  return (
    <div className={style.registr}>
      <label htmlFor="username">Имя</label>
      <input placeholder="name" type="name" name="name" value={name} onChange={nameChange} />
      <label htmlFor="email">Email</label>
      <input placeholder="email" type="email" name="email" value={email} onChange={emailChange} />
      <label htmlFor="password">Пароль</label>
      <input type="password" name={password} value={password} onChange={passwordChange} />
      <button disabled={loading} onClick={handleClick}>Регистрация</button>
    </div>
  );
}

export default Registration;
