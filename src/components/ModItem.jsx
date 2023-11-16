import React from 'react';

const ModItem = ({name, link}) => {
  return (
    <div className='w-[95%] rounded-xl border-2 border-solid border-nexa-900 flex flex-col justify-center items-center my-3 xl:flex-row xl:justify-between xl:w-[55%] max-[830px]:flex-row max-[830px]:justify-between'>
      <p className='text-center my-3 xl:mx-5 xl:max-w-[500px] xl:text-left max-[830px]:max-w-[500px] max-[830px]:text-left max-[830px]:mx-5'>{name}</p>
      <a href="/" target='blank' className='text-center my-3 xl:mx-5 underline max-[830px]:mx-5'>{link}</a>
    </div>
  )
}

export default ModItem;
