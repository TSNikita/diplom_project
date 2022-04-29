import React from 'react';
import style from './Header.module.scss';
import Logo from '../../../images/Logo.png';
import SearchInput from '../SearchInput';
import User from '../../../images/user.png';
import Button from '../Button';

const Header = () => (
  <header className={style.header}>
    <img src={Logo} alt="logo" className={style.logo_style} />
    <SearchInput />
    <Button title="Подать обьявление" onClick={console.log} />
    <div className={style.user}>
      <img src={User} alt="User" />
      <span>Войти</span>
    </div>
  </header>
);

export default Header;
