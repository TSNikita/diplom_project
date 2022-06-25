import { Checkbox } from 'antd';
import React, { useEffect, useState } from 'react';
import style from './category.module.scss';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { itemsCard } from '../../../helpers/index';

type CategoryPropsType = {
  choos: any;
};

const Category = ({ choos }: CategoryPropsType) => {
  const [state, setState] = useState({
    category: [
      { key: 'avto', name: 'Автомобили' },
      { key: 'accessories', name: 'Аксессуары' },
      { key: 'clothes', name: 'Одежда' },
      { key: 'furniture ', name: 'Мебель' },
      { key: 'sport', name: 'Спорт' },
      { key: 'technic', name: 'Техника' },
      { key: 'product_home', name: 'Товары для дома' },
    ],
  });

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  // useEffect(() => {
  //   setState(state);
  // }, [state]);

  return (
    <div>
      {state.category.map((el) => (
        <div
          key={el.key}
          className={style.cat_check}
          onClick={() => choos(el.name)}
          role="button"
          tabIndex={0}>
          <Checkbox onChange={onChange} />
          <span className={style.check_span}>{el.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Category;
