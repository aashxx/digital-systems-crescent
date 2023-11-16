import React, { useRef } from 'react';
import Popup from 'reactjs-popup';
import { PiCaretDownBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const ResNav = ({resNav, dropDown, setDropDown, setResNav}) => {

  const closeRef = useRef(null);

  const togglePopup = () => {
    setResNav(false);
    closeRef.current.click();
  }

  return (
    <div className={`bg-white ${resNav ? "translate-y-0" : "translate-y-[-200%]"} transition-all duration-650 w-full absolute top-[90px] ease-in lg:hidden`}>
      <ul className={`text-md text-nexa-900 gap-10 font-poppins uppercase font-bold flex flex-col items-center`}>
          <li className='relative'><Link to="/" onClick={() => setResNav(false)} className='before:absolute before:w-0 before:h-[2px] before:bg-nexa-900 before:bottom-0 before:left-0 before:transition-all before:duration-300 hover:before:w-full'>Home</Link></li>
          <li>
            <Popup trigger={<button className='flex items-center font-poppins text-md gap-2 uppercase' onMouseEnter={() => setDropDown(true)} onMouseLeave={() => setDropDown(false)}>Academics <PiCaretDownBold /></button>} on={'hover'} open={dropDown}>
              {
                (close) => (
                  <div className='text-nexa-900 bg-white flex font-bold flex-col border-2 border-solid font-poppins text-md border-gray rounded-xl text-center uppercase'>
                    <Link to='/academics/theory' onClick={togglePopup} className='hover:bg-nexa-900 hover:text-white p-2 rounded-t-xl'>Theory</Link>
                    <Link to='/academics/laboratory' onClick={togglePopup} className='hover:bg-nexa-900 hover:text-white p-2 rounded-b-xl'>Laboratory</Link>
                    <button onClick={() => close()} ref={closeRef} className='hidden'>Close</button>
                  </div>
                )
              }
            </Popup>
          </li>
          <li className='relative'><Link to="/assignments" onClick={() => setResNav(false)} className='before:absolute before:w-0 before:h-[2px] before:bg-nexa-900 before:bottom-0 before:left-0 before:transition-all before:duration-300 hover:before:w-full'>Assignments</Link></li>
          <li className='relative'><Link to="/projects" onClick={() => setResNav(false)} className='before:absolute before:w-0 before:h-[2px] before:bg-nexa-900 before:bottom-0 before:left-0 before:transition-all before:duration-300 hover:before:w-full'>Projects</Link></li>
        </ul>
    </div>
  )
}

export default ResNav
