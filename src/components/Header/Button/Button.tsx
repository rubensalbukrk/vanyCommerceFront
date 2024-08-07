import React, { Children, ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode
  title: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({children, title, className, onClick}) => {
  let style = "w-36 h-12 text-gray-400 bg-transparent font-bold drop-shadow-lg hover:text-white text-lg hover:bg-sky-500 hover:shadow-lg hover:shadow-sky-400 active:bg-sky-300 transition-all border-0 rounded-2xl transition duration-1000 ease-in-out "
  return (
    <button 
    onClick={onClick} 
    className={`${style + className}`} >
      {children} {title}
    </button>
  );
};

export default Button;