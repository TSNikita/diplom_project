/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './CardProductPage.module.scss';
import maps from '../../../images/image 2 (1).png';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useSelector } from 'react-redux';
import GetLook from './../../../store/Registration/selectorLook';

type CardProductPagePropsType = {
  product: {
    name: string;
    text: string;
    id: string;
    Date: string;
    price: string;
    image?: any;
  };
};

const CardProductPage = ({ product }: CardProductPagePropsType) => {
  const [visible, setVisible] = useState(false);
  const look = useSelector(GetLook);
  const navigate = useNavigate();

  const handlerNavigate = () => {
    navigate(-1);
  };

  return (
    <div className={style.cardProduct_wrapper}>
      <div className={style.block_left} key={product?.id}>
        <div className={style.prev_style}>
          <button type="button" onClick={handlerNavigate} className={style.button_navigate}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24 10.5H5.745L14.13 2.115L12 0L0 12L12 24L14.115 21.885L5.745 13.5H24V10.5Z"
                fill="#2C2D2E"
              />
            </svg>
          </button>
        </div>
        <div className={style.data_cardProduct}>
          <span className={style.data_span}>{product?.Date}</span>
        </div>
        <h1 className={style.name_h1}>{product?.name}</h1>
        <span className={style.card_articl}>WS-25645-253-55</span>
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
          <span>{look}</span>
        </div>
        <div className="image_container">
          <div className={style.imgContainer} />
          <Carousel>
            <div>
              <img src={product?.image} />
            </div>
            <div>
              <img src={product?.image} />
            </div>
            <div>
              <img src={product?.image} />
            </div>
            <div>
              <img src={product?.image} />
            </div>
          </Carousel>
        </div>
        <div>
          <h2 className={style.cardProduct_h2}>Описание: </h2>
          <span className={style.cardProduct_span}>{product?.text}</span>
        </div>
        <div>
          <h2 className={style.cardProduct_h2_g}>
            Местоположение: <span className={style.cardProduct_h2_span}>г. Кстово</span>{' '}
          </h2>
          <img src={maps} alt="maps" className={style.card_Product_maps} />
        </div>
      </div>
      <div className={style.block_right_wrapper}>
        <div className={style.block_right}>
          <span className={style.right_price}>{product?.price}</span>
          <div className={style.block_telephone}>
            <button
              type="button"
              className={style.right_button}
              onClick={() => setVisible(!visible)}>
              Показать номер
            </button>
            {visible && (
              <span className={style.phone}>
                <a href="tel:+79304566569">+7 (930) 456 - 65 - 69</a>
              </span>
            )}
          </div>

          <span className={style.right_span}>Смотрите также:</span>
          <div className={style.see_product}>
            <img src="" alt="" className={style.right_img} />
            <span className={style.cardProduct_span_right}>
              Стиральная машина <br /> <span className={style.span_h}>Samsung</span>
            </span>
          </div>
          <div>
            <img src="" alt="" className={style.right_img} />
            <span className={style.cardProduct_span_right}>
              Стиральная машина <br /> <span className={style.span_h}>Indesit</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductPage;
