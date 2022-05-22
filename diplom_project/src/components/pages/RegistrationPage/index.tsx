import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ButtonForm from '../../common/ButtonForm';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import PasswordInput from '../../common/Form/Input/PasswordInput';
import style from './RegistrationPage.module.scss';
import { setSurNameAction, setUserNameAction } from '../../../store/Registration/actions';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState({ value: '', error: false });
  const [surname, setSurName] = useState({ value: '', error: false });
  const [email, setEmail] = useState({ value: '', error: false });
  const [password, setPassword] = useState({ value: '', error: false });
  const [repeatpassword, setRepeatPassword] = useState({ value: '', error: false });
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  // const [error, setError] = useState(false);

  const submitHandler = () => {
    dispatch(setUserNameAction(name.value));
    dispatch(setSurNameAction(surname.value));
  };

  useEffect(() => {
    if ({ error: true }) {
      // setError(false);
      setDisabled(false);
      setChecked(false);
    } else {
      // setError(true);
      setDisabled(true);
    }
  }, []);

  const nameValidation = () => {
    if (name.value === '') {
      setName((prev) => ({ ...prev, error: true }));
      // setError(false);
      setDisabled(false);
      return false;
    }
    setName((prev) => ({ ...prev, error: false }));
    // setError(true);
    // setDisabled(true);
    return true;
  };

  const surnameValidation = () => {
    if (surname.value === '') {
      setSurName((prev) => ({ ...prev, error: true }));
      // setError(false);
      setDisabled(false);
      return false;
    }
    setSurName((prev) => ({ ...prev, error: false }));
    // setError(true);
    // setDisabled(true);
    return true;
  };

  const emailValidation = () => {
    if (email.value === '') {
      setEmail((prev) => ({ ...prev, error: true }));
      // setError(true);
      setDisabled(false);
      return false;
    }
    setEmail((prev) => ({ ...prev, error: false }));
    // setError(false);
    // setDisabled(true);
    return true;
  };

  const validation = () => {
    if (!repeatpassword.value.length || !password.value.length) {
      setPassword((prev) => ({ ...prev, error: true }));
      setRepeatPassword((prev) => ({ ...prev, error: true }));
      // setDisabled(false);
      return false;
    }
    if (repeatpassword.value !== password.value) {
      setPassword((prev) => ({ ...prev, error: true }));
      setRepeatPassword((prev) => ({ ...prev, error: true }));
      // setDisabled(false);
      return false;
    }
    setPassword((prev) => ({ ...prev, error: false }));
    setRepeatPassword((prev) => ({ ...prev, error: false }));
    // setError(true);
    setDisabled(true);
    return true;
  };

  return (
    <Form title="Создайте аккаунт">
      <Input
        id="name"
        placeholder="Имя"
        value={name}
        setValue={setName}
        type="text"
        validation={nameValidation}
      />
      <Input
        id="surname"
        placeholder="Фамилия"
        value={surname}
        setValue={setSurName}
        type="text"
        validation={surnameValidation}
      />
      <Input
        id="email"
        placeholder="Email"
        value={email}
        setValue={setEmail}
        type="text"
        validation={emailValidation}
      />

      <PasswordInput
        id="password"
        placeholder="Пароль"
        value={password}
        setValue={setPassword}
        validation={validation}
      />

      <PasswordInput
        id="repeatpassword"
        placeholder="Повторите пароль"
        value={repeatpassword}
        setValue={setRepeatPassword}
        validation={validation}
      />

      <label className={style.check} htmlFor="id">
        <input
          className={style.check_checkbox}
          // value={check}
          // setValue={setCheck}
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          id="id"
        />
        <span className={style.check_fake} />
        <span className={style.check_text}>
          Принимаю условия <a href="!#">Пользовательского соглашения</a>
        </span>
      </label>
      <ButtonForm onClick={submitHandler} disabled={!disabled} title="Создать аккаунт" />
    </Form>
  );
};

export default RegistrationPage;