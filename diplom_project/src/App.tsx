import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Card from './components/common/card';
import PageWrapper from './components/common/MenuMain/PageWrapper';
import PageWrapperEdit from './components/common/PageWrapperEdit';
import AuthHOC from './components/HOC/AuthHoc';
import BoardPage from './components/pages/BoardPage';
import AuthContainer from './containers/AuthContainer';
import CardProductContainer from './containers/CardProductContainer';
import DeclarePageContainer from './containers/DeclarePageContainer';
import EditPageAdminContainer from './containers/EditPageAdminContainer';
import EditPageUserContainer from './containers/EditPageUserContainer';
import ErrorContainer from './containers/ErrorContainer';
import MainPageContainer from './containers/MainPageContainer';
import RegistrationContainer from './containers/RegistrationContainer';

const App = () => (
  <Routes>
    <Route path="/" element={<PageWrapper />}>
      <Route path="/" element={<MainPageContainer />}>
        {/* <Route path="/" element={<BoardPage />} /> */}
      </Route>

      <Route path=":id" element={<CardProductContainer />} />
      <Route path="*" element={<ErrorContainer />} />
      <Route
        path="/"
        element={
          <AuthHOC>
            <PageWrapperEdit />
          </AuthHOC>
        }>
        <Route
          path="/declare"
          element={
            <AuthHOC>
              <DeclarePageContainer />
            </AuthHOC>
          }
        />
        <Route
          path="edit"
          element={
            <AuthHOC>
              <EditPageUserContainer />
            </AuthHOC>
          }
        />
        <Route
          path="editAdmin"
          element={
            <AuthHOC>
              <EditPageAdminContainer />
            </AuthHOC>
          }
        />
      </Route>

      <Route path="auth" element={<AuthContainer />} />
      <Route path="reg" element={<RegistrationContainer />} />
    </Route>
  </Routes>
);

export default App;
