import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import { CheckIcon } from '@heroicons/react/outline'
import Complement from '../../components/Menu/complement'


const Sucesso = () => {
  const [time, setTime] = useState(5)
  const timer = () => setTime(time-1)

  useEffect(() => {
    if (time <= 0) { return }
    const id = setInterval(timer, 1000)
    setTimeout(() => {Router.replace('/entrar')}, 5000)
    return () => clearInterval(id)
  }, [time])


  return (
    <React.Fragment>
      <Complement />
      <div className='w-full h-screen flex justify-center'>
        <div className=' grid grid-cols-1 justify-items-center my-auto text-center gap-y-0'>
          <div className='rounded-full bg-green-500 w-32 h-32'>
          <CheckIcon className='text-white' />
          </div>
          <p className='text-2xl leading-1'>Cadastro realizado com sucesso!</p>
          <span className='text-gray-900 text-xl'>Redirecionando em {time}</span>
        </div>
      
      </div>
    </React.Fragment>
  )
}

export default Sucesso