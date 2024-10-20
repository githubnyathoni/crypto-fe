import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';

function Header() {
  const navigate = useNavigate();
  const { removeLocalStorage } = useLocalStorage();

  const handleLogout = () => {
    removeLocalStorage();
    navigate('/login');
  };

  return (
    <header className='bg-blue-600 text-white p-4 flex justify-between items-center'>
      <h1 className='text-xl font-bold'>Crypto Dashboard</h1>
      <div
        className='text-white cursor-pointer'
        onClick={handleLogout}
      >
        Logout
      </div>
    </header>
  );
}

export default Header;
