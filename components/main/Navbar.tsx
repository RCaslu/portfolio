import { Socials } from '@/constants'
import React from 'react'

export const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
        <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
            <a href='#about-me' className='h-auto w-auto flex flex-row items-center'>
                {/*CHANGE THE LOGO*/}
                <img src='/NavLogo.png' 
                alt='Logo' 
                className='h-[70px] w-[70px] cursor-pointer hoover:animate-slowspin' />


                <span className='font-bold ml-[10px] hidden md:block text-gray-300'>
                    Front-End Dev
                </span>
            </a>
        
        <div className='w-[500px] h-full flex flex-row items-center jusitify-between md:mr-20'>
            <div 
            className='flex items-center justify-between border w-full h-auto border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                <a href='#about-me' className='cursor-pointer'>About Me</a>
                <a href='#skills' className='cursor-pointer'>Skills</a>
                <a href='#projects' className='cursor-pointer'>Projects</a>
                <a href='#comments' className='cursor-pointer'>Comments</a>
            </div>
        </div>
        
        {/*CHANGE THE SOCIAL MEDIAS ADD LINKEDIN*/}
        <div className='flex flex-row gap-5'> 
            {Socials.map((social) => (
                <img 
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
                />
            ))}
        </div>
        </div>
    </div>
  )
}
