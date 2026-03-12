import React from 'react'
import { BiBriefcase, BiCodeAlt, BiHome, BiMailSend } from 'react-icons/bi'

const HeaderLeft = () => {
    const menuItems = [
        { icon: <BiHome />, label: 'Inicio', href: '#inicio' },
        { icon: <BiCodeAlt />, label: 'Experiencia', href: '#experiencia' },
        { icon: <BiBriefcase />, label: 'Projetos', href: '#projetos' },
        { icon: <BiMailSend />, label: 'Contato', href: '#contato' }
    ]

    return (
        <div className='md:flex-[1]'>
            <div className='min-h-screen top-0 hidden md:sticky md:flex items-center justify-start pl-8 xl:pl-12 bg-gradient-to-b from-gray-900 to-gray-800 text-white'>
                <div className='space-y-3'>
                    {menuItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className='group flex items-center gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-white/10 hover:translate-x-2 w-48'
                        >
                            <div className='text-xl text-gray-400 group-hover:text-[#6A8EAE] transition-colors duration-300'>
                                {item.icon}
                            </div>
                            <span className='font-medium text-gray-300 group-hover:text-white tracking-wide'>
                                {item.label}
                            </span>
                            <div className='w-2 h-2 bg-[#955BA5] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-auto'></div>
                        </a>
                    ))}

                    <div className='pt-6'>
                        <div className='w-32 h-1 bg-gradient-to-r from-[#6A8EAE] to-[#955BA5] rounded-full'></div>
                    </div>
                </div>
            </div>

            <div className='fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 md:hidden'>
                <div className='flex items-center gap-1 bg-gray-800/95 backdrop-blur-sm rounded-2xl p-2 border border-gray-700 shadow-lg'>
                    {menuItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className='flex flex-col items-center gap-1 p-3 rounded-xl transition-all duration-200 hover:bg-white/10 min-w-16'
                        >
                            <div className='text-lg text-gray-400'>
                                {item.icon}
                            </div>
                            <span className='text-xs text-gray-300 font-medium'>
                                {item.label}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HeaderLeft