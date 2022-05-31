import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './EditPageAdmin.module.scss';
import { Select, Input, InputNumber, Upload, Button, Radio } from 'antd';
import InputMask from 'react-input-mask';

import type { RadioChangeEvent } from 'antd';
import 'antd/dist/antd.css';

import maps from '../../../images/image 2.png';
import { useSelector, useDispatch } from 'react-redux';
import GetUserName from '../../../store/Registration/selectors';
import { setUserNameAction } from '../../../store/Registration/actions';

const { TextArea } = Input;

const { Option } = Select;

const EditPageAdmin = () => {
  const [inputMask, setInputMask] = useState({ value: '', error: false });
  const [has, setHas] = useState(false);
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();

  const phone = (event: any) => {
    setInputMask((prev) => ({ ...prev, value: event.target.value }));
  };

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const valMask = () => {
    setInputMask((prev) => ({ ...prev, error: true }));
    if (inputMask.value.length <= 5) {
      setHas(true);
      return false;
    }
    setHas(false);
    return true;
  };

  // useEffect(() => {
  //   if ({ error: true }) {
  //     setHas(true);
  //   } else {
  //     setHas(false);
  //   }
  // }, []);

  return (
    <div>
      <NavLink to="/declare" className={style.navlink_style}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19 12L5 12"
            stroke="#2A2F37"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 19L5 12L12 5"
            stroke="#2A2F37"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Вернуться назад</span>
      </NavLink>
      <form action="" className={style.formEditUser}>
        <div className={style.form_button}>
          <span>Чепчик</span>
          <button type="submit">Сохранить</button>
        </div>
        <div className={style.formEditUser_container}>
          <div className={style.form_input}>
            <div className={style.input_name}>
              <span>Название товара</span>
              <input type="text" name="name" />
            </div>

            <div className={style.form_input_ant}>
              <div className={style.block_l}>
                <span className={style.span_form}>Категория</span>
                <Select>
                  <Option value="1">Автомобили</Option>
                  <Option value="2">Аксессуары</Option>
                  <Option value="3">Одежда</Option>
                  <Option value="4">Мебель</Option>
                  <Option value="5">Спорт</Option>
                  <Option value="6">Техника</Option>
                  <Option value="7">Товары для дома</Option>
                </Select>
              </div>
              <div className={style.block_r}>
                <span className={style.span_form}>Стоимость</span>
                <InputNumber />
              </div>
            </div>
            <div className={style.input_mask}>
              <div className={style.left}>
                <span className={style.data_span}>Дата Публикации</span>
                <input type="date" className={style.data_input} />
              </div>
              <div className={style.right}>
                <span className={style.span_form}>Телефон</span>
                <InputMask
                  mask="+7\(999) 999-9999"
                  alwaysShowMask
                  className={`${inputMask ? style.mask : style.maski}`}
                  value={inputMask.value}
                  onChange={phone}
                  onClick={valMask}
                />
                {has && (
                  <div>
                    <span>Неверный формат</span>
                  </div>
                )}
              </div>
            </div>

            <span className={style.span_form}>Описание</span>
            <TextArea
              maxLength={3000}
              placeholder="Введите текст (до 3000 символов)"
              className={style.textarea}
            />
            <div className={style.uploadStyle}>
              <span className={style.span_form}>Фотография</span>
              <div className={style.file_upload}>
                <Upload>
                  <Button className={style.button_file}>Выбрать файл</Button>
                </Upload>
              </div>
            </div>
            <div className={style.position}>
              <span className={style.span_form}>Местоположение</span>
              <input type="text" placeholder="Введите адрес" className={style.input_position} />
              <img src={maps} alt="" />
            </div>
            <div className={style.block_radio}>
              <span className={style.span_form}>Публикация</span>
              <div className={style.block_radio_container}>
                <div className={style.radio}>
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio value={1}>Показать</Radio>
                    <Radio value={2}>Скрыть</Radio>
                  </Radio.Group>
                </div>
                <span className={style.radio_span}>Сбросить выбор</span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default EditPageAdmin;
