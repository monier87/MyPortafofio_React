import React from 'react';
import { FaTwitter, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='flex justify-center items-center py-6 bg-blue-200'>
      <div className='flex space-x-4'>
        <span className="font-semibold">Estoy en: </span>
        <a href='https://twitter.com/Dmonier87' target='_blank' rel='noopener noreferrer'>
          <FaTwitter className='cursor-pointer' size={20} />
        </a>
        <a href='https://github.com/monier87' target='_blank' rel='noopener noreferrer'>
          <FaGithub className='cursor-pointer' size={20} />
        </a>
        <a href='https://instagram.com/carlosdavid1905' target='_blank' rel='noopener noreferrer'>
          <FaInstagram className='cursor-pointer' size={20} />
        </a>
        <a href='https://linkedin.com/in/carlos-monier-712948185' target='_blank' rel='noopener noreferrer'>
          <FaLinkedinIn className='cursor-pointer' size={20} />
        </a>
        <span className="animate-bounce">Sígueme</span>
      </div>
    </div>
  );
};

export default Footer;
