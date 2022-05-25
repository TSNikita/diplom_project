import React from 'react';
import 'antd/dist/antd.css';
import style from './DeclarePage.module.scss';
import { Pagination, Checkbox } from 'antd';
import CardDeclare from '../../common/CardDeclare';

import type { CheckboxChangeEvent } from 'antd/es/checkbox';

const DeclarePage = () => {
  const itemsCard = [
    { name: 'Чепчик', href: '/chepchik', categori: 'Одежда', data: '12 апреля 2022', publ: 'да' },
    {
      name: 'Самовар',
      href: '/samovar',
      categori: 'Товары для дома',
      data: '12 апреля 2022',
      publ: 'да',
    },
    {
      name: 'Стиральная машина LG',
      href: '/stiravto',
      categori: 'Техника',
      data: '11 апреля 2022',
      publ: 'да',
    },
    {
      name: 'Часы Rolex',
      href: '/watch',
      categori: 'Аксессуары',
      data: '10 апреля 2022',
      publ: 'да',
    },
    {
      name: 'Lada Kalina',
      href: '/kalina',
      categori: 'Автомобили',
      data: '9 апреля 2022',
      publ: 'да',
    },
    {
      name: 'Спортивный велосипед',
      href: '/sportvel',
      categori: 'Спорт',
      data: '9 апреля 2022',
      publ: 'да',
    },
    {
      name: 'Ботинки поношенные',
      href: '/by',
      categori: 'Одежда',
      data: '9 апреля 2022',
      publ: 'да',
    },
    {
      name: 'Приставка Dendy',
      href: '/dendy',
      categori: 'Техника',
      data: '8 апреля 2022',
      publ: 'да',
    },
  ];
  return (
    <div className={style.declare_wrapper}>
      <div className={style.block}>
        <div className={style.block_name}>
          <div className={style.block_avatar} />
          <div>
            <h3>Super admin</h3>
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
        <button type="button" className={style.block_exit}>
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
      <div className={style.block_right}>
        <div className={style.declare_info}>
          <div className={style.declare_text}>
            <h1>Объявления</h1>
            <span>Всего: 45</span>
          </div>
          <button type="submit" className={style.declare_count}>
            Добавить
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 4.1665V15.8332"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.16675 10H15.8334"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className={style.declare_filter}>
          <div className={style.declare_search}>
            <input type="text" placeholder="Найти объявление" />
            <button type="submit" className={style.button_filter}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="#2C2D2E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.0001 20.9999L16.6501 16.6499"
                  stroke="#2C2D2E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <button type="button" className={style.filter_button}>
            <div className={style.filter_wrapper}>
              <span className={style.filter_span}>Фильтровать</span>
              <div className={style.filter_svg}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.19995 12L16.7999 12"
                    stroke="#2C2D2E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.6001 6L20.4001 6"
                    stroke="#2C2D2E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.8 18L13.2001 18"
                    stroke="#2C2D2E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className={style.check_menu}>
              <div className={style.check_cat}>
                <h3 className={style.check_cat_title}>Категория</h3>
                <div className={style.cat_check}>
                  <Checkbox />
                  <span className={style.check_span}>Автомобили</span>
                </div>
                <div className={style.cat_check}>
                  <Checkbox />
                  <span className={style.check_span}>Аксессуары</span>
                </div>
                <div className={style.cat_check}>
                  <Checkbox />
                  <span className={style.check_span}>Одежда</span>
                </div>
                <div className={style.cat_check}>
                  <Checkbox />
                  <span className={style.check_span}>Мебель</span>
                </div>
                <div className={style.cat_check}>
                  <Checkbox />
                  <span className={style.check_span}>Спорт</span>
                </div>
                <div className={style.cat_check}>
                  <Checkbox />
                  <span className={style.check_span}>Техника</span>
                </div>
                <div className={style.cat_check}>
                  <Checkbox />
                  <span className={style.check_span}>Товары для дома</span>
                </div>
                <div className={style.check_menu_button}>
                  <button className={style.button_blue} type="submit">
                    Применить
                  </button>
                  <button className={style.button_white} type="submit">
                    Сбросить
                  </button>
                </div>
              </div>
              <div className={style.check_cat}>
                <h3>Опубликовано</h3>
                <div className={style.cat_check}>
                  <Checkbox />
                  <span className={style.check_span}>Да</span>
                </div>
                <div className={style.cat_check}>
                  <Checkbox />
                  <span className={style.check_span}>Нет</span>
                </div>
              </div>
            </div>
          </button>

          <div className={style.pagination}>
            <Pagination size="small" total={50} />
          </div>
        </div>
        <div className={style.declare_container}>
          <div className={style.declare_header}>
            <p className={style.style_p}>
              Название объявления
              <div className={style.filter_svg}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.4">
                    <path d="M12 7L16 11H8L12 7Z" fill="#2C2D2E" />
                    <path d="M12 17L8 13L16 13L12 17Z" fill="#2C2D2E" />
                  </g>
                </svg>
              </div>
            </p>
            <p>Категория</p>
            <p className={style.filter_data}>Дата публикации</p>
            <p className={style.filter_publ}>Публикация</p>
          </div>
          <CardDeclare items={itemsCard} />
        </div>
      </div>
    </div>
  );
};

export default DeclarePage;
