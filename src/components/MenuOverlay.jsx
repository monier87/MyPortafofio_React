import React from 'react';

function MenuOverlay({ menuList }) {
  return (
    <div className='absolute inset-0 flex flex-col items-center justify-center backdrop-blur-lg mt-7'>
      {menuList.map((item) => (
        <h1 className='text-black text-[24px] mb-6 hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer'>
          {item.title}
        </h1>
      ))}
    </div>
  );
}

export default MenuOverlay;
