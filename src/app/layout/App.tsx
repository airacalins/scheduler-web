import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthenticationPage from '../../features/authentication/AuthenticationPage';
import { AUTHENTICATION_FORM_TYPE, ROUTE_NAME } from '../utilities/enums';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={ROUTE_NAME.LOGIN}
          element={<AuthenticationPage authenticationFormType={AUTHENTICATION_FORM_TYPE.LOGIN} />}
        />

        <Route
          path={ROUTE_NAME.REGISTER}
          element={<AuthenticationPage authenticationFormType={AUTHENTICATION_FORM_TYPE.REGISTER} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
