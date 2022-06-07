import React from 'react';
import style from './ErrorPage.module.scss';
import errorImage from '../../../images/purr-page-not-found 1.png';

const ErrorPage = () => (
  <div className={style.error_container}>
    <div className={style.error_wrapper}>
      <h2 className={style.error_h2}>Упс! Кажется, на эту страницу прилег котик</h2>
      <span className={style.error_span}>Ошибка 404</span>
      <span className={style.error_span}>
        Мы уже разбираемся, почему так получилось, скоро все починим.
      </span>
    </div>
    <img src={errorImage} alt="errorImage" className={style.error_image} />
  </div>
);

export default ErrorPage;
