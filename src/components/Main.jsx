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
      <div className='flex justify-center items-center h-screen'>
        <div className='flex justify-center mr-10'>
          <div className='h-[320px] w-[250px] p-2 rounded-[20px] bg-gradient-to-b from-[#FF004D] to-[#2A26B8]'>
            <img
              src={imageUrl}
              alt='Selected'
              className='h-full w-full object-cover rounded-[20px]'
            />
          </div>
        </div>
        <div style={{ float: 'right' }}>
          <p className='text-blue-700 text-[20px] font-bold animate-pulse'>
            Hola, Bienvenidos a mi página
          </p>
          <p className='text-black-700 text-[40px] font-bold animate-fade-in-down'>
            Mi nombre es {' '}
            <span style={{ color: 'red' }}>Carlos David Monier</span>
          </p>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
            <TypeAnimation
              sequence={[
                ' Soy un Desarrollador Web', // Types 'One'
                1000, // Waits 1s
                'Soy un Ingeniero de Software', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '50px' }}
            />
          </h2>
         

        </div>
      </div>
    </div>
  );
};

export default Main;
