import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import MenuOverlay from './MenuOverlay';

function Header() {
  const [toggle, setToggle] = useState(false);

  const menuList = [
    {
      id: 1,
      title: 'Principal',
      link: '/',
    },
    {
      id: 2,
      title: 'Acerca de mí',
      link: '/about',
    },
    {
      id: 3,
      title: 'Servicios',
      link: '/services',
    },
    {
      id: 4,
      title: 'Portafolio',
      link: '/portfolio',
    },
    {
      id: 5,
      title: 'Contacto',
      link: '/contact',
    },
  ];

  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-orange">
          CARLOS <span className="text-red-500">DAVID</span>
        </h2>
      </div>
      <div className="md:ml-4">
        <div className="hidden md:flex gap-4">
          {menuList.map((item) => (
            <div key={item.id}>
              <a
                href={item.link}
                className="text-black hover:text-white hover:bg-red-500 rounded-full text-base md:text-lg px-3 py-1 cursor-pointer"
              >
                {item.title}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden">
        {!toggle ? (
          <HiMenu
            onClick={() => setToggle(!toggle)}
            className="text-black text-2xl cursor-pointer"
          />
        ) : (
          <HiX
            onClick={() => setToggle(!toggle)}
            className="text-black text-2xl cursor-pointer"
          />
        )}
        {toggle ? <MenuOverlay menuList={menuList} /> : null}
      </div>
    </div>
  );
}

export default Header;
