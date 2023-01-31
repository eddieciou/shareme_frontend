import React from 'react';
import { Circles } from 'react-loader-spinner';

interface ISpinner {
  message: string;
}

const Spinner = ({ message }: ISpinner) => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <Circles color='#00BFFF' height={50} wrapperClass='m-5' />
      <p className='text-lg text-center px-2'>{message}</p>
    </div>
  );
};

export default Spinner;
