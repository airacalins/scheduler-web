import React from 'react';
import AuthenticationPage from '../../features/authentication/AuthenticationPage';
import { AUTHENTICATION_FORM_TYPE } from '../utilities/enums';

function App() {
  return (
    < AuthenticationPage authenticationFormType={AUTHENTICATION_FORM_TYPE.REGISTER} />
  );
}

export default App;
