import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './EditPageUser.module.scss';
import { Select, Input, InputNumber, Upload, Button, Radio } from 'antd';
import InputMask from 'react-input-mask';
import 'antd/dist/antd.css';

import type { RadioChangeEvent } from 'antd';
import maps from '../../../images/image 2.png';
import { useDispatch } from 'react-redux';

const { TextArea } = Input;
const { Option } = Select;

type EditPageUserPropsType = {
  propsEdit: {
    name: string;
    text: string;
    value: string;
    id: string;
    price: string;
  };
};

const EditPageUser = ({ propsEdit }: EditPageUserPropsType) => {
  // const name = useSelector(GetUserName);
  const [inputMask, setInputMask] = useState({ value: '', error: false });
  const [has, setHas] = useState(false);
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();

  // dispatch(setUserNameAction(name));

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
        <span>?????????????????? ??????????</span>
      </NavLink>
      {/* {propsEdit.map((prod) => ( */}
      <form action="" className={style.formEditUser} key={propsEdit?.id}>
        <div className={style.form_button}>
          <span>{propsEdit?.name}</span>
          <button type="submit">??????????????????</button>
        </div>
        <div className={style.formEditUser_container}>
          <div className={style.form_input}>
            <div className={style.input_name}>
              <span>???????????????? ????????????</span>
              <input type="text" name="name" />
            </div>
            <div className={style.form_input_ant}>
              <div className={style.block_l}>
                <span className={style.span_form}>{propsEdit?.value}</span>
                <Select>
                  <Option value="1">????????????????????</Option>
                  <Option value="2">????????????????????</Option>
                  <Option value="3">????????????</Option>
                  <Option value="4">????????????</Option>
                  <Option value="5">??????????</Option>
                  <Option value="6">??????????????</Option>
                  <Option value="7">???????????? ?????? ????????</Option>
                </Select>
              </div>
              <div className={style.block_r}>
                <span className={style.span_form}>??????????????????</span>
                <InputNumber />
              </div>
            </div>
            <div className={style.input_mask}>
              <span className={style.span_form}>??????????????</span>
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
                  <span>???????????????? ????????????</span>
                </div>
              )}
            </div>

            <span className={style.span_form}>????????????????</span>
            <TextArea
              maxLength={3000}
              placeholder="?????????????? ?????????? (???? 3000 ????????????????)"
              className={style.textarea}
            />
            <div className={style.uploadStyle}>
              <span className={style.span_form}>????????????????????</span>
              <div className={style.file_upload}>
                <Upload>
                  <Button className={style.button_file}>?????????????? ????????</Button>
                </Upload>
              </div>
            </div>
            <div className={style.position}>
              <span className={style.span_form}>????????????????????????????</span>
              <input type="text" placeholder="?????????????? ??????????" className={style.input_position} />
              <img src={maps} alt="" />
            </div>
            <div className={style.block_radio}>
              <span className={style.span_form}>????????????????????</span>
              <div className={style.block_radio_container}>
                <div className={style.radio}>
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio value={1}>????????????????</Radio>
                    <Radio value={2}>????????????</Radio>
                  </Radio.Group>
                </div>
                <span className={style.radio_span}>???????????????? ??????????</span>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* ))} */}
    </div>
  );
};
export default EditPageUser;
