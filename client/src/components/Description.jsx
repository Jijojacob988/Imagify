import React from 'react'
import { assets } from '../assets/assets'
import { motion  } from 'motion/react'

const Description = () => {
  return (
    <motion.div
    initial={{ opacity: 0.2, y: 100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y:0 }}
    viewport={{ once: true }}
    className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
        <p className='text-gray-500 mb-8'>Turn your imagination into visuals</p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
          <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg' />
          <div>
            <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-Powered Text to Image Generator</h2>
            <p className='text-gray-600 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptate facilis nemo aliquid, a sint iste fuga. Corrupti vero voluptas ab est magnam saepe error? Rem maiores explicabo unde fuga.</p>
            <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quaerat alias provident laborum beatae culpa quos maxime nesciunt dolores, voluptates, veniam cupiditate officia natus temporibus! Quae dignissimos id voluptate nihil!</p>

          </div>
        </div>
    </motion.div>
  )
}

export default Description