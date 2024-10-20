import { Navigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { accessToken } = useLocalStorage();

  if (!accessToken) {
    return <Navigate to='/login' />;
  }
  return children;
};

export default ProtectedRoute;
