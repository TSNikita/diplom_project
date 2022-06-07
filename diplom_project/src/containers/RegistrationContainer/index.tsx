import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RegistrationPage from '../../components/pages/RegistrationPage';
import GetUserName from '../../store/Registration/selectors';

const RegistrationContainer = () => {
  const name = useSelector(GetUserName);
  const navigate = useNavigate();

  useEffect(() => {
    if (name) {
      navigate('/board');
    }
  });
  return (
    <div>
      <RegistrationPage />
    </div>
  );
};
export default RegistrationContainer;
