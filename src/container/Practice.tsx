import React from 'react';

const Practice = () => {
  return (
    <div>
      <h1 className='font-mono text-xl'>flex-no-wrap</h1>
      <div className='flex flex-no-wrap bg-gray-200'>
        <div className='w-2/5 flex-none p-2'>
          <div className='text-gray-700 text-center bg-gray-400 p-2'>1</div>
        </div>
        <div className='w-2/5 flex-none p-2'>
          <div className='text-gray-700 text-center bg-gray-400 p-2'>2</div>
        </div>
        <div className='w-2/5 flex-none p-2'>
          <div className='text-gray-700 text-center bg-gray-400 p-2'>3</div>
        </div>
      </div>

      <h1 className='font-mono text-xl'>flex-wrap</h1>
      <div className='flex flex-wrap bg-gray-200'>
        <div className='w-2/5 p-2'>
          <div className='text-gray-700 text-center bg-gray-400 p-2'>1</div>
        </div>
        <div className='w-2/5 p-2'>
          <div className='text-gray-700 text-center bg-gray-400 p-2'>2</div>
        </div>
        <div className='w-2/5 p-2'>
          <div className='text-gray-700 text-center bg-gray-400 p-2'>3</div>
        </div>
      </div>

      <h1 className='font-mono text-xl'>flex-wrap-reverse</h1>
      <div className='flex flex-wrap-reverse bg-gray-200'>
        <div className='w-2/5 p-2'>
          <div className='text-gray-700 text-center bg-gray-400 p-2'>1</div>
        </div>
        <div className='w-2/5 p-2'>
          <div className='text-gray-700 text-center bg-gray-400 p-2'>2</div>
        </div>
        <div className='w-2/5 p-2'>
          <div className='text-gray-700 text-center bg-gray-400 p-2'>3</div>
        </div>
      </div>
    </div>
  );
};

export default Practice;
