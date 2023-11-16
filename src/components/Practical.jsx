import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { animations } from '../App';

const Practical = () => {

  useEffect(() => {
    document.title = `Digital Systems - Laboratory`;
  }, [])

  return (
    <div className='font-poppins text-nexa-900'>
      <motion.div {...animations.hero} className=' bg-nexa-900 xl:m-10 my-10 xl:w-[800px] xl:mx-auto rounded-lg'>
        <h2 className='font-extrabold text-white text-lg font-comfortaa text-center pt-10'>PRACTICAL</h2>
        <ol className='text-white text-sm font-comfortaa mt-10 mx-2 pb-10 xl:px-10'>
          <li className='py-1'>1. Verification of the truth tables of TTL gates. </li>
          <li className='py-1'>2. Verify the NAND and NOR gates as universal logic gates. </li>
          <li className='py-1'>3. Design and verification of the truth tables of Half and Full adder circuits. </li>
          <li className='py-1'>4. Design and verification of the truth tables of Half and Full subtractor circuits. </li>
          <li className='py-1'>5. Verification of the truth table of the Multiplexer 74150</li>
          <li className='py-1'>6. Verification of the truth table of the De-Multiplexer 74154. </li>
          <li className='py-1'>7. Design and test of an S-R flip-flop using NOR/NAND gates. </li>
          <li className='py-1'>8. Verify the truth table of a J-K flip-flop (7476)</li>
          <li className='py-1'>9. Verify the truth table of a D flip-flop (7474) </li>
          <li className='py-1'>10. Operate the counters 7490, 7493. </li>
          <li className='py-1'>11. Design of 4-bit shift register (shift right). </li>
          <li className='py-1'>12. Design of modulo-4 counter using J K flip flop. </li>
        </ol>
      </motion.div>
      <div className='flex flex-col items-center'>
        <h2 className='text-2xl uppercase font-bold'>Study Materials</h2>
      </div>
    </div>
  )
}

export default Practical
