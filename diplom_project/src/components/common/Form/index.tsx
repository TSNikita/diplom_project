import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Form.module.scss';

type FormPropsType = {
  title: string;
  children: React.ReactNode;
};

const Form: React.FC<FormPropsType> = ({ title, children }) => (
  <div className={style.form_wrapper}>
    <div className={style.form}>
      <h1 className={style.form_title}>Hello, world!</h1>
      <p className={style.form_text}>{title}</p>
      <div className={style.navigate}>
        <NavLink
          to="/reg"
          className={({ isActive }) => (isActive ? style.active_link : style.not_active_link)}>
          <div className={style.navigate_reg}>Регистрация</div>
        </NavLink>
        <NavLink
          to="/auth"
          className={({ isActive }) => (isActive ? style.active_link : style.not_active_link)}>
          <div className={style.navigate_auth}>Авторизация</div>
        </NavLink>
      </div>
      <form className={style.form_body}>{children}</form>
    </div>
  </div>
);
export default Form;
