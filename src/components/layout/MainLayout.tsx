import { ReactNode } from 'react';

function MainLayout({ children }: { children: ReactNode }) {
  return <div className='min-h-screen '>{children}</div>;
}

export default MainLayout;
