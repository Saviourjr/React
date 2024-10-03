import React from 'react'
import { EDUCATIONS } from '../constants'
import { motion } from 'framer-motion'

const Education = () => {
  
  return (
    <motion.div
    whileInView={{opacity:1, y:0}}
    initial={{opacity:0, y:-100}}
    transition={{duration:1.5}}

     className='border-b border-neutral-900 pb-4'>
    <h1 className='my-20 text-center text-4xl'>Education</h1>
    <div>
    {EDUCATIONS.map((education, index) => (
      <div 
      
      key={index} 
      className='mb-8 flex flex-wrap lg:justify-center'>
        <motion.div 
         whileInView={{opacity:1, x:0}}
         initial={{opacity:0, x:-100}}
         transition={{duration:1}}
        className='w-full lg:w-1/4'>
        <p className='mb-2 text-sm text-neutral-400'>{education.year} </p>
        </motion.div>
        <motion.div 
         whileInView={{ x:0,opacity:1}}
         initial={{opacity:0, x:100}}
         transition={{duration:1}}
        className='w-full  max-w-xl lg:w-3/4'>
        <h6 className='mb-2 font-semibold'>{education.role} 
          -{""}
           <span className='text-sm text-purple-100'> 
          {education.Institution}</span></h6>
          <p className='mb-4 text-neutral-400'>{education.description}</p> 
       {education.technologies.map((tech, index) => (
        <span className='mr-2 mt-4 rounded bg-neutral-900 py-1 text-sm font-medium text-purple-800' key={index}>{tech}</span>
       ))}
        </motion.div>
        </div>
    ))}
    </div>
  </motion.div>)
}

export default Education