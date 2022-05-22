import React, { useState } from 'react';
import style from './Burger.module.scss';

type BurgerPropsType = {
  onClick: () => void;
};

const Burger = ({ onClick }: BurgerPropsType) => (
  <nav>
    <div className={style.burger_btn} onClick={onClick} role="button" tabIndex={0}>
      <span />
    </div>
  </nav>
);

export default Burger;
