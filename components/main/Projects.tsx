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
          description="The BarberShop App is a mobile-focused web application developed to facilitate the scheduling of services in barbershops. Users can select a barbershop, schedule services, cancel appointments, authenticate with Google, search for barbershops or services, and check their upcoming appointments."
        />
        <ProjectCard
          githubLink='https://lp-nivia-oliveira.vercel.app/'
          src="/nivia.png"
          title="LP Nivia Oliveira"
          description="Project developed for Nivia Oliveira to promote the exclusive high-performance women campaign. For this project, Next.js, TailwindCSS, React, and Firebase were used for storing the data used in the forms."
        />
        <ProjectCard
          githubLink='https://fcis-updated.vercel.app/'
          src="/FCIS.png"
          title="FCIS"
          description="Project developed for the CIS Method created by Paulo Vieira. The project was showcased in Portugal, Algarve, Switzerland, and other countries. For this project, Next.js, TailwindCSS, React, and Firebase were used for storing the data used in the forms."
        />
      </div>
    </div>
  );
}
