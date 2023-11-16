import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { PiCaretDownBold } from 'react-icons/pi';
import { RiMenuAddLine } from 'react-icons/ri';
import ResNav from './ResNav';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [dropDown, setDropDown] = useState(false);
  const [resNav, setResNav] = useState(false);

  return (
    <div className='flex justify-between flex-col'>
      <nav className='flex justify-between items-center p-4 gap-8 xl:mx-20'>
        <div>
          <Link to={'/'} className='text-3xl font-comfortaa text-nexa-900 font-bold tracking-tight'>CSD2102</Link>
        </div>
        <ul className={`text-md text-nexa-900 gap-10 font-poppins uppercase font-bold hidden lg:flex`}>
          <li className='relative'><Link to="/" className='before:absolute before:w-0 before:h-[2px] before:bg-nexa-900 before:bottom-0 before:left-0 before:transition-all before:duration-300 hover:before:w-full'>Home</Link></li>
          <li>
            <Popup trigger={<button className='flex items-center font-poppins text-md gap-2 uppercase' onMouseEnter={() => setDropDown(true)} onMouseLeave={() => setDropDown(false)}>Academics <PiCaretDownBold /></button>} on={'hover'} open={dropDown}>
              {
                () => (
                  <div className='text-nexa-900 bg-white flex font-bold flex-col border-2 border-solid font-poppins text-md border-gray rounded-xl text-center uppercase'>
                    <Link to='/academics/theory' className='hover:bg-nexa-900 hover:text-white p-2 rounded-t-xl'>Theory</Link>
                    <Link to='/academics/laboratory' className='hover:bg-nexa-900 hover:text-white p-2 rounded-b-xl'>Laboratory</Link>
                  </div>
                )
              }
            </Popup>
          </li>
          <li className='relative'><Link to="/assignments" className='before:absolute before:w-0 before:h-[2px] before:bg-nexa-900 before:bottom-0 before:left-0 before:transition-all before:duration-300 hover:before:w-full'>Assignments</Link></li>
          <li className='relative'><Link to="/projects" className='before:absolute before:w-0 before:h-[2px] before:bg-nexa-900 before:bottom-0 before:left-0 before:transition-all before:duration-300 hover:before:w-full'>Projects</Link></li>
        </ul>
        <div className={`h-16 w-auto hidden lg:block`}>
          <img className='max-h-full max-w-full' src="https://byt.digital/wordpress/crescent/wp-content/themes/crescent/theme/images/logo.png" alt="logo" />
        </div>
        <button className="lg:hidden text-3xl p-4" onClick={() => setResNav(!resNav)}>
          <RiMenuAddLine />
        </button>
      </nav>
      <ResNav resNav={resNav} dropDown={dropDown} setDropDown={setDropDown} setResNav={setResNav} />
    </div>
  )
}

export default Navbar;
