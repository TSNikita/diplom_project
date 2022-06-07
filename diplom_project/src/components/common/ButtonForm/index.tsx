import React from 'react';
import style from './ButtonForm.module.scss';

type ButtonPropsType = {
  title: string;
  disabled?: boolean;
  onClick: () => void;
  onChange?: () => void;
};

const ButtonForm = ({ title, onClick, disabled, onChange }: ButtonPropsType) => (
  <button
    className={style.buttonForm}
    type="button"
    onChange={onChange}
    onClick={onClick}
    disabled={disabled}>
    {title}
  </button>
);
export default ButtonForm;
