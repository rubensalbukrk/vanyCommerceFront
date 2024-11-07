import { FaSpinner } from 'react-icons/fa';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <FaSpinner className="animate-spin" color='white' size={30} />
    </div>
  );
};

export default LoadingSpinner;