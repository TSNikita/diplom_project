import React, { useState } from 'react';
import style from './Header.module.scss';
import Logo from '../../../images/Logo.png';
import SearchInput from '../SearchInput';
import Button from '../Button';
import { useSelector, useDispatch } from 'react-redux';
import '../../../assets/style/main.scss';
import '@fontsource/jost';
import { Link, NavLink } from 'react-router-dom';

import GetSurName from '../../../store/Registration/selectorsSurname';
import GetEmail from '../../../store/Registration/selectorEmail';
import { clearUserAction, setEmailAction } from '../../../store/Registration/actions';
import GetUserName from './../../../store/Registration/selectors';

const Header = () => {
  const dispatch = useDispatch();
  const name = useSelector(GetUserName);
  const surname = useSelector(GetSurName);
  const email = useSelector(GetEmail);

  const getInitialState = (str: string, strS: string) => {
    const updateName = str.split(' ');
    const updateSurName = strS.split(' ');
    const initial = updateName[0][0] + updateSurName[0][0];
    return initial;
  };
  return (
    <div className={style.block_header}>
      <header style={{ fontFamily: 'Jost' }} className={style.header}>
        <img src={Logo} alt="logo" className={style.logo_style} />
        <SearchInput />
        <Button title="Подать обьявление" onClick={console.log} />
        <div className={style.user}>
          <Link to="/reg">
            {name ? (
              <span className={style.span_hover}>
                <svg
                  className={style.svg_menu}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.4">
                    <path
                      d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                      stroke="#2A2F37"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                      stroke="#2A2F37"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
                <span className={style.profile_span}>Профиль</span>
                <div className={style.menu_hover}>
                  <div className={style.menu_header}>
                    <div className={style.avatar}>{getInitialState(name, surname)}</div>
                    <h3>
                      {name}.{surname[0]}
                    </h3>
                  </div>
                  <ul>
                    <li className={style.menu_hover_li}>
                      <NavLink to="declare" className={style.menu_top}>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1.66675 2.5H6.66675C7.5508 2.5 8.39865 2.85119 9.02377 3.47631C9.64889 4.10143 10.0001 4.94928 10.0001 5.83333V17.5C10.0001 16.837 9.73669 16.2011 9.26785 15.7322C8.79901 15.2634 8.16312 15 7.50008 15H1.66675V2.5Z"
                            stroke="#2C2D2E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M18.3333 2.5H13.3333C12.4493 2.5 11.6014 2.85119 10.9763 3.47631C10.3512 4.10143 10 4.94928 10 5.83333V17.5C10 16.837 10.2634 16.2011 10.7322 15.7322C11.2011 15.2634 11.837 15 12.5 15H18.3333V2.5Z"
                            stroke="#2C2D2E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span> Мои обьявления</span>
                      </NavLink>
                    </li>

                    <li className={style.menu_hover_li}>
                      <NavLink to="/" className={style.menu_center}>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M8.33333 2.5H2.5V8.33333H8.33333V2.5Z"
                            stroke="#2A2F37"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M17.5001 2.5H11.6667V8.33333H17.5001V2.5Z"
                            stroke="#2A2F37"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M17.5001 11.667H11.6667V17.5003H17.5001V11.667Z"
                            stroke="#2A2F37"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.33333 11.667H2.5V17.5003H8.33333V11.667Z"
                            stroke="#2A2F37"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>Админ Панель</span>
                      </NavLink>
                    </li>
                    <li className={style.menu_hover_li}>
                      <button
                        type="button"
                        className={style.button_menu}
                        onClick={() => dispatch(clearUserAction())}>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M15 10.8333V15.8333C15 16.2754 14.8244 16.6993 14.5118 17.0118C14.1993 17.3244 13.7754 17.5 13.3333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V6.66667C2.5 6.22464 2.67559 5.80072 2.98816 5.48816C3.30072 5.17559 3.72464 5 4.16667 5H9.16667"
                            stroke="#2C2D2E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.5 2.5H17.5V7.5"
                            stroke="#2C2D2E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.33325 11.6667L17.4999 2.5"
                            stroke="#2C2D2E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>Выход</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </span>
            ) : (
              <div className={style.user_header}>
                <svg
                  className={style.svg_menu_top}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.4">
                    <path
                      d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                      stroke="#2A2F37"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                      stroke="#2A2F37"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
                <svg
                  className={style.block_user}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.4">
                    <path
                      d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
                      stroke="#2A2F37"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
                      stroke="#2A2F37"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="12"
                      y1="15"
                      x2="12"
                      y2="18"
                      stroke="#2A2F37"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
                <button type="button" className={style.text_button}>
                  Войти
                </button>
              </div>
            )}
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
