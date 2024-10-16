"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import { Badge } from '../ui/badge';

const HeroContent = () => {
    return ( 
        <motion.div
        initial="hidden"
        animate="visible"
        className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
        >
            <div className='justify-center items-center md:items-start h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
                <motion.div 
                variants={slideInFromTop}
                className='Welcome-box py-[8px] px-[7px] border-[#7042f88b] opacity-[0.9]'
                >
                    <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
                    {/* <h1 className='Welcome-text text-[20px]'>Welcome to</h1> */}
                    <Badge className='Welcome-text text-[15px]'>Front-End Developer Portfolio</Badge>

                </motion.div>

                <motion.div
                variants={slideInFromLeft(0.5)}
                className='md:text-start text-center flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
                
                >
                <span>
                Providing  <span 
                className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> the best 
                </span> project experience 
                </span>
                </motion.div>

                <motion.p
                variants={slideInFromLeft(0.8)}
                className='md:text-start text-center text-lg text-gray-400 my-5 max-w-[600px]'
                >
                    I am a Front-End Developer with a passion for creating beautiful and functional user interfaces.  
                    I am always looking for new challenges and opportunities to grow as a developer.
                    Check out my projects, skills and feel free to contact me.
                </motion.p>

                <motion.a
                href='https://linktr.ee/rcaslu'
                variants={slideInFromLeft(1)}
                className='py-2 button-primary text-center text-white cursor-pointer rounded-lg w-[500px] max-w-[200px]'
                >
                    Learn More!
                </motion.a>
            </div>

            <motion.div 
            variants={slideInFromRight(0.8)}
            className='w-full h-full flex justify-center items-center'
            >
                <img src='/mainIconsdark.svg' alt='Work Icons' className='w-[650px] h-[650px]' />
            </motion.div>
        </motion.div>
     );
}
 
export default HeroContent;