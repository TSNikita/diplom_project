import React, { ChangeEvent } from 'react';
import style from './Input.module.scss';

type InputPropsType = {
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
  type?: 'text' | 'password';
  validation?: () => void;
};

const Input = ({ id, placeholder, value, setValue, type = 'text', validation }: InputPropsType) => {
  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({ ...prev, value: event.target.value }));
  };

  return (
    <div>
      <label htmlFor={id}>
        <input
          className={`${value.error ? style.error : style.input}`}
          id={id}
          placeholder={placeholder}
          onChange={handler}
          value={value.value}
          type={type}
          onBlur={validation}
        />
      </label>
    </div>
  );
};
export default Input;
