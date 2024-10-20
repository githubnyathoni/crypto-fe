import { Toaster } from 'react-hot-toast';
import useLocalStorage from '../hooks/useLocalStorage';
import { Navigate } from 'react-router-dom';
import LoginContent from '../components/pages/login/LoginContent';

function LoginPage() {
  const { accessToken } = useLocalStorage();

  if (accessToken) {
    return <Navigate to={'/'} />;
  }

  return (
    <>
      <Toaster />
      <LoginContent />
    </>
  );
}

export default LoginPage;
