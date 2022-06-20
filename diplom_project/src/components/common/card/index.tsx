import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import style from './Card.module.scss';
import GetLook from './../../../store/Registration/selectorLook';
import { setLookAction } from '../../../store/Registration/actions';

type CardPropsType = {
  card: {
    id: string;
    image?: any;
    value: string;
    name: string;
    text: string;
    price: string;
    Date: string;
    look: string;
  }[];
};

const Card = ({ card }: CardPropsType) => {
  const look = useSelector(GetLook);
  const dispatch = useDispatch();

  return (
    <div className={style.card_container}>
      {card.map((item) => (
        <nav>
          <NavLink to={item.id} key={item.id} onClick={() => dispatch(setLookAction(look))}>
            <div className={style.card_top}>
              <div className={style.card_wrapper}>
                <img src={item.image} alt="" className={style.card_img} />
                <span className={style.card_span}>{item.value}</span>
              </div>
              <div className={style.card_name}>{item.name}</div>
              <div className={style.card_text}>{item.text}</div>
              <div className={style.card_price}>{item.price}</div>
              <div className={style.block_bottom}>
                <div className={style.card_data}>{item.Date}</div>
                <div className={style.card_look}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.4">
                      <path
                        d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                        stroke="#2C2D2E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                        stroke="#2C2D2E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>

                  {look}
                </div>
              </div>
            </div>
          </NavLink>
        </nav>
      ))}
    </div>
  );
};

export default Card;
