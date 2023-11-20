import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineMail, AiOutlineProject } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';

const Header = () => {
  const [nav, setNav] = useState(false);
  const [navClicked, setNavClicked] = useState(false);

  const handleNav = (e, id) => {
    e.preventDefault();
    setNavClicked(true);

    if (window.innerWidth < 768 && !navClicked) {
      setNav(!nav);
    }

    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  const closeNav = () => {
    setNav(false);
    setNavClicked(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNav(false);
        setNavClicked(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDownload = () => window.open("/CV-Carlos David 2023.pdf", "_blank")


  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className='absolute top-4 right-4 z-[99] md:hidden'
      />
      {nav && (
        <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
          <a
            onClick={(e) => handleNav(e, 'main')}
            href='#'
            className='w-[75%] flex justify-center items-center
             rounded-full shadow-lg bg-gray-100 shadow-gray-400
              m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineHome size={20} />
            <span className='pl-4'>Home</span>
          </a>
          <a
            onClick={(e) => handleNav(e, 'experience')}
            href='#'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineProject size={20} />
            <span className='pl-4'>Experience</span>
          </a>
          <a
            onClick={()=>handleDownload()}
            // href={'/example.pdf'}
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <BsPerson size={20} />
            <span className='pl-4'>Resume</span>
          </a>
          <a
            onClick={(e) => handleNav(e, 'contact')}
            href='#'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineMail size={20} />
            <span className='pl-4'>Contact</span>
          </a>
          <button
            onClick={closeNav}
            className='mt-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none'
          >
            Close
          </button>
        </div>
      )}
      <div className='md:block fixed top-[25%] z-10 hidden md:flex md:flex-col'>
        <a
          onClick={(e) => handleNav(e, 'main')}
          href='#'
          className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
        >
          <AiOutlineHome size={20} />
        </a>
        <a
          onClick={(e) => handleNav(e, 'experience')}
          href='#'
          className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
        >
          <AiOutlineProject size={20} />
        </a>
        <a
          onClick={handleDownload}
          href='#'
          className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-1.5 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
        >
          {/* <BsPerson size={20} /> */}
          CV
        </a>
        <a
          onClick={(e) => handleNav(e, 'contact')}
          href='#'
          className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
        >
          <AiOutlineMail size={20} />
        </a>
      </div>
     
    </div>
    
  );
};

export default Header;

