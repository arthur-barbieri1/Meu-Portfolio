import React, { useRef } from 'react'
import { BiSend, BiUser, BiEnvelope, BiMessageDetail } from 'react-icons/bi'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_g397g58', 
      'template_beosgvd', 
      form.current, 
      'QY16yxoaxb9pM8oHH'
    ).then(
      (result) => {
        alert('Mensagem enviada com sucesso! 🚀');
        e.target.reset();
      },
      (error) => {
        alert('Erro ao enviar mensagem. Tente novamente! 😕');
      }
    );
  }

  return (
    <div id='contato' className='flex min-h-screen w-full flex-col items-center justify-center gap-12 p-6 md:p-8 drop-shadow-lg'>
      <div className="text-center max-w-lg">
        <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4 underline decoration-gray-300 decoration-2' style={{ textUnderlineOffset: '10px' }}>
          Bora conversar?
        </h1>
        <p className='text-gray-600 text-lg'>
          Se tem uma ideia ou quer trocar uma figurinha sobre codigo, manda ver!
        </p>
      </div>

      <form ref={form} onSubmit={sendEmail} className='w-full max-w-md space-y-5'>
        <div className='space-y-5'>
          <div className='relative'>
            <BiUser className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
            <input
              type="text"
              name="nome"
              placeholder='Seu nome'
              required
              className='w-full rounded-lg border border-gray-300 pl-10 pr-4 py-3 outline-none focus:border-[#6A8EAE] focus:ring-1 focus:ring-[#6A8EAE] bg-white'
            />
          </div>

          <div className='relative'>
            <BiEnvelope className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
            <input
              type="email"
              name="email"
              placeholder='Seu email'
              required
              className='w-full rounded-lg border border-gray-300 pl-10 pr-4 py-3 outline-none focus:border-[#955BA5] focus:ring-1 focus:ring-[#955BA5] bg-white'
            />
          </div>
        </div>

        <div className='relative'>
          <BiMessageDetail className='absolute left-3 top-4 text-gray-400' />
          <textarea
            name="mensagem"
            placeholder='Fala aqui...'
            rows={5}
            required
            className='w-full rounded-lg border border-gray-300 pl-10 pr-4 py-3 outline-none focus:border-[#57CC99] focus:ring-1 focus:ring-[#57CC99] resize-none bg-white'
          ></textarea>
        </div>

        <button
          type="submit"
          className='w-full bg-gray-800 text-white rounded-lg px-6 py-3 font-medium transition-all duration-300 hover:bg-gray-700 flex items-center justify-center gap-2 group'
        >
          <BiSend className='text-2xl group-hover:translate-x-1 transition-transform duration-300' />
          Enviar mensagem
        </button>
      </form>

      <div className='text-center text-gray-500 text-sm mt-8'>
        <p>Ou me encontra nas redes sociais ali em cima 👆</p>
      </div>
    </div>
  )
}

export default Contact