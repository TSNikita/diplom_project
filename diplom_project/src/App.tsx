import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageWrapper from './components/common/PageWrapper';
import BoardPage from './components/pages/BoardPage';
import AuthContainer from './containers/AuthContainer';
import MainPageContainer from './containers/MainPageContainer';
import RegistrationContainer from './containers/RegistrationContainer';

const App = () => (
  <Routes>
    <Route path="/" element={<PageWrapper />}>
      <Route path="/" element={<MainPageContainer />}>
        <Route path="board" element={<BoardPage />} />
      </Route>
      <Route path="auth" element={<AuthContainer />} />
      <Route path="reg" element={<RegistrationContainer />} />
    </Route>
  </Routes>
);

export default App;
