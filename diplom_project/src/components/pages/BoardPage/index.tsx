/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import style from './BoardPage.module.scss';
import MenuMain from './../../common/MenuMain/index';
import Card from '../../common/card';
import { data } from './../../../helpers/index';

const BoardPage = () => {
  const menuItems = [
    { value: 'Вся доска', href: '/board' },
    { value: 'Автомобили', href: '/auto' },
    { value: 'Аксессуары', href: '/accessory' },
    { value: 'Мебель', href: '/furniture' },
    { value: 'Одежда', href: '/clothes' },
    { value: 'Спорт', href: '/sport' },
    { value: 'Техника', href: '/technic' },
    { value: 'Товары для дома', href: '/Productshome' },
  ];

  // const { href } = useParams();
  // const menuHref = menuItems.find((el) => el.href === href)!;

  const pageNum = 1;
  const [index, setIndex] = useState(0);
  const [visibleData, setVisibleData] = useState([{}]);

  // const checkActive = (match: any, location: any) => {
  //   if (!location) return false;
  //   const { href } = location;
  //   const { url } = match;
  //   return href === url;
  // };

  useEffect(() => {
    const numberItems = pageNum * (index + 1);
    const newArray = [];
    for (let i = 0; i < data.length; i++) {
      if (i < numberItems) {
        newArray.push(data[i]);
      }
      setVisibleData(newArray);
    }
  }, [index]);

  return (
    <div className={style.top_container}>
      <div className={style.container_list}>
        <div className={style.wrapper_menu}>
          <div className={style.container_menu}>
            <MenuMain menuItems={menuItems} />
          </div>
          <h1 className={style.menu_h1}>Вся лента</h1>
        </div>
        <div className={style.items_card}>
          {visibleData.map(() => (
            <Card card={data} />
          ))}
        </div>
        <button type="submit" className={style.button_board} onClick={() => setIndex(index + 1)}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.3333 0.666656L13.9999 3.33332L11.3333 5.99999"
              stroke="#4877F2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 7.33334V6.00001C2 5.29277 2.28095 4.61449 2.78105 4.11439C3.28115 3.61429 3.95942 3.33334 4.66667 3.33334H14"
              stroke="#4877F2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.66667 15.3333L2 12.6667L4.66667 10"
              stroke="#4877F2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 8.66666V9.99999C14 10.7072 13.719 11.3855 13.219 11.8856C12.7189 12.3857 12.0406 12.6667 11.3333 12.6667H2"
              stroke="#4877F2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Загрузить еще
        </button>
      </div>
    </div>
  );
};

export default BoardPage;
