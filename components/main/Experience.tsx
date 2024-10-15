import React from 'react'

const Experience = () => {
  return (
    <div id='experience' className='text-center'>
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Experience
      </h1>
      <div className='md:flex justify-center p-4 space-y-12 xl:space-y-0'>
        <div className='md:w-[670px] overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] '>
        <section className='my-8 justify-center'>
            <div className='pb-2'>
                <h2 className='text-3xl font-semibold text-white'>Febracis Lisboa</h2>
            </div>
            <img className='mx-auto' src='./febracis.jpg' width={500}/>
            <p className='mt-2 text-gray-300'>
            Atuei como desenvolvedor na Febracis Lisboa, onde tive a oportunidade de criar landing pages para diversos clientes, incluindo pessoas influentes como Paulo Vieira e Nivia Oliveira. Essa experiência me permitiu não apenas aplicar minhas habilidades técnicas, mas também entender a importância de atender às necessidades dos usuários e clientes.
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
            Atuei como suporte técnico na NTSEC, onde tive a oportunidade de ajudar clientes a resolver problemas técnicos e fornecer soluções para suas necessidades. Essa experiência me permitiu desenvolver minhas habilidades de comunicação, trabalho em equipe, noções de redes e cybersecurity. 
            </p>
        </section>
        </div>
      </div>
    </div>
  )
}

export default Experience