import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthenticationPage from '../../features/authentication/AuthenticationPage';
import { AUTHENTICATION_FORM_TYPE } from '../utilities/enums';
import { DashboardPage } from '../../features/dashboard/DashboardPage';
import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from '../utilities/string_constants';
import PrivateRoute from './PrivateRoute';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { fetchCurrentUser } from '../store/auth/action';
import LoadingPage from '../components/indicator/LoadingPage';

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
