import React from 'react'
import image from '../../public/image.jpg'
import { BiLogoGithub, BiLogoInstagram } from 'react-icons/bi'

const Home = () => {
  return (
    <div id='inicio' className='flex min-h-screen w-full items-center justify-center relative overflow-hidden'>
      {/* Background elements */}
      <div className='absolute top-20 left-10 w-72 h-72 bg-[#8ECAE6] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse'></div>
      <div className='absolute bottom-20 right-10 w-96 h-96 bg-[#FFB4A2] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000'></div>
      
      <div className="flex flex-col items-center justify-center gap-10 p-8 text-center relative z-10">
        <div className='relative group'>
          <div className='absolute -inset-4 bg-gradient-to-r from-[#8ECAE6] to-[#FFB4A2] rounded-full blur-lg opacity-30 group-hover:opacity-50 transition duration-500'></div>
          <img 
            src={image} 
            alt="Arthur Barbieri" 
            className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover object-bottom shadow-2xl border-4 border-white/80 transform group-hover:scale-105 transition duration-500" 
          />
        </div>
        
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#0D3B66] to-[#8ECAE6] bg-clip-text text-transparent">
            Arthur Barbieri
          </h1>
          <h2 className='text-xl sm:text-2xl text-gray-600 font-light tracking-wide'>
            Desenvolvedor Web
          </h2>
          <p className='text-gray-600 text-lg leading-relaxed max-w-md mx-auto'>
            Jovem de 18 anos explorando o universo da programação. Cada linha de código é uma nova descoberta!
          </p>
        </div>

        <div className='flex gap-4 pt-4'>
          <a href="https://github.com/arthur-barbieri1" target='_blank' rel="noopener noreferrer" className='group'>
            <BiLogoGithub className='h-12 w-12 p-2 text-[#0D3B66] bg-white rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-[#0D3B66] hover:text-white' />
          </a>
          <a href="https://www.instagram.com/arthurbarbieri._" target='_blank' rel="noopener noreferrer" className='group'>
            <BiLogoInstagram className='h-12 w-12 p-2 text-[#0D3B66] bg-white rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-gradient-to-r hover:from-[#833AB4] hover:to-[#FD1D1D] hover:text-white' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home