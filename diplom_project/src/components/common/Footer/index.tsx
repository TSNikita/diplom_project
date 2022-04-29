import React from 'react';
import style from './Footer.module.scss';
import Logo from '../../../images/Logo.png';
import Facebook from '../../../images/Group 742.png';
import Instagram from '../../../images/Group 741.png';
import Vk from '../../../images/Group 740.png';

const Footer = () => (
  <footer className={style.footer_wrap}>
    <div className={style.container}>
      <div className={style.footer_logo}>
        <img src={Logo} alt="Logo" />
        <div className={style.border} />
        <span>Доска объявлений </span>
      </div>
      <span>© ООО «Доска диджитал», 2022</span>
      <div className={style.container_icons}>
        <img src={Facebook} alt="Facebook" />
        <img src={Instagram} alt="Instagram" />
        <img src={Vk} alt="Vk" />
      </div>
    </div>
  </footer>
);

export default Footer;
