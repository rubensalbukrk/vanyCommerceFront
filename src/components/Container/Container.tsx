import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children , className}) => {
  const style = 'w-full flex justify-center items-center'
  return (
    <div 
    className={`${style + className}`}>
        {children}
    </div>
  );
};

export default Container;