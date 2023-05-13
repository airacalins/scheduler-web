import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthenticationPage from '../../features/authentication/AuthenticationPage';
import { AUTHENTICATION_FORM_TYPE } from '../utilities/enums';
import { DashboardPage } from '../../features/dashboard/DashboardPage';
import { CLIENTS_ROUTE, EMPLOYEES_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, SERVICES_ROUTE } from '../utilities/string_constants';
import PrivateRoute from './PrivateRoute';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { fetchCurrentUser } from '../store/auth/action';
import LoadingPage from '../components/indicator/LoadingPage';
import ClientsPage from '../../features/client/ClientsPage';
import EmployeesPage from '../../features/employee/EmployeesPage';
import { ServicesPage } from '../../features/service/ServicesPage';

export const App = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useAppDispatch();

  const initApp = useCallback(
    async () => {
      try {
        await dispatch(fetchCurrentUser());
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch],
  )

  useEffect(
    () => { initApp().then(() => setLoading(false)); },
    [initApp],
  )

  if (loading) return <LoadingPage />

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={LOGIN_ROUTE}
          element={<AuthenticationPage authenticationFormType={AUTHENTICATION_FORM_TYPE.LOGIN} />}
        />

        <Route
          path={REGISTER_ROUTE}
          element={<AuthenticationPage authenticationFormType={AUTHENTICATION_FORM_TYPE.REGISTER} />}
        />

        <Route
          path={HOME_ROUTE}
          element={<PrivateRoute />}
        >
          <Route
            path={HOME_ROUTE}
            element={<DashboardPage />}
          />

          <Route
            path={CLIENTS_ROUTE}
            element={<ClientsPage />}
          />

          <Route
            path={EMPLOYEES_ROUTE}
            element={<EmployeesPage />}
          />

          <Route
            path={SERVICES_ROUTE}
            element={<ServicesPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
