import React from 'react';

interface SeparatorProps {
  className?: string;
}

const Separator: React.FC<SeparatorProps> = ({className}) => {
  const style = 'w-full'
  return (
    <div 
    className={`${style + className}`}>
        <div className='mx-52 h-1 my-8 shadow-black/20 shadow-sm  border-b-2 border-slate-100/40'>

        </div>
    </div>
  );
};

export default Separator;