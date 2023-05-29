import React from 'react';

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
        <div>
          <p className='text-blue-700 text-[20px] font-bold animate-pulse'>
            Hola, Bienvenidos a mi página
          </p>
          <p className='text-Yellow text-[40px] font-bold animate-fade-in-down'>
            Mi nombre es Carlos David
          </p>
          <p className='text-red-500 text-[40px] font-bold animate-fade-in-down'>
            Soy Desarrollador Web
          </p>
          <p className='text-orange text-[40px] font-bold animate-fade-in-down'>
            Ingeniero de Software
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;

