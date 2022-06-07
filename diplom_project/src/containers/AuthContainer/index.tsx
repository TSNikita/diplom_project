import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AuthPage from '../../components/pages/AuthPage';
import { useNavigate } from 'react-router-dom';
import GetEmail from '../../store/Registration/selectorEmail';
// import { rootReducerType } from '../../store/rootType';

const AuthContainer = () => {
  const email = useSelector(GetEmail);
  const navigate = useNavigate();

  useEffect(() => {
    if (email) {
      navigate('/board');
    }
  }, [email]);
  return (
    <div>
      <AuthPage />
    </div>
  );
};
export default AuthContainer;
