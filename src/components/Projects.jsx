import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: "Relogio Digital",
      tech: "HTML/CSS/JS",
      link: "https://relogio-digital-animado.vercel.app",
      description: "Meu primeiro projeto com JavaScript - um relogio funcional que toca musica! Aprendi sobre DOM e eventos.",
      featured: true,
      color: "hover:border-[#FF6B6B]"
    },
    {
      title: "Calculadora",
      tech: "HTML/CSS/JS",
      link: "https://calculadora-js-azure.vercel.app",
      description: "*AINDA NÃO FINALIZADO* Calculadora completa com operacoes basicas. Foi um otimo exercicio de logica e design responsivo.",
      featured: false,
      color: "hover:border-[#4ECDC4]"
    },
    {
      title: "App de Clima",
      tech: "HTML/CSS/JS + API",
      link: "https://app-de-clima-basico.vercel.app",
      description: "Primeira vez integrando com API externa! Busca dados meteorologicos em tempo real.",
      featured: false,
      color: "hover:border-[#45B7D1]"
    },
    {
      title: "Portfolio Pessoal",
      tech: "React + Tailwind",
      link: "#inicio",
      description: "Este site aqui mesmo! Criado do zero para praticar React e design moderno.",
      featured: false,
      color: "hover:border-[#96CEB4]"
    }
  ];

  return (
    <div id='projetos' className='min-h-screen w-full flex flex-col items-center justify-center gap-16 p-8'>
      <h1 className='text-center text-5xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent p-1 drop-shadow-lg'>
        Meus Projetos
      </h1>

      <div className='w-full max-w-6xl'>
        {/* Featured Project */}
        <div className='mb-9 group'>
          <a href={projects[0].link} target="_blank" rel="noopener noreferrer" className="block">
            <div className='relative bg-gradient-to-br from-[#FF6B6B] to-[#4ECDC4] p-1 rounded-2xl shadow-2xl transform group-hover:scale-[1.01] transition duration-500'>
              <div className='bg-white rounded-xl p-8 '>
                <div className='flex flex-col md:flex-row md:items-start gap-6'>
                  <div className='flex-1'>
                    <h1 className='text-3xl font-bold text-gray-800 mb-3'>{projects[0].title}</h1>
                    <span className='inline-block text-sm font-medium text-white bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] px-3 py-1 rounded-full mb-4'>
                      {projects[0].tech}
                    </span>
                    <p className='text-gray-600 text-lg leading-relaxed'>{projects[0].description}</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Outros projetos grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {projects.slice(1).map((project, index) => (
            <div key={index} className='group'>
              <a
                href={project.link}
                target={project.title === "Portfolio Pessoal" ? "_self" : "_blank"}
                rel={project.title === "Portfolio Pessoal" ? "" : "noopener noreferrer"}
                className="block"
              >
                <div className={`border-2 border-gray-200 rounded-xl p-6 h-full transform group-hover:-translate-y-2 transition duration-500 ${project.color} bg-white hover:shadow-lg`}>
                  <h1 className='text-xl font-bold text-gray-800 mb-3'>{project.title}</h1>
                  <span className='inline-block text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full mb-3'>
                    {project.tech}
                  </span>
                  <p className='text-gray-600 text-sm leading-relaxed'>{project.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects