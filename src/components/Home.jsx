import React from 'react';
import { BsCheck2All } from 'react-icons/bs';
import { GiProcessor } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {

  const animations = {
    left: {
        initial: {
            x: '-100%',
            opacity: 0
        },

        whileInView: {
            x: 0,
            opacity: 1
        },

        viewport: {
          once: true
        }
    },

    right: {
        initial: {
            x: '100%',
            opacity: 0
        },

        whileInView: {
            x: 0,
            opacity: 1
        },

        transition: {
          delay: '0.5'
        },

        viewport: {
          once: true
        }
    }
  }

  return (
    <div className='text-nexa-900 font-poppins'>
      <div className='w-full h-[70px] my-10 lg:w-[100%] xl:hidden'>
        <img className='max-h-full max-w-full mx-auto' src="https://byt.digital/wordpress/crescent/wp-content/themes/crescent/theme/images/logo.png" alt="logo" />
      </div>
      <div className=' bg-nexa-900'>
        <h2 className='font-extrabold text-white text-2xl font-poppins text-center p-2 mt-10 mx-10'>DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</h2>
      </div>
      <section className="flex justify-between flex-wrap my-10 mx-10 xl:mx-[150px] overflow-hidden">
        <motion.div {...animations.left} transition={{delay: '0.2'}} className='flex flex-col items-center xl:items-start'>
            <h2 className='font-poppins text-4xl text-center xl:text-left mb-7 xl:max-w-[550px] font-extrabold xl:text-6xl'>Deep Dive Into the Digital Systems Course</h2>
            <p className='font-medium text-xl p-2'>CSD2102</p>
            <h2 className='text-4xl xl:text-3xl font-poppins p-2 text-center xl:text-left'>DIGITAL SYSTEMS</h2>
            <Link to={'/academics/theory'} className='border-2 border-solid border-nexa-900 py-2 px-5 text-xl my-7 shadow-nexa-900 shadow-3xl font-bold'>Start Course</Link>
            <p className='xl:max-w-[550px] text-center xl:text-start xl:hidden'>Learn Boolean algebra, logic gates, analysis and design of combinational and sequential circuits incorporating latches and flip-flops. Evaluate state concepts and transitions in sequential circuits, and have practical expertise in implementing them. </p>
        </motion.div>
        <motion.div {...animations.right} className='flex flex-col w-full xl:w-[300px] xl:mx-20 my-10 xl:my-[unset] items-center justify-center'>
          <GiProcessor className='text-[13rem] xl:text-[20rem] animate-upDown' />
        </motion.div>
      </section>
      <section className='flex justify-evenly flex-wrap xl:m-20 m-10 overflow-hidden'>
        <div className='xl:w-[425px]'>
          <h3 className='text-2xl flex items-center justify-center gap-3 mb-10 font-bold'><BsCheck2All className='text-5xl font-extrabold' />Course Objectives</h3>
          <p className='mb-5'><strong>COB1:</strong> To explore Boolean algebra, Boolean functions and realization of functions with basic gates.</p>
          <p className='mb-5'><strong>COB2:</strong> To design combinational and sequential circuits.</p>
          <p className='mb-5'><strong>COB3:</strong> To use the concepts of state and state transition for analysis and design of sequential circuits.</p>
          <p className='mb-5'><strong>COB4:</strong> To study and investigate the sequential networks using counters and shift registers.</p>
          <p className='mb-5'><strong>COB5:</strong> To learn Hardware Design language programming for Digital Systems.</p>
        </div>
        <div className="xl:w-[425px] mt-[50px] xl:mt-[unset]">
          <h3 className='text-2xl flex items-center justify-center gap-3 mb-10 font-bold'><BsCheck2All className='text-5xl font-extrabold' />Course Outcomes</h3>
          <p className='mb-5'>After completion of the course, students should be able to</p>
          <p className='mb-5'><strong>CO1:</strong> Understand the fundamental concepts of Boolean algebra and logic gates.</p>
          <p className='mb-5'><strong>CO2:</strong> Analyze and design combinational circuits.</p>
          <p className='mb-5'><strong>CO3:</strong> Design sequential circuits containing latch and flip-flops.</p>
          <p className='mb-5'><strong>CO4:</strong> Evaluate the concepts of state and state transition for analysis and design of sequential circuits.</p>
          <p className='mb-5'><strong>CO5:</strong> Implement digital logic circuits using logic gates.</p>
        </div>
      </section>
    </div>
  )
}

export default Home;
