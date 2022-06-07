/* eslint-disable no-useless-escape */
/* eslint-disable operator-linebreak */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ButtonForm from '../../common/ButtonForm';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import PasswordInput from '../../common/Form/Input/PasswordInput';
import style from './AuthPage.module.scss';
import { setUserNameAction, setEmailAction } from '../../../store/Registration/actions';

const AuthPage = () => {
  const [email, setEmail] = useState({ value: '', error: false });
  const [password, setPassword] = useState({ value: '', error: false });
  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch(setEmailAction(email.value));
  };

  const emailValidation = () => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.value === '' || re.test(email.value)) {
      setEmail((prev) => ({ ...prev, error: false }));
      return false;
    }
    setEmail((prev) => ({ ...prev, error: true }));
    return true;
  };

  return (
    <div>
      <Form title="Пройдите авторизацию">
        <Input
          id="id"
          placeholder="Email"
          value={email}
          setValue={setEmail}
          type="text"
          validation={emailValidation}
        />
        <PasswordInput id="password" placeholder="Пароль" value={password} setValue={setPassword} />
        <ButtonForm onClick={submitHandler} title="Войти" />
      </Form>
    </div>
  );
};
export default AuthPage;
