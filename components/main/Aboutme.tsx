import React from 'react'

const Aboutme = () => {
  return (
    <div id='about-me' className='text-center items-center'>
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        About Me
      </h1>
      <div className='md:flex justify-center md:space-x-6 '>
        <div className='overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]'>
            <img className='md:w-[500px]' src='./image.jpeg' />
        </div>

        <div className='md:w-[500px] pt-6 overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]'>
        <h2 className='text-3xl font-semibold text-white'>Start of the Journey</h2>
        <p className='ml-5 mr-5 mt-2 text-gray-300'>
        I started my programming journey during the first semester of my Computer Science degree. My first contact with development was with Python, a language that sparked my curiosity and desire to learn. Thanks to a relative, I had the opportunity to take on my first freelance project, creating a website for a popular restaurant in Guará. Despite my inexperience, I accepted the challenge, and after a period of intense study, I was able to deliver software that is still in use today. Since that moment, I fell in love with development and continue to evolve, seeking to learn everything I dont know and improve my skills.
        </p>
        <div className='pt-6'>
        <h2 className='text-3xl font-semibold text-white'>Professional Goals</h2>
        <p className='ml-5 mr-5 mt-2 text-gray-300'>
        My goal is to acquire new experiences and grow as a developer. I am focused on making my code more efficient and my structures more sophisticated, always following the best practices of architecture and clean code. I believe that code quality is fundamental to the success of any project.
        </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutme
