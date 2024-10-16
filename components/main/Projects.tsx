import React from 'react';
import ProjectCard from '../sub/ProjectCard';

export const Projects = () => {
  return (
    <div 
      id='projects'
      className='flex flex-col items-center justify-center py-20'
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>

      <div className='h-full w-full flex flex-col md:flex-row gap-10 '>
        <ProjectCard
          githubLink='https://vercel.live/link/barbershop-rosy.vercel.app?via=project-screenshot&p=1'
          src="/barbershop.png"
          title="BarberShop WebApp"
          description="O BarberShop App é uma aplicação web com foco mobile desenvolvida para facilitar o agendamento de serviços em barbearias. Os usuários podem selecionar uma barbearia, agendar serviços, cancelar agendamentos, autenticar-se com o Google, pesquisar por barbearias ou serviços e verificar seus agendamentos futuros."
        />
        <ProjectCard
          githubLink='https://lp-nivia-oliveira.vercel.app/'
          src="/nivia.png"
          title="LP Nivia Oliveira"
          description="Projeto desenvolvido para Nivia Oliveira com o intuito de divulgar a campanha Mulheres de alta Performance exclusiva para mulheres. Para este projeto, foi utilizado Next.js, TailwindCSS, React e Firebase para armazenamento dos dados utilizados no forms."
        />
        <ProjectCard
          githubLink='https://fcis-updated.vercel.app/'
          src="/FCIS.png"
          title="FCIS"
          description="Projeto desenvolvido para o Método CIS criado por Paulo Vieira. Projeto foi exibido em Portugal, Algarve, Suiça e outros países. Para este projeto, foi utilizado Next.js, TailwindCSS, React e Firebase para armazenamento dos dados utilizados no forms."
        />
      </div>
    </div>
  );
}