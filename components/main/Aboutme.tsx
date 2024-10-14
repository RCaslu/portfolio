import React from 'react'

const Aboutme = () => {
  return (
    <div id='about-me' className='text-center items-center'>
      <h1 className="text-center text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        About Me
      </h1>
      <div className='md:flex justify-center text-center'>
        <div className=''>
          
        </div>   
      </div>

      <div className='md:flex '>
      <section className='my-8'>
        <h2 className='text-3xl font-semibold text-white'>Início da Jornada</h2>
        <img src='./profileimage.jpg' width={400} className='mx-auto'/>
        <p className='mt-2 text-gray-300'>
          Comecei minha trajetória na programação durante o primeiro semestre da faculdade de Ciências da Computação. 
          Meu primeiro contato com o desenvolvimento foi com Python, uma linguagem que despertou minha curiosidade e desejo de aprender. 
          Graças a um familiar, tive a oportunidade de realizar meu primeiro freelance, criando um projeto para um restaurante popular do Guará. 
          Apesar da minha inexperiência, aceitei o desafio e, após um período de estudo intenso, consegui entregar um software que continua 
          a ser utilizado até hoje. Desde esse momento, me apaixonei pelo desenvolvimento e sigo em constante evolução, 
          buscando aprender tudo o que ainda não sei e aprimorar minhas habilidades.
        </p>
      </section>

      <section className='my-8 items-center'>
        <h2 className='text-3xl font-semibold text-white'>Objetivo Profissional</h2>
        <img src='./arrow.avif' width={500} />
        <p className='mt-2 text-gray-300'>
          Meu objetivo é adquirir novas experiências e crescer como desenvolvedor. Estou focado em tornar minhas linhas de código mais inteligentes e minhas estruturas mais elaboradas, sempre seguindo as melhores práticas de arquitetura e clean code. Acredito que a qualidade do código é fundamental para o sucesso de qualquer projeto.
        </p>
      </section>

      <section className='my-8'>
        <h2 className='text-3xl font-semibold text-white'>Experiência Profissional</h2>
        <img src='./febracis.jpg' width={500}/>
        <p className='mt-2 text-gray-300'>
          Atuei como desenvolvedor na Febracis Lisboa, onde tive a oportunidade de criar landing pages para diversos clientes, incluindo pessoas influentes como Paulo Vieira e Nivia Oliveira. Essa experiência me permitiu não apenas aplicar minhas habilidades técnicas, mas também entender a importância de atender às necessidades dos usuários e clientes.
        </p>
      </section>
      </div>
    </div>
  )
}

export default Aboutme
