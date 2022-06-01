import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './CardDeclare.module.scss';

type CardDeclarePropsType = {
  items: {
    name: string | undefined;
    value: string | undefined;
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
              <div className={style.card_categori}>{item.value}</div>
              <div className={style.card_data}>{item.data}</div>
              <div className={style.card_publ}>{item.publ}</div>
            </div>
            <div className={style.elips_wrapper}>
              <div className={style.elips_block} />
              <div className={style.elips_block} />
              <div className={style.elips_block} />
              <div className={style.elips_hover_menu}>
                <ul>
                  <li className={style.hover_menu_link}>
                    <NavLink to="look" className={style.look_style}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.4">
                          <g clipPath="url(#clip0_3724_1160)">
                            <path
                              d="M0.833374 10.0002C0.833374 10.0002 4.16671 3.3335 10 3.3335C15.8334 3.3335 19.1667 10.0002 19.1667 10.0002C19.1667 10.0002 15.8334 16.6668 10 16.6668C4.16671 16.6668 0.833374 10.0002 0.833374 10.0002Z"
                              stroke="#2C2D2E"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                              stroke="#2C2D2E"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <rect
                            x="0.5"
                            y="0.5"
                            width="19"
                            height="19"
                            stroke="#2C2D2E"
                            strokeOpacity="0.08"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_3724_1160">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span>Посмотреть</span>
                    </NavLink>
                    <NavLink to="/edit" className={style.edit_style}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M14.1666 2.49993C14.3855 2.28106 14.6453 2.10744 14.9313 1.98899C15.2173 1.87054 15.5238 1.80957 15.8333 1.80957C16.1428 1.80957 16.4493 1.87054 16.7353 1.98899C17.0213 2.10744 17.2811 2.28106 17.5 2.49993C17.7188 2.7188 17.8924 2.97863 18.0109 3.2646C18.1294 3.55057 18.1903 3.85706 18.1903 4.16659C18.1903 4.47612 18.1294 4.78262 18.0109 5.06859C17.8924 5.35455 17.7188 5.61439 17.5 5.83326L6.24996 17.0833L1.66663 18.3333L2.91663 13.7499L14.1666 2.49993Z"
                          stroke="#2C2D2E"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>Редактировать</span>
                    </NavLink>
                    <button type="submit" className={style.button_style}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M2.5 5H4.16667H17.5"
                          stroke="#2C2D2E"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.66663 4.99984V3.33317C6.66663 2.89114 6.84222 2.46722 7.15478 2.15466C7.46734 1.8421 7.89127 1.6665 8.33329 1.6665H11.6666C12.1087 1.6665 12.5326 1.8421 12.8451 2.15466C13.1577 2.46722 13.3333 2.89114 13.3333 3.33317V4.99984M15.8333 4.99984V16.6665C15.8333 17.1085 15.6577 17.5325 15.3451 17.845C15.0326 18.1576 14.6087 18.3332 14.1666 18.3332H5.83329C5.39127 18.3332 4.96734 18.1576 4.65478 17.845C4.34222 17.5325 4.16663 17.1085 4.16663 16.6665V4.99984H15.8333Z"
                          stroke="#2C2D2E"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.33337 9.1665V14.1665"
                          stroke="#2C2D2E"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.6666 9.1665V14.1665"
                          stroke="#2C2D2E"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <rect
                          x="0.5"
                          y="0.5"
                          width="19"
                          height="19"
                          stroke="#2C2D2E"
                          strokeOpacity="0.08"
                        />
                      </svg>
                      Удалить
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default CardDeclare;
