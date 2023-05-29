import React from 'react';
import { FaTwitter, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='flex justify-center items-center py-6 bg-blue-200'>
      <div className='flex space-x-4'>
        <FaTwitter className='cursor-pointer' size={20} />
        <FaGithub className='cursor-pointer' size={20} />
        <FaInstagram className='cursor-pointer' size={20} />
        <FaLinkedinIn className='cursor-pointer' size={20} />
      </div>
    </div>
  );
};

export default Footer;
