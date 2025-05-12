'use client'
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar(){
    const [open, setOpen] = useState(false); 
    const toggleMenu = () => setOpen((prev) => !prev); 
    return(
        <nav className="flex justify-end md:mx-4 relative font-mono">
            <button className="md:hidden flex hover:text-gray-400" onClick={toggleMenu}>{open ? <Menu size={0} />:<Menu size={35}/>}</button>
            {open && (
                <ul className=" absolute right flex flex-col md:hidden space-x-2 ">
                <li>
                <a href="#" onClick={toggleMenu}>About</a>
                </li>
                <li>
                  <a href="#" onClick={toggleMenu}>Experience</a>
                  </li>
                  <li>
                  <a href="#" onClick={toggleMenu}>Project</a>
                  </li>
                  <li>
                  <a href="#" onClick={toggleMenu}>Contact</a>
                  </li>
              </ul>
            ) }
        <ul className="hidden md:flex row-1 gap-6 md:text-lg md:mt-1">
          <li className="hover:text-gray-400">About</li>
          <li className="hover:text-gray-400">
            <a href="#">Experience</a>
            </li>
            <li className="hover:text-gray-400">
            <a href="#">Project</a>
            </li>
            <li className="hover:text-gray-400">
            <a href="#">Contact</a>
            </li>
        </ul>
      </nav>
    );
}