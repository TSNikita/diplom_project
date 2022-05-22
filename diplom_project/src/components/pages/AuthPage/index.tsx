import React, { useState } from 'react';
import ButtonForm from '../../common/ButtonForm';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import PasswordInput from '../../common/Form/Input/PasswordInput';
import style from './AuthPage.module.scss';

const AuthPage = () => {
  const [email, setEmail] = useState({ value: '', error: false });
  const [password, setPassword] = useState({ value: '', error: false });

  const validation = () => {
    console.log('auto');
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
          validation={validation}
        />
        <PasswordInput id="password" placeholder="Пароль" value={password} setValue={setPassword} />
        <ButtonForm disabled={false} onClick={() => console.log('oe')} title="Войти" />
      </Form>
    </div>
  );
};
export default AuthPage;
