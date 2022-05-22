import React, { ChangeEvent, useState } from 'react';
import Eyeicon from './Eyeicon';
import style from './PasswordInput.module.scss';

type PasswordInputPropsType = {
  placeholder: string;
  id: string;
  value: {
    value: string;
    error: boolean;
  };
  setValue: React.Dispatch<
    React.SetStateAction<{
      value: string;
      error: boolean;
    }>
  >;
  validation?: () => boolean;
};

const PasswordInput = ({
  placeholder,
  id,
  value,
  setValue,
  validation,
}: PasswordInputPropsType) => {
  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({ ...prev, value: event.target.value }));
  };
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <label className={style.label} htmlFor={id}>
      <input
        id={id}
        className={`${value.error ? style.error : style.input}`}
        placeholder={placeholder}
        onChange={handler}
        onBlur={validation}
        value={value.value}
        type={passwordVisible ? 'text' : 'password'}
      />
      <button
        className={style.button}
        type="button"
        onClick={() => setPasswordVisible((prev) => !prev)}>
        <Eyeicon visible={passwordVisible} />
      </button>
    </label>
  );
};

export default PasswordInput;
