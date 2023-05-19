import React from 'react'

function Header() {
  const menuList = [
    {
      id: 1,
      title: "Principal",
    },
    {
      id: 2,
      title: "Acerca de mí",
    },
    {
      id: 3,
      title: "Servicios",
    },
    {
      id: 4,
      title: "Portafolio",
    },
    {
      id: 5,
      title: "Contacto",
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
        <div className="flex md:hidden">
          <svg
            className="w-6 h-6 text-gray-600 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="hidden md:flex gap-4">
          {menuList.map((item) => (
            <div key={item.id}>
              <h2 className="text-red-500 hover:text-white hover:bg-red-500 rounded-full text-base md:text-lg px-3 py-1 cursor-pointer">
                {item.title}
              </h2>
            </div>
          ))}
          <h2 className="text-red-500 hover:text-white hover:bg-red-500 rounded-full text-base md:text-lg px-3 py-1 cursor-pointer">
            Contrátame
          </h2>
        </div>
      </div>
    </div>
  );
}


export default Header;
