import React from 'react';
import style from './MainPage.module.scss';
import banner from '../../../images/closeup-of-colorful-gift-boxes-in-a-trolley_1-removebg-preview 1.png';
import BoardPage from '../BoardPage';

const MainPage = () => (
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

export default MainPage;
