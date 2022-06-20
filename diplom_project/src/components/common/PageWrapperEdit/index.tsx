import React from 'react';
import { Outlet } from 'react-router-dom';
import GetUserName from '../../../store/Registration/selectors';
import GetSurName from '../../../store/Registration/selectorsSurname';
import style from './PageWrapperEdit.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { clearUserAction } from '../../../store/Registration/actions';

const PageWrapperEdit = () => {
  const name = useSelector(GetUserName);
  const surname = useSelector(GetSurName);
  const dispatch = useDispatch();

  const getInitialState = (str: string, strS: string) => {
    const updateName = str.split(' ');
    const updateSurName = strS.split(' ');
    const initial = `${updateName} ${updateSurName[0][0]}`;
    return initial;
  };
  return (
    <div className={style.declare_wrapper}>
      <div className={style.block}>
        <div className={style.block_name}>
          <div className={style.block_avatar}>{getInitialState(name[0], surname[0])}</div>
          <div>
            <h3>{getInitialState(name, surname)}</h3>
            <span>Админ-меню</span>
          </div>
        </div>
        <div className={style.block_declare}>
          <div className={style.line_left} />
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.66675 2.5H6.66675C7.5508 2.5 8.39865 2.85119 9.02377 3.47631C9.64889 4.10143 10.0001 4.94928 10.0001 5.83333V17.5C10.0001 16.837 9.73669 16.2011 9.26785 15.7322C8.79901 15.2634 8.16312 15 7.50008 15H1.66675V2.5Z"
              stroke="#4877F2"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.3333 2.5H13.3333C12.4493 2.5 11.6014 2.85119 10.9763 3.47631C10.3512 4.10143 10 4.94928 10 5.83333V17.5C10 16.837 10.2634 16.2011 10.7322 15.7322C11.2011 15.2634 11.837 15 12.5 15H18.3333V2.5Z"
              stroke="#4877F2"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span>Обьявления</span>
        </div>
        <button
          type="button"
          className={style.block_exit}
          onClick={() => dispatch(clearUserAction())}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 10.8333V15.8333C15 16.2754 14.8244 16.6993 14.5118 17.0118C14.1993 17.3244 13.7754 17.5 13.3333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V6.66667C2.5 6.22464 2.67559 5.80072 2.98816 5.48816C3.30072 5.17559 3.72464 5 4.16667 5H9.16667"
              stroke="#2A2F37"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.5 2.5H17.5V7.5"
              stroke="#2A2F37"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.33325 11.6667L17.4999 2.5"
              stroke="#2A2F37"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span>Выход</span>
        </button>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PageWrapperEdit;
