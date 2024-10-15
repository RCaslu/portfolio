import React from 'react'

const Aboutme = () => {
  return (
    <div id='about-me' className='text-center items-center'>
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        About Me
      </h1>
      <div className='md:flex justify-center space-x-6 '>
        <div className='overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]'>
            <img className='md:w-[500px]' src='./profileimage.jpg' />
        </div>

        <div className='md:w-[500px] pt-6 overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]'>
        <h2 className='text-3xl font-semibold text-white'>Início da Jornada</h2>
        <p className='ml-5 mr-5 mt-2 text-gray-300'>
          Comecei minha trajetória na programação durante o primeiro semestre da faculdade de Ciências da Computação. 
          Meu primeiro contato com o desenvolvimento foi com Python, uma linguagem que despertou minha curiosidade e desejo de aprender. 
          Graças a um familiar, tive a oportunidade de realizar meu primeiro freelance, criando um projeto para um restaurante popular do Guará. 
          Apesar da minha inexperiência, aceitei o desafio e, após um período de estudo intenso, consegui entregar um software que continua 
          a ser utilizado até hoje. Desde esse momento, me apaixonei pelo desenvolvimento e sigo em constante evolução, 
          buscando aprender tudo o que ainda não sei e aprimorar minhas habilidades.
        </p>
        <div className='pt-6'>
        <h2 className='text-3xl font-semibold text-white'>Objetivo Profissional</h2>
        <p className='ml-5 mr-5 mt-2 text-gray-300'>
          Meu objetivo é adquirir novas experiências e crescer como desenvolvedor. Estou focado em tornar minhas linhas de código mais inteligentes e minhas estruturas mais elaboradas, sempre seguindo as melhores práticas de arquitetura e clean code. Acredito que a qualidade do código é fundamental para o sucesso de qualquer projeto.
        </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutme
