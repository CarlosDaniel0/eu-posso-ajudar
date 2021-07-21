import React from 'react'
import { CogIcon, UserCircleIcon, ShieldCheckIcon, InboxInIcon, HeartIcon, ChevronDownIcon } from '@heroicons/react/outline'
import { findClass } from '../../utils/findClass'
import Link from 'next/link'

const Instituicao = ({children, route}) => {
  function rowOptions () {
    const options = document.querySelector('.options')
    const { classes, classFind } = findClass(options, 'hidden')
    options.className += classFind ? `${classes}` : `${classes} hidden`
  }
  
  return (
    <React.Fragment>
    <div className='md:grid grid-cols-12 md:my-4 gap-6'>
      <div className='md:col-span-2 bg-blue-450 md:h-screen md:border md:rounded-tr-2xl md:rounded-br-2xl'>
        <button className='text-white focus:outline-none text-2xl w-full block md:hidden p-2 rounded shadow' onClick={rowOptions}>Opções <ChevronDownIcon className='inline-block w-6' /></button>
        <ul className='options md:mt-4 md:ml-1 absolute md:relative bg-blue-450 left-0 right-0 transition easy-in-out duration-300 md:block hidden'>
          <Link href='/perfil/instituicao/conta'>
            <a>
              <li
                onClick={() => {
                  route(old => ({...old, name: 'conta', element: <Conta />})) 
                  }}
                className='text-white  p-2 hover:bg-blue-500 cursor-pointer border-l-4 border-blue-500'><UserCircleIcon className='inline-block w-8 md:w-6 mr-2' />    
                  Conta
              </li>
            </a>
          </Link>
          <Link href='/perfil/instituicao/doacoes'>
            <a>
              <li 
                onClick={() => {
                  route(old => ({...old, name: 'doacoes', element: <Doacoes />}))
                }}
                className='text-white  p-2 hover:bg-blue-500 cursor-pointer border-l-4 border-blue-500'><HeartIcon className='inline-block w-8 md:w-6 mr-2' />
                Doações
                </li>
              </a>
            </Link>
          <Link href='/perfil/instituicao/mensagens'>
            <a>
              <li 
                onClick={() => {
                  route(old => ({...old, name: 'mensagens', element: <Mensagens />}))
                }}
                className='text-white  p-2 hover:bg-blue-500 cursor-pointer border-l-4 border-blue-500'><InboxInIcon className='inline-block w-8 md:w-6 mr-2' />
                Mensagens
              </li>
            </a>
          </Link>
          <Link href='/perfil/instituicao/seguranca'>
            <a>
              <li 
                onClick={() => {
                  route(old => ({...old, name: 'seguranca', element: <Seguranca />}))
                }}
                className='text-white  p-2 hover:bg-blue-500 cursor-pointer border-l-4 border-blue-500'><ShieldCheckIcon className='inline-block w-8 md:w-6 mr-2' />
                Segurança
              </li>
            </a>
          </Link>
          <Link href='/perfil/instituicao/configuracoes'>
            <a>
              <li 
                onClick={() => {
                  route(old => ({...old, name: 'configuracoes', element: <Configuracoes />}))
                }}
                className='text-white  p-2 hover:bg-blue-500 cursor-pointer border-l-4 border-blue-500'><CogIcon className='inline-block w-8 md:w-6 mr-2' />
                Configurações
              </li>
            </a>
          </Link>
        </ul>
      </div>
      <div className='md:col-span-10'>
        <div className='bg-white shadow rounded-lg mx-3 h-screen md:mx-0 md:p-8 p-4'>
          {children}
        </div> 
      </div>
    </div>
  </React.Fragment>
  )
}

export const Conta = () => {
  return (
    <React.Fragment>
      <div>
        <p>Nome: <span>Lar da Esperança</span></p>
        <p>Serviços: <span>Doação de Alimentos, Doação de Agasalhos</span></p>
        <p>Email: <span>contato@lde.org</span></p>
        <p>Telefone: <span>(86) 9.9999-9999</span></p>
        <p>Data de Criação: 21/05/1995</p>
      </div>
    </React.Fragment>
  )
}

export const Doacoes = () => {
  return (
    <React.Fragment>
      <h1>Doações</h1>
    </React.Fragment>
  )
}

export const Mensagens = () => {
  return (
    <React.Fragment>
      <h1>Mensagens</h1>
    </React.Fragment>
  )
}

export const Seguranca = () => {
  return (
    <React.Fragment>
      <h1>Segurança</h1>
    </React.Fragment>
  )
}

export const Configuracoes = () => {
  return (
    <React.Fragment>
      <h1>Configuracoes</h1>
    </React.Fragment>
  )
}

export default Instituicao