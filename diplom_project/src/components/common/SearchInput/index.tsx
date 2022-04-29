import React from 'react';
import style from './Search.module.scss';
import Group from '../../../images/Group 1337.png';

const SearchInput = () => (
  <div className={style.searh_wrapper}>
    <img src={Group} alt="Group" className={style.icons} />
    <input type="search" className={style.input} />
    <button className={style.search_button} type="button">
      Искать
    </button>
  </div>
);

export default SearchInput;
