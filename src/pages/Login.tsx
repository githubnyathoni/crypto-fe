import { Toaster } from 'react-hot-toast';
import LoginContent from '../components/pages/LoginContent';
import useLocalStorage from '../hooks/useLocalStorage';
import { Navigate } from 'react-router-dom';

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
