import FormLogin from '../../forms/FormLogin';

function LoginContent() {
  return (
    <div className='w-full h-screen bg-gray-100'>
      <div className='h-full flex flex-col justify-center items-center'>
        <div className='flex flex-col bg-white shadow-md px-4 sm:px-6 py-8 rounded-3xl w-80 max-w-md'>
          <div className='font-medium self-center text-xl sm:text-3xl text-gray-800'>
            Login
          </div>
          <FormLogin />
        </div>
      </div>
    </div>
  );
}

export default LoginContent;
