import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Main = () => {
  const backgroundImageUrl =
    'https://drive.google.com/uc?export=view&id=198ua0oWssnOu6Qlw92NNiCYzBe8eZk4N';

  const imageUrl =
    'https://drive.google.com/uc?export=view&id=1pcLGvfJJjvu0mykV3_bzlquv0N8po2WH';

  return (
    <div
      id='main'
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${backgroundImageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh',
      }}
    >
      <div className='flex flex-col items-center justify-center h-screen px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-center sm:justify-start items-center mt-16'>
          <div className='h-[320px] w-[250px] p-2 rounded-[20px] bg-gradient-to-b from-[#FF004D] to-[#2A26B8]'>
            <img
              src={imageUrl}
              alt='Selected'
              className='h-full w-full object-cover rounded-[20px]'
            />
          </div>
        </div>
        <div className='mt-8 text-center sm:text-left'>
          <p className='text-blue-700 text-2xl sm:text-3xl font-bold animate-pulse'>
            Hola, bienvenidos a mi página
          </p>
          <p className='text-black text-4xl sm:text-5xl font-bold animate-fade-in-down'>
            Mi nombre es {' '}
            <span style={{ color: 'red' }}>
              Carlos David Monier
            </span>
          </p>
          <h2 className='text-3xl sm:text-4xl pt-4 text-blue-600 font-bold'>
            <TypeAnimation
              sequence={[
                'Soy un Desarrollador Web',
                1000,
                '\u00A0Ingeniero de Software',
                2000,
                'Scrum Master',
                2000,
              ]}
              wrapper='span'
              cursor={true}
              repeat={Infinity}
              className='inline-block'
            />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Main;
