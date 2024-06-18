import { ReactNode } from 'react';
import { Navbar } from './Navbar';

interface ChildrenProps {
  children: ReactNode;
}

export const NavbarLayout = ({ children }: ChildrenProps) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
