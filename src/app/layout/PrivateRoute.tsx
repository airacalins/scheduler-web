import { useAppSelector } from '../store/hooks'
import { LOGIN_ROUTE } from '../utilities/string_constants';
import { Navigate } from 'react-router-dom';
import PrivateLayout from './PrivateLayout';

const PrivateRoute = () => {
  const { currentUser } = useAppSelector(state => state.user);

  return !!currentUser ? <PrivateLayout /> : <Navigate to={LOGIN_ROUTE} />
}

export default PrivateRoute