import React from 'react';
import style from './Button.module.scss';

type ButtonPropsType = {
  title: string;
  onClick: () => void;
};

const Button = ({ title, onClick }: ButtonPropsType) => (
  <div>
    <button className={style.wrapper} onClick={onClick} type="button">
      {title}
    </button>
  </div>
);

export default Button;
