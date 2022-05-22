import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Burger from '../Burger';
import Menu from '../Burger/Menu';
import Footer from '../Footer';
import Header from '../Header';
import style from './PageWrapper.module.scss';

const PageWrapper = () => {
  const [menuActive, setMenuActive] = useState(false);
  // const [open, setOpen] = useState(true);
  const items = [
    { value: 'Вся лента', href: '/home' },
    { value: 'Автомобили', href: '/avto' },
    { value: 'Аксессуары', href: '/accessory' },
    { value: 'Мебель', href: '/furniture' },
    { value: 'Одежда', href: '/clothes' },
    { value: 'Cпорт', href: '/sport' },
    { value: 'Техника', href: '/technic' },
    { value: 'Товары для дома', href: '/Goods' },
  ];
  return (
    <div className={style.page_wrapper}>
      <Header />
      <div className={style.content_wrapper}>
        <main className={style.content}>
          <Outlet />
          <Burger
            onClick={() => setMenuActive(!menuActive)}
            // openBurger={open}
            // setOpenBurger={setOpen}
          />
          <Menu active={menuActive} setActive={setMenuActive} items={items} />
        </main>
      </div>
      <Footer />
    </div>
  );
};
export default PageWrapper;
