import React, { useState } from 'react';
import style from './CardProductSee.module.scss';

const CardProductSee = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={style.block_right_wrapper}>
      <div className={style.block_right}>
        <span className={style.right_price}>22 500 Р</span>
        <div className={style.block_telephone}>
          <button type="button" className={style.right_button} onClick={() => setVisible(!visible)}>
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
  );
};

export default CardProductSee;
