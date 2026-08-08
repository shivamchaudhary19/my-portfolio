import React from 'react'

import ThemeBtn from './ThemeBtn';
function Navbar() {
  return (
    <nav className="flex items-center bg-gray-500 pt-2 pb-2 pl-5 pr-5 text-white justify-between">
      
      <a href="#home" className="flex flex-col gap-[2px]">
        <span className="text-lg font-bold leading-none">
          SHIVAM
        </span>

        <span className="text-xs font-medium leading-none tracking-[0.2em]">
          CHAUDHARY
        </span>
      </a>

      <div className="flex gap-8">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>


      <div className='flex flex-cols gap-2'>
        <div>
          <ThemeBtn />
        </div>
        <button className=''>
          Resume
        </button>
      </div>
    </nav>
  );
}

export default Navbar;