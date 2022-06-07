/* eslint-disable react/jsx-indent */
/* eslint-disable array-callback-return */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { roles } from '../../../helpers/Auth';
import GetEmail from '../../../store/Registration/selectorEmail';
// import GetEmail from '../../../store/Registration/selectorEmail';
import GetUserName from '../../../store/Registration/selectors';

type AuthHOCPropsType = {
  children: React.ReactNode | undefined;
};

const AuthHOC = ({ children }: AuthHOCPropsType) => {
  const isReg = useSelector(GetUserName);
  const isAuth = useSelector(GetEmail);
  if (isReg || isAuth) {
    return <>{children}</>;
  }
  return <Navigate to="/auth" />;
};

export default AuthHOC;
