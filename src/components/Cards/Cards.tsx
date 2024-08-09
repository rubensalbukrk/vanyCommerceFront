import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({children, className}) => {
  const style = 'flex-1 h-64 rounded-lg shadow-black/50 shadow-lg '
  return (
    <div 
    className={`${style + className}`}>
        {children}
    </div>
  );
};

export default Card;