import React, { Dispatch, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../Button';
import style from './Menu.module.scss';

type MenuPropsType = {
  items: { value: string; href: string }[];
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
};

const Menu = ({ items, active, setActive }: MenuPropsType) => (
  <div
    className={active ? style.menuActive : style.menu}
    onClick={() => setActive(false)}
    role="button"
    tabIndex={0}>
    <div className={style.menu__content}>
      <button className={style.menu_button} type="button">
        Подать обьявление
      </button>
      <ul>
        {items.map((item) => (
          <li className={style.menu_li}>
            <NavLink to={item.href} className={style.link_menu} key={item.href}>
              {item.value}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Menu;
