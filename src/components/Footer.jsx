import React from 'react';
import { FaTwitter, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='flex justify-center items-center py-6 bg-blue-200'>
      <div className='flex space-x-4'>
        <span className="font-semibold">Estoy en: </span>
        <a href='https://twitter.com/tu_perfil_de_twitter' target='_blank' rel='noopener noreferrer'>
          <FaTwitter className='cursor-pointer' size={20} />
        </a>
        <a href='https://github.com/tu_perfil_de_github' target='_blank' rel='noopener noreferrer'>
          <FaGithub className='cursor-pointer' size={20} />
        </a>
        <a href='https://instagram.com/tu_perfil_de_instagram' target='_blank' rel='noopener noreferrer'>
          <FaInstagram className='cursor-pointer' size={20} />
        </a>
        <a href='https://linkedin.com/in/tu_perfil_de_linkedin' target='_blank' rel='noopener noreferrer'>
          <FaLinkedinIn className='cursor-pointer' size={20} />
        </a>
        <span className="animate-bounce">Sígueme</span>
      </div>
    </div>
  );
};

export default Footer;
