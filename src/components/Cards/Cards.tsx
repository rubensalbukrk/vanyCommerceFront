import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({children, className}) => {
  const style = 'flex w-80 h-64 rounded-lg shadow-black/20 shadow-lg '
  return (
    <div 
    className={`${style + className}`}>
        {children}
    </div>
  );
};

export default Card;