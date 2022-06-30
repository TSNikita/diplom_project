import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './MenuMain.module.scss';

type MenuMainPropsType = {
  menuItems: { value: string; href: string }[];
};

const MenuMain = ({ menuItems }: MenuMainPropsType) => (
  <div className={style.main_wrapper}>
    {menuItems.map((item) => (
      <nav>
        <NavLink to={item?.href} className={style.link_style}>
          {item?.value}
        </NavLink>
      </nav>
    ))}
  </div>
);

export default MenuMain;
