import React from 'react'

const Experience = () => {
  const experiences = [
    {
      periodo: "2024 - Agora",
      titulo: "Aprendendo React",
      descricao: "Estou estudando React e Tailwind CSS. Criando componentes e aprendendo na pratica como funciona.",
      cor: "bg-blue-500"
    },
    {
      periodo: "2023 - 2024",
      titulo: "Inicio na Programação",
      descricao: "Meus primeiros passos com HTML, CSS e JavaScript. Fiz projetos como calculadora, relogio e app de clima.",
      cor: "bg-green-500"
    },
    {
      periodo: "Futuro",
      titulo: "Proximos Objetivos",
      descricao: "Quero aprender TypeScript, Next.js e continuar evoluindo minhas habilidades como desenvolvedor.",
      cor: "bg-purple-500"
    }
  ];

  return (
    <div id='experiencia' className='min-h-screen w-full flex items-center justify-center p-6'>
      <div className="max-w-3xl w-full">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 drop-shadow-lg">Minha Jornada</h1>
          <p className="text-gray-500">Do inicio ate agora</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-4">

              {/* Linha lateral */}
              <div className="flex flex-col items-center">
                <div className={`w-4 h-4 rounded-full ${exp.cor}`}></div>
                {index < experiences.length - 1 && (
                  <div className="w-1 h-full bg-gray-300 mt-2"></div>
                )}
              </div>

              {/* Conteudo */}
              <div className="flex-1 pb-8">
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">

                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-sm font-medium text-white px-3 py-1 rounded-full ${exp.cor}`}>
                      {exp.periodo}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {exp.titulo}
                  </h3>

                  <p className="text-gray-600">
                    {exp.descricao}
                  </p>

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Experience