import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaNodeJs } from 'react-icons/fa';
import { motion } from 'framer-motion';



const Technologies = () => {
  return (
    <motion.div
    whileInView={{opacity:1, y:0}}
    initial={{opacity:0, y :-100}}
    transition={{duration:1.5}}
     className='border-b border-neutral-800 pb-24'> 
        <h1 className='my-20 text-center text-4xl'>Tech Libraries</h1>
    <motion.div
    whileInView={{opacity:1, x:0}}
    initial={{opacity:0, x:-100}}
    transition={{duration:1.5}}
    className='flex flex-wrap items-center justify-center gap-4'>
       
        <motion.div
        initial={{
            x:10, opacity:0 
        }}
animate={{ x:0, opacity:1 }}
transition={{
  repeat: Infinity,
  repeatType: "reverse",
  duration: 2
}}
         className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiReactjsLine className='text-7xl text-cyan-400' />
        </motion.div>
        <motion.div
              initial={{
                x:10, opacity:0 
            }}
    animate={{ x:0, opacity:1 }}
    transition={{
      repeat: Infinity,
      repeatType: "reverse",
      duration: 2.5
    }}
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <TbBrandNextjs className = 'text-7xl ' />
        </motion.div>
        <motion.div 
              initial={{
                x:0, opacity:4 
            }}
    animate={{ x:1, opacity:0 }}
    transition={{
      repeat: Infinity,
      repeatType: "reverse",
      duration: 3
    }}
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaNodeJs className = 'text-7xl text-green-500' />
        </motion.div>
        
        
    </motion.div>
    </motion.div>
  )
}

export default Technologies