import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Card from './components/common/card';
import PageWrapper from './components/common/MenuMain/PageWrapper';
import PageWrapperEdit from './components/common/PageWrapperEdit';
import BoardPage from './components/pages/BoardPage';
import AuthContainer from './containers/AuthContainer';
import DeclarePageContainer from './containers/DeclarePageContainer';
import EditPageAdminContainer from './containers/EditPageAdminContainer';
import EditPageUserContainer from './containers/EditPageUserContainer';
import MainPageContainer from './containers/MainPageContainer';
import RegistrationContainer from './containers/RegistrationContainer';

const App = () => (
  <Routes>
    <Route path="/" element={<PageWrapper />}>
      <Route path="/" element={<MainPageContainer />}>
        <Route path="/board" element={<BoardPage />} />
      </Route>
      <Route path="/" element={<PageWrapperEdit />}>
        <Route path="declare" element={<DeclarePageContainer />} />
        <Route path="edit" element={<EditPageUserContainer />} />
        <Route path="editAdmin" element={<EditPageAdminContainer />} />
      </Route>

      <Route path="auth" element={<AuthContainer />} />
      <Route path="reg" element={<RegistrationContainer />} />
    </Route>
  </Routes>
);

export default App;
