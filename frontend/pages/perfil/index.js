import React from 'react'
import Complement from '../../components/Menu/complement'
import { CogIcon, UserCircleIcon, ShieldCheckIcon, InboxInIcon, HeartIcon, ChevronDownIcon } from '@heroicons/react/outline'
import Title from '../../components/Title'
import { findClass } from '../../utils/findClass'

function rowOptions () {
	const options = document.querySelector('.options')
	const { classes, classFind } = findClass(options, 'hidden')
	options.className += classFind ? `${classes}` : `${classes} hidden`
}

const Perfil = () => {
    return (
        <React.Fragment>
					<Title title='Perfil' />
					<Complement text='Perfil' />
					<div className='md:grid grid-cols-12 md:my-4 gap-6'>
						<div className='md:col-span-2 bg-blue-450 md:h-screen md:border md:rounded-tr-2xl md:rounded-br-2xl'>
							<button className='text-white focus:outline-none text-2xl w-full block md:hidden p-2 rounded shadow' onClick={rowOptions}>Opções <ChevronDownIcon className='inline-block w-6' /></button>
							<ul className='options md:mt-4 md:ml-1 absolute md:relative bg-blue-450 left-0 right-0 transition easy-in-out duration-300 md:block hidden'>
								<li className='text-white  p-2 hover:bg-blue-500 cursor-pointer border-l-4 border-blue-500'><UserCircleIcon className='inline-block w-8 md:w-6 mr-2' />Conta</li>
								<li className='text-white  p-2 hover:bg-blue-500 cursor-pointer border-l-4 border-blue-500'><HeartIcon className='inline-block w-8 md:w-6 mr-2' />Minhas Doações</li>
								<li className='text-white  p-2 hover:bg-blue-500 cursor-pointer border-l-4 border-blue-500'><InboxInIcon className='inline-block w-8 md:w-6 mr-2' />Mensagens</li>
								<li className='text-white  p-2 hover:bg-blue-500 cursor-pointer border-l-4 border-blue-500'><ShieldCheckIcon className='inline-block w-8 md:w-6 mr-2' />Segurança</li>
								<li className='text-white  p-2 hover:bg-blue-500 cursor-pointer border-l-4 border-blue-500'><CogIcon className='inline-block w-8 md:w-6 mr-2' />Configurações</li>
							</ul>
						</div>
						<div className='md:col-span-10'>
							<div className='bg-white shadow rounded-lg mx-3 h-screen md:mx-0 md:p-8 p-4'>a</div> 
						</div>
					</div>
        </React.Fragment>
    )
}

{/* <div className='flex justify-items-start my-8'>
    <div className='w-1/6 h-screen inline-block bg-green-400'>
        <div className='mt-4 rounded-full w-48 h-48 relative mx-auto bg-green-300'></div>
    </div>
    <div className='w-5/6 h-screen inline-block bg-green-500'>
        T
    </div>
</div>
<div className='flex justify-items-start'>  
</div> */}
export default Perfil