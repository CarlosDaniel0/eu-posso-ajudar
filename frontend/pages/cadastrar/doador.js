import React, { useState } from 'react'
import Router from 'next/router'
import Complement from '../../components/Menu/complement'
// import { Input, Button } from '../../components/UI'
import { FaUser } from 'react-icons/fa'
import axios from 'axios'
import Layout from '../../components/Layout'

const Doador = ({ url }) => {
		const [form, setForm] = useState(
			{
				name: '',
				phone: '',
				profile_pic: 'http://localhost/photo.png',
				email: '',
				password:''
			}
		) 

		function handleChange(event) {
			setForm(old => ({
				...old,
				[event.target.name]:event.target.value
			}))
		}
		async function onSubmit(event) {
			event.preventDefault()

			const res = await axios({
				method: 'POST',
				url: `${url}/donator`,
				data: form
			})

			if (res.status == 201) Router.push('/cadastrar/sucesso')

		}
    return (
		<Layout>
			<React.Fragment>
				<Complement text="Cadastrar Doador" />
				{/* Esse formulário está disponível gratuitamente no site Tailwind UI */}
				{/* Acesse: https://tailwindui.com/components/application-ui/forms/form-layouts */}
				<div className='mx-4 my-8'>
					<div className='md:grid md:grid-cols-3 md:gap-6'>
						<div className='col-span-1'>
							<div className='px-4 sm:px-0'>
								<h3 className='text-lg font-medium leading-6 text-gray-900'>Doador</h3>
								<p className='mt-1 text-sm text-gray-600'>
									Preencha com suas informações
								</p>
							</div>
						</div>
						
						<div className='mt-5 md:mt-0 md:col-span-2'>
							<form onSubmit={onSubmit}>
								<div className='shadow sm:rounded-md sm:overflow-hidden'>
									<div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
										<div className='grid grid-cols-3 gap-6'>
											<div className='col-span-3 sm:col-span-2'>
												<label htmlFor='name' className='block text-sm font-medium text-gray-700'>
														Nome
												</label>
												<input
													type='text'
													name='name'
													id='name'
													onChange={handleChange}
													className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md sm:text-sm border border-gray-300'
													placeholder='Francisco Algusto'
												/>
											</div>
										</div>

										<div className='grid grid-cols-3 gap-6'>
											<div className='col-span-3 sm:col-span-2'>
												<label htmlFor='servicos' className='block text-sm font-medium text-gray-700'>
														Telefone
												</label>
												<input
													type='tel'
													name='phone'
													id='phone'
													onChange={handleChange}
													className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md sm:text-sm border border-gray-300'
													placeholder='(86) 9.9999-9999'
												/>
											</div>
										</div>
										<input type='hidden' onChange={handleChange} name='profile_pic' value='http://localhost/photo.png' />
										<div>
											<label className='block text-sm font-medium text-gray-700'>Perfil</label>
											<div className='mt-1 flex items-center'>
												<span className='inline-block h-16 w-16 rounded-full overflow-hidden bg-gray-100'>
													<FaUser className='h-full w-full text-gray-300' size='24'/>
												</span>
												<button
													type='button'
													className='ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
													>
													Mudar
												</button>
											</div>
										</div>

										<div className='grid grid-cols-3 gap-6'>
											<div className='col-span-3 sm:col-span-2'>
												<label htmlFor='email' className='block text-sm font-medium text-gray-700'>
														Email
												</label>
												<input
													type='email'
													name='email'
													id='email'
													onChange={handleChange}
													className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md sm:text-sm border border-gray-300'
													placeholder='falgusto@exemplo.com'
												/>
											</div>
										</div>

										<div className='grid grid-cols-3 gap-6'>
											<div className='col-span-3 sm:col-span-2'>
												<label htmlFor='password' className='block text-sm font-medium text-gray-700'>
														Senha
												</label>
												<input
													type='password'
													name='password'
													id='password'
													onChange={handleChange}
													className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md sm:text-sm border border-gray-300'
													placeholder='••••••••••••'
												/>
											</div>
										</div>
									</div>
									<div className='px-4 py-3 bg-gray-50 text-left sm:px-6'>
											<button 
												type='submit'
												className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
												>
												Salvar
											</button>
										</div>
								</div>
							</form> 
						</div>
					</div>
				</div>
			</React.Fragment>
		</Layout>
    )
}

export async function getStaticProps(context) {
	return {
		props: {
			url: process.env.URL_API
		}
	}
} 

export default Doador