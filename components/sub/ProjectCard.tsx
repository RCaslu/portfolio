import React from 'react';

interface Props {
  src: string;
  title: string;
  description: string;
  githubLink: string;
}

const ProjectCard: React.FC<Props> = ({ src, title, description, githubLink }) => {
  return (
    <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer z-50'>
      <img 
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className='w-full object-contain'
      />
      <div className='relative p-4'>
        <h1 className='text-2xl font-semibold text-white'>{title}</h1>
        <p className='mt-2 text-gray-300'>{description}</p>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <button className='mt-4 px-4 py-2 bg-blue-500 cursor-pointer text-white rounded hover:bg-blue-700'>
            View on GitHub
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;