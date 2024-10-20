import { useCallback, useState } from 'react';
import Input from '../Input';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import { POST_TO_LOGIN } from '../../api/services/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function FormLogin() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleChangeUsernameInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUsername(e.target.value);
  };

  const handleChangePasswordInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    USER_LOGIN();
  };

  const USER_LOGIN = useCallback(async () => {
    setLoading(true);
    const result = await POST_TO_LOGIN({
      username,
      password,
    });

    if (result.error) {
      setLoading(false);
      toast.error(result.message);
    } else {
      const encodeToken = btoa(result.access_token);
      localStorage.setItem('access_token', encodeToken);

      toast.success('Success Login');
      navigate('/');
    }
  }, [username, password]);

  return (
    <form
      onSubmit={handleSubmit}
      className='mt-6'
    >
      <Input
        id='username'
        icon={faUser}
        placeholder='Enter your username'
        type='text'
        classname='flex flex-col mb-5'
        label='Username:'
        onChange={handleChangeUsernameInput}
        required
      />
      <Input
        id='password'
        icon={faLock}
        placeholder='Enter your password'
        type='password'
        classname='flex flex-col mb-5'
        label='Password:'
        onChange={handleChangePasswordInput}
        required
      />
      <div className='flex justify-center w-full '>
        <Button
          disabled={loading}
          type='submit'
          label='Login'
        />
      </div>
    </form>
  );
}

export default FormLogin;
