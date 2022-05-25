import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './CardDeclare.module.scss';

type CardDeclarePropsType = {
  items: {
    name: string | undefined;
    categori: string | undefined;
    href: string;
    data: string | undefined;
    publ: string | undefined;
    id?: string | undefined;
  }[];
};

const CardDeclare = ({ items }: CardDeclarePropsType) => (
  <div>
    <ul className={style.card_ul}>
      {items.map((item) => (
        <li className={style.card_li}>
          <NavLink to={item.href} className={style.card_wrapper}>
            <div className={style.div}>
              <div className={style.card_name}>{item.name}</div>
              <div className={style.card_categori}>{item.categori}</div>
              <div className={style.card_data}>{item.data}</div>
              <div className={style.card_publ}>{item.publ}</div>
            </div>
            <div className={style.elips_wrapper}>
              <div className={style.elips_block} />
              <div className={style.elips_block} />
              <div className={style.elips_block} />
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default CardDeclare;
