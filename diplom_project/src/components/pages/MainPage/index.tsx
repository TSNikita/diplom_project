import React from 'react';
import style from './MainPage.module.scss';
import banner from '../../../images/closeup-of-colorful-gift-boxes-in-a-trolley_1-removebg-preview 1.png';
import MenuMain from '../../common/MenuMain';
import Card from '../../common/card';
import stir from '../../../images/Rectangle 212.png';
import cap from '../../../images/Rectangle 220.png';
import hoody from '../../../images/Rectangle 367.png';
import bike from '../../../images/Rectangle 352.png';
import { data } from '../../../helpers';
import BoardPage from '../BoardPage';

const MainPage = () => {
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

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.container_info}>
          <h1 className={style.container_title}>Доска Обьявлений</h1>
          <span className={style.container_text}>
            Находи тысячи разнообразных товаров и услуг <br /> от продавцов со всей страны. <br />{' '}
            Безопасные расчеты. Удобный сервис доставки
          </span>
        </div>
        <div className={style.block_images}>
          <div className={style.elips_left} />
          <div className={style.elips_right} />
          <img className={style.container_image} src={banner} alt="banner" />
        </div>
      </div>
      <BoardPage />
    </div>
  );
};

export default MainPage;
