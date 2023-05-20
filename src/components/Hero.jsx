import React from 'react';

function Hero() {
  const imageUrl = 'https://drive.google.com/uc?export=download&id=1pcLGvfJJjvu0mykV3_bzlquv0N8po2WH';

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 pt-10 items-center'>
      <div className='mb-10'>
        <p className='text-black text-[13px]'>Hola, Bienvenidos a mi página</p>
        <p className='text-Yellow text-[40px] font-bold'>Mi nombre es Carlos David</p>
        <p className='text-red-500 text-[40px] font-bold'> Soy Desarrollador Web</p>
        <p className='text-orange text-[40px] font-bold'>& Ingeniero de Software</p>
        <div className='mt-4 flex gap-4'>
          <button className='text-white text-[12px] px-3 pb-2 py-2 bg-red-500 rounded-full border-[2px] hover:border-white'>
            SEE PORTFOLIO
          </button>
          <button className='text-white text-[12px] px-3 pb-2 py-2 bg-red-500 rounded-full border-[2px] hover:border-white'>
            CONTACT ME
          </button>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='h-[320px] w-[250px] p-2 rounded-[20px] bg-gradient-to-b from-[#FF004D]  to-[#2A26B8]'>
          <img
            src={imageUrl}
            alt='Selected'
            className='h-full w-[250px] object-cover rounded-[20px]'
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;