import React from 'react'

export const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5'>
        <div className='w-full h-full flex flex-row items-center justify-center m-auto px-[10px]'>
            
        
        <div className='w-[500px] h-full flex flex-row items-center jusitify-between md:mr-20'>
            <div 
            className='flex items-center justify-between border w-full h-auto border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                <a href='#about-me' className='cursor-pointer'>About Me</a>
                <a href='#experience' className='cursor-pointer'>Experience</a>
                <a href='#skills' className='cursor-pointer'>Skills</a>
                <a href='#projects' className='cursor-pointer'>Projects</a>
            </div>
        </div>
        
        
        </div>
    </div>
  )
}
