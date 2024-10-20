import { ReactNode } from 'react';

function Card({ children }: { children: ReactNode }) {
  return (
    <div className='w-4/5 flex flex-col justify-center mb-5 mt-10 mx-auto p-5 rounded shadow-lg'>
      {children}
    </div>
  );
}

export default Card;
