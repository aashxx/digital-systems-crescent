import React, { useContext, useEffect } from 'react';
import { animations } from '../App';
import { motion } from 'framer-motion';
import ModItem from './ModItem';
import { ModContext } from '../contexts/ModContext';
import Loader from './Loader';


const Mod1 = () => {

  const context = useContext(ModContext);
  const {load, materials, fetchData} = context;

  const db = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ4q-CQKtQQ9lgIo9BgX7QHLw-_AfdqtZmPfW8o9kSxHue0NkllAGVvA6A_IXhc1xApNlEqbFoWadAR/pub?gid=0&single=true&output=csv';

  useEffect(() => {
    fetchData(db);
  }, [])

  return (
    <motion.div {...animations.hero} className='font-poppins text-nexa-900'>
      <div className=' bg-nexa-900 xl:m-10 my-10 xl:w-[800px] xl:mx-auto rounded-lg'>
        <h2 className='font-extrabold text-white text-lg font-comfortaa text-center pt-10'>MODULE I</h2>
        <h2 className='font-extrabold text-white text-2xl font-comfortaa text-center m-10'>BOOLEAN ALGEBRA & LOGIC GATES</h2>
        <p className='text-white text-sm font-comfortaa text-justify mt-10 mx-2 pb-10 xl:px-10'>Binary Number Systems - Binary Arithmetic - Binary Codes - Boolean Algebra and Theorems -Boolean functions- Canonical and Standard forms - Logic operations-Logic Gates - Gate Level Minimization - K-Map method- Product of sums simplification - Don't care conditions- NAND and NOR implementation - Other two level implementation - Exclusive OR function - Hardware Description Language.</p>
      </div>
      <div className='flex flex-col items-center'>
        <h2 className='text-2xl uppercase font-bold'>Study Materials</h2>
      </div>
      <div className='flex flex-col items-center'>
        {
          load ? <Loader /> :
          materials.map((material, i) => (
            <ModItem key={i} name={material.name} link={material.link} />
          ))
        }
      </div>
    </motion.div>
  )
}

export default Mod1;
