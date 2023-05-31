import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineMail, AiOutlineProject } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';


const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' />
      {nav && (
        <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
          <a onClick={handleNav}
            href='#main'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineHome zize={20} />
            <span className='pl-4'>Home</span>
          </a>
          <a onClick={handleNav}
            href='#main'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineProject zize={20} />
            <span className='pl-4'>Experience</span>
          </a>
          <a
            href='#main'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <BsPerson zize={20} />
            <span className='pl-4'>Resume</span>
          </a>
          <a onClick={handleNav}
            href='#main'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineMail zize={20} />
            <span className='pl-4'>Contact</span>
          </a>
        </div>
      )}
      <div className='md:block fixed top-[25%] z-10 hidden md:flex md:flex-col'>
        <a onClick={handleNav}
          href='#main'
          className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
        >
          <AiOutlineHome size={20} />
        </a>
        <a onClick={handleNav}
          href='#main'
          className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
        >
          <AiOutlineProject size={20} />
        </a>
        <a onClick={handleNav}
          href='#main'
          className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
        >
          <BsPerson size={20} />
        </a>
        <a onClick={handleNav}
          href='#main'
          className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
        >
          <AiOutlineMail size={20} />
        </a>
      </div>
    </div>
  );
};

export default Header;
