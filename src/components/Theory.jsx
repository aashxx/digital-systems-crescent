import React, { useEffect } from 'react';
import { TbLogicXnor } from 'react-icons/tb';
import { LuBinary } from 'react-icons/lu';
import { GiCircuitry } from 'react-icons/gi';
import { HiOutlineCpuChip } from 'react-icons/hi2';
import { GiGears } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Theory = () => {

  useEffect(() => {
    document.title = `Digital Systems - Theory`;
  }, [])

  return (
    <div>
      <section className='text-nexa-900 font-poppins flex flex-wrap items-center justify-center my-10'>
        <div className='h-[350px] flex flex-col items-center justify-around mx-16 my-10'>
          <Link to={'/academics/theory/module1'} className=' h-[350px] w-full font-extrabold border-2 border-solid border-nexa-900 rounded-lg shadow-nexa-900 shadow-3xl hover:bg-nexa-900 hover:text-white hover:shadow-[white] transition-all duration-500 xl:w-[350px] flex items-center justify-center'><LuBinary className='text-[20rem] text-center' /></Link>
          <div className='mt-5'>
            <h3 className='uppercase font-comfortaa text-3xl font-extrabold text-center'>Module i</h3>
            <p className='uppercase font-comfortaa text-md font-extralight text-center'>BOOLEAN ALGEBRA & LOGIC GATES</p>
          </div>
        </div>
        <div className='h-[350px] flex flex-col items-center justify-around mx-16 my-10'>
          <Link to={'/academics/theory/module2'} className=' h-[350px] w-full font-extrabold border-2 border-solid border-nexa-900 rounded-lg shadow-nexa-900 shadow-3xl hover:bg-nexa-900 hover:text-white hover:shadow-[white] transition-all duration-500 xl:w-[350px] flex items-center justify-center'><TbLogicXnor className='text-[20rem] text-center' /></Link>
          <div className='mt-5'>
            <h3 className='uppercase font-comfortaa text-3xl font-extrabold text-center'>Module ii</h3>
            <p className='uppercase font-comfortaa text-md font-extralight text-center'>COMBINATIONAL LOGIC</p>
          </div>
        </div>
        <div className='h-[350px] flex flex-col items-center justify-around mx-16 my-10'>
        <Link to={'/academics/theory/module3'} className=' h-[350px] w-full font-extrabold border-2 border-solid border-nexa-900 rounded-lg shadow-nexa-900 shadow-3xl hover:bg-nexa-900 hover:text-white hover:shadow-[white] transition-all duration-500 xl:w-[350px] flex items-center justify-center'><HiOutlineCpuChip className='text-[20rem] text-center' /></Link>
          <div className='mt-5'>
            <h3 className='uppercase font-comfortaa text-3xl font-extrabold text-center'>Module iii</h3>
            <p className='uppercase font-comfortaa text-md font-extralight text-center'>SYNCHRONOUS SEQUENTIAL LOGIC</p>
          </div>
        </div>
        <div className='h-[350px] flex flex-col items-center justify-around mx-16 my-10'>
        <Link to={'/academics/theory/module4'} className=' h-[350px] w-full font-extrabold border-2 border-solid border-nexa-900 rounded-lg shadow-nexa-900 shadow-3xl hover:bg-nexa-900 hover:text-white hover:shadow-[white] transition-all duration-500 xl:w-[350px] flex items-center justify-center'><GiCircuitry className='text-[20rem] text-center' /></Link>
          <div className='mt-5'>
            <h3 className='uppercase font-comfortaa text-3xl font-extrabold text-center'>Module iv</h3>
            <p className='uppercase font-comfortaa text-md font-extralight text-center'>REGISTERS & COUNTERS</p>
          </div>
        </div>
        <div className='h-[350px] flex flex-col items-center justify-around mx-16 my-10'>
        <Link to={'/academics/theory/module5'} className='h-[350px] w-full font-extrabold border-2 border-solid border-nexa-900 rounded-lg shadow-nexa-900 shadow-3xl hover:bg-nexa-900 hover:text-white hover:shadow-[white] transition-all duration-500 xl:w-[350px] flex items-center justify-center'><GiGears className='text-[20rem] text-center' /></Link>
          <div className='mt-5'>
            <h3 className='uppercase font-comfortaa text-3xl font-extrabold text-center'>Module v</h3>
            <p className='uppercase font-comfortaa text-md font-extralight text-center'>MEMORIES & REGISTER</p>
            <p className='uppercase font-comfortaa text-md font-extralight text-center'>TRANSFER LOGIC</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Theory
