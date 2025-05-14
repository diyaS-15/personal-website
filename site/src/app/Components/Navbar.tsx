'use client'
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Navbar(){
    const [open, setOpen] = useState(false); 
    const toggleMenu = () => setOpen((prev) => !prev); 
    const router = useRouter();
    const handelExperienceClick = () => {
        router.push("/Components/Experience");
    }
    return(
        <nav className="flex justify-end md:mx-4 relative font-mono">
            <button className="md:hidden flex hover:text-gray-400" onClick={toggleMenu}>{open ? <Menu size={0} />:<Menu size={35}/>}</button>
            {open && (
                <ul className=" absolute right flex flex-col md:hidden space-x-2 ">
                <li>
                <Link href="Components/About" onClick={toggleMenu}>About</Link>
                </li>
                <li>
                  <Link href="/Components/Experience" onClick={ () => {toggleMenu; handelExperienceClick;}}>Experience</Link>
                  </li>
                  <li>
                  <Link href="Components/Projects" onClick={ () => {toggleMenu; handelExperienceClick;} }>Projects</Link>
                  </li>
                  <li>
                  <Link href="Components/About" onClick={toggleMenu}>Contact</Link>
                  </li>
              </ul>
            ) }
        <ul className="hidden md:flex row-1 gap-6 md:text-lg md:mt-1">
          <li className="hover:text-gray-400">
          <Link href="Components/About">About</Link>
          </li>
          <li className="hover:text-gray-400">
            <Link href="Components/Experience">Experience</Link>
            </li>
            <li className="hover:text-gray-400">
            <Link href="Components/Projects">Projects</Link>
            </li>
            <li className="hover:text-gray-400">
            <Link href="Components/About">Contact</Link>
            </li>
        </ul>
      </nav>
    );
}