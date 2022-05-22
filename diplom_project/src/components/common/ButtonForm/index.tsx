import React from 'react';
import style from './ButtonForm.module.scss';

type ButtonPropsType = {
  title: string;
  disabled: boolean;
  onClick: () => void;
};

const ButtonForm = ({ title, onClick, disabled }: ButtonPropsType) => (
  <button className={style.buttonForm} type="button" onClick={onClick} disabled={disabled}>
    {title}
  </button>
);
export default ButtonForm;
