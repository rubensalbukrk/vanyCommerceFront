import React, { Children, ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode
  title: string;
  className?: string;
  onClick?: () => void;
}

const ButtonGreen: React.FC<ButtonProps> = ({children, title, className, onClick}) => {
  let style = `flex w-40 h-12 text-white text-lg bg-green-600 font-bold drop-shadow-lg justify-center items-center gap-x-6
    hover:text-white  hover:bg-green-500 hover:shadow-lg hover:shadow-green-400
    active:bg-green-300 rounded-2xl transition duration-1000 ease-in-out `
  return (
    <button 
    onClick={onClick} 
    className={style + `${className}`} >
      {children} {title}
    </button>
  );
};

export default ButtonGreen;