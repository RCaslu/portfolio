import React from 'react'

const Experience = () => {
  return (
    <div id='experience' className='text-center'>
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Experience
      </h1>
      <div className='md:flex justify-center md:p-4 space-y-12 xl:space-y-0'>
        <div className='md:w-[670px] overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] '>
        <section className='my-8 justify-center'>
            <div className='pb-2'>
                <h2 className='text-3xl font-semibold text-white'>Febracis Lisboa</h2>
            </div>
            <img className='mx-auto' src='./febracis.jpg' width={500}/>
            <p className='mt-2 text-gray-300'>
            I worked as a developer at Febracis Lisboa, where I had the opportunity to create landing pages for various clients, including influential people like Paulo Vieira and Nivia Oliveira. This experience allowed me to not only apply my technical skills but also understand the importance of meeting the needs of users and clients.
            </p>
        </section>
        </div>

        <div className='md:w-[670px] bg-transparent md:ml-5 overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]'>
        <section className='my-8 justify-center'>
        <div className='pb-2'>
                <h2 className='text-3xl font-semibold text-white'>NTSEC</h2>
            </div>
            <img className='mx-auto' src='./NTSEC.jpg' width={500}/>
            <p className='mt-2 text-gray-300'>
            I worked as a technical support specialist at NTSEC, where I had the opportunity to help clients resolve technical issues and provide solutions for their needs. This experience allowed me to develop my communication skills, teamwork abilities, as well as my knowledge of networking and cybersecurity.
            </p>
        </section>
        </div>
      </div>
    </div>
  )
}

export default Experience