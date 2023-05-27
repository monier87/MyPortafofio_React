import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { AiQutlineMenu} from "react-icons/ai"

function Header() {
  const [nav, setNav]= useState(false);
  const handleNav= ()=>{
    setNav(!nav)  
  };
  

 return (
  <div>
    <AiQutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[-99] md:hidden" />
  </div>
 )

export default Header;
