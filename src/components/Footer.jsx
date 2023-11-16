import React from 'react';
import { AiFillYoutube, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='bg-nexa-900 text-white flex flex-col justify-between gap-20 items-center xl:flex-row p-5 xl:px-28'>
        <div className='flex flex-col items-center'>
            <p className='font-medium text-xl p-2'>CSD2102</p>
            <h2 className='text-4xl xl:text-3xl font-poppins p-2'>DIGITAL SYSTEMS</h2>
        </div>
        <div className='flex flex-col items-center xl:border-x-2 xl:border-white xl:border-solid xl:px-10'>
            <img className='max-h-[100px] max-w-[100px] rounded-[50%]' src="https://pbs.twimg.com/profile_images/1547506146713686016/3tnGE369_400x400.jpg" alt="logo" />
            <p  className='font-medium text-xl p-2'>BSACIST</p>
            <p className='text-sm text-center'>DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</p>
        </div>
        <div>
            <h2 className='font-medium text-xl p-2'>SOCIALS</h2>
            <a href='https://www.youtube.com/@BSACrescentInstitute' target='blank' className='flex items-center gap-2 text-lg'>
                <AiFillYoutube className='text-2xl' />
                YOUTUBE
            </a>
            <a href="https://www.instagram.com/bsacrescentinstitute/?hl=en" target='blank' className='flex items-center gap-2 text-lg'>
                <AiFillInstagram className='text-2xl' />
                INSTAGRAM
            </a>
            <a href="https://www.linkedin.com/school/crescentinstitute/mycompany/" target='blank' className='flex items-center gap-2 text-lg'>
                <AiFillLinkedin className='text-2xl' />
                LINKEDIN
            </a>
        </div>
    </footer>
  )
}

export default Footer;