"use client"

import { slideInFromLeft, slideInFromTop } from '@/utils/motion'
import { motion } from 'framer-motion'
import { SparklesIcon } from '@heroicons/react/24/solid';
import { Badge } from '../ui/badge';

import React from 'react'

export const SkillsText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
        <motion.div 
        variants={slideInFromTop}
        className='Welcome-box py-[8px] px-[7px] border-[#7042f88b] opacity-[0.9]'
        >
            <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
            {/* <h1 className='Welcome-text text-[20px]'>Welcome to</h1> */}
            <Badge className='Welcome-text text-[15px]'>
                Think better with Next JS, React and Tailwind CSS
            </Badge>
        </motion.div>

        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
            Making apps with modern technologies
        </motion.div>


    </div>
  )
}
