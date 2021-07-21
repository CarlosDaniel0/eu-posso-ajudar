import React, { useState, useEffect, useContext } from 'react'
import Complement from '../../../components/Menu/complement'
import axios from 'axios'
import Title from '../../../components/Title'
import Router, { useRouter } from 'next/router'
import { MinusCircleIcon } from '@heroicons/react/solid'
import { CheckIcon, XIcon } from '@heroicons/react/outline'
import AuthContext from '../../../context/auth'

const Instituicao = ({url}) => {
		const [steps, setSteps] = useState(1)
		const router = useRouter()

		useEffect(() => {
			console.log(router)
			
		},[])
		return (
        <React.Fragment>
					<Title title='Cadastrar Instituição' />
					<Complement text="Cadastrar Instituição" />
					{/* Esse formulário está disponível gratuitamente no site Tailwind UI */}
					{/* Acesse: https://tailwindui.com/components/application-ui/forms/form-layouts */}

					<div className='grid grid-cols-2 gap-4 m-8'>
						<div>
							<span className='w-full h-1 bg-indigo-500 block'></span>
							<h1 className='text-indigo-500'>Passo 1</h1>
							<span className='font-thin'>Email</span>
						</div>
						<div>
							<span className='w-full h-1 bg-gray-300 block'></span>
							<h1 className='text-gray-900'>Passo 2</h1>
							<span className='font-thin'>Informações</span>
						</div>
					</div>

					{ steps == 1 ? <Email url={url} setSteps={setSteps} /> : <Informacoes url={url} />}
        </React.Fragment>
    )
}

// Steps
// Step 1
const Email = ({url, setSteps}) => {
	const { signIn } = useContext(AuthContext)
	const [form, setForm] = useState({ name: '', email: '',	password: '' })
	const [verify, setVerify] = useState({
		match: false,
		countChar: false,
		capitalize: false,
		number: false,
		specialChar: false
	})
	function handleChange(event) {
		setForm(old => ({
			...old,
			[event.target.name]: event.target.value
		}))
	}

	function handlePassword(event) {
		// Dúvidas com Regex e live test
		// Acesse: https://regexr.com/

		const pass = event.target.value

		// ==============================================
		if (pass.length >= 8)
			setVerify(old => ({...old, countChar: true}))
		else
			setVerify(old => ({...old, countChar: false}))
			
		// ==============================================
		if (pass.match(/[A-Z]/)) // Pegar ao menos uma letra maiúscula
			setVerify(old => ({...old, capitalize: true}))
		else
			setVerify(old => ({...old, capitalize: false}))

		//================================================
		if (pass.match(/([^0-9a-zA-Z ])|\W\s/g)) // Pegar qualquer caractere fora do range letras e números e espaços
			setVerify(old => ({...old, specialChar: true}))
		else 
			setVerify(old => ({...old, specialChar: false}))

		// ================================================
		if (pass.match(/[0-9]/g)) 
			setVerify(old => ({...old, number: true}))
		else
			setVerify(old => ({...old, number: false}))
	}
	
	function confirmPassword(event) {
		if (event.target.value == form.password)
			setVerify(old => ({...old, match: true}))
		else 
			setVerify(old => ({...old, match: false}))
	}

	async function onSubmit(event) {
		event.preventDefault()
	
		if (verify.match){
			const res = await axios({
				url: `${url}/institution`,
				method: 'POST',
				data: form
			})
			
			if (res.status == 201) {
				signIn(url, form)
				Router.push(`/cadastrar/instituicao/dados`)
				setSteps(2)
			}
		}
			//Router.push('/cadastrar/sucesso')
	}

	return (
		<div className='mx-4 my-8'>
			<div className='md:grid md:grid-cols-3 md:gap-6'>
				<div className='col-span-1'>
					<div className='px-4 sm:px-0'>
						<h3 className='text-lg font-medium leading-6 text-gray-900'>Instituição</h3>
						<p className='mt-1 text-sm text-gray-600'>
						Preencha com as informações correspondentes da sua instituição
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
										placeholder='Lar da Esperança'
									/>
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
										placeholder='instituicao@exemplo.com'
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
										onChange={(event) => { handleChange(event); handlePassword(event) }}
										className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md sm:text-sm border border-gray-300'
										placeholder='••••••••••••'
									/>
								</div>
							</div>

							<div className='grid grid-cols-3 gap-6'>
								<div className='col-span-3 sm:col-span-2'>
									<label htmlFor='confirm_password' className='block text-sm font-medium text-gray-700'>
											Confirmar a Senha
									</label>
									<input
										type='password'
										name='confirm_password'
										id='confirm_password'
										onChange={confirmPassword}
										className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md sm:text-sm border border-gray-300'
										placeholder='••••••••••••'
									/>
								</div>
							</div>
						</div>

						<div className='rounded-md shadow mx-6 my-1 p-6'>
							<span className='text-xl text-gray-600'>Senha</span>
							<ul className='grid grid-cols-5 sm:grid-cols-4 md:grid-cols-2 space-y-1 font-thin'>
								<li className='col-span-4 sm:col-span-3 md:col-auto'>Deve possuir pelo menos 8 caracteres</li> 
								{ verify.countChar ? <span className='w-7 h-7 rounded-full flex justify-center bg-green-500'><CheckIcon className='w-5 text-white' /></span> :  <span className='w-7 h-7 rounded-full flex justify-center bg-red-500'><XIcon className='w-5 text-white' /></span>}
								<li className='col-span-4 sm:col-span-3 md:col-auto'>Deve possuir pelo menos 1 letra Maiúscula</li> 
								{ verify.capitalize ? <span className='w-7 h-7 rounded-full flex justify-center bg-green-500'><CheckIcon className='w-5 text-white' /></span> :  <span className='w-7 h-7 rounded-full flex justify-center bg-red-500'><XIcon className='w-5 text-white' /></span>}
								<li className='col-span-4 sm:col-span-3 md:col-auto'>Deve possuir pelo menos 1 número</li> 
								{ verify.number ? <span className='w-7 h-7 rounded-full flex justify-center bg-green-500'><CheckIcon className='w-5 text-white' /></span> :  <span className='w-7 h-7 rounded-full flex justify-center bg-red-500'><XIcon className='w-5 text-white' /></span>}
								<li className='col-span-4 sm:col-span-3 md:col-auto'>Deve possuir um caratere especial (Ex: @#$!(){}[])</li> 
								{ verify.specialChar ? <span className='w-7 h-7 rounded-full flex justify-center bg-green-500'><CheckIcon className='w-5 text-white' /></span> :  <span className='w-7 h-7 rounded-full flex justify-center bg-red-500'><XIcon className='w-5 text-white' /></span>}
								<li className='col-span-4 sm:col-span-3 md:col-auto'>As Senhas conferem</li> 
								{ verify.match ? <span className='w-7 h-7 rounded-full flex justify-center bg-green-500'><CheckIcon className='w-5 text-white' /></span> :  <span className='w-7 h-7 rounded-full flex justify-center bg-red-500'><XIcon className='w-5 text-white' /></span>}
							</ul>
						</div>

						<div className='px-4 py-3 bg-gray-50 text-left sm:px-6'>
							<button 
								type='submit'
								className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'
								>
								Enviar
							</button>
						</div>
					</div>
				</form> 
			</div>
		</div>
	</div>
	)
}


//Step 2
const Informacoes = ({url}) => {
	const router = useRouter()
	const [form, setForm] = useState({
		website: '',
		services: [],
		start_date: '',
		bio: '',
	})

	// const [profilePic, setProfilePic] = useState({

	// })
	// const [images, setImages] = useState([])

	function splitServices(services) {
		return services.split(', ')
	}

	function removeItem(index) {
		const input = document.querySelector('.images')
		input.attributes = 'disabled'
	}

	async function uploadFiles(name, files, toUrl) {
		const formData = new FormData()
		for(let i = 0; i < files.length; i++) {
			formData.append(
				name,
				files[i],
				files[i].name
			)
		}

		const res = await axios({
			url: toUrl,
			method: 'POST',
			data: formData
		})

		return res.data
	}

	async function onProfilePicChange(event) {
		const toUrl = `${url}/institution/${router.query.id}/profile`
		const res = await uploadFiles(
			event.target.name,
			event.target.files,
			toUrl
		)
		console.log(res)
	}

	async function onImagesChange(event) {
		const toUrl = `${url}/institution/${router.query.id}/images`
		const res = await uploadFiles(
			event.target.name,
			event.target.files,
			toUrl
		)
		console.log(res)
	}
	
	function handleChange(event) {
		if (event.target.name == 'services') 
			setForm(old => ({
				...old,
				[event.target.name]: splitServices(event.target.value)
			}))
		else 
			setForm(old => ({
				...old,
				[event.target.name]: event.target.value
			}))
	}
	
	async function onSubmit(event) {
		event.preventDefault()
		console.log(router.query.id)
		const res = await fetch(`${url}/institution/${router.query.id}`, {
			method: 'PATCH',
			data: form
		})
		
		if (res.status == 201) Router.push('/cadastrar/sucesso')
	}

	return (
		<div className='mx-4 my-8'>
			<div className='md:grid md:grid-cols-3 md:gap-6'>
				<div className='col-span-1'>
					<div className='px-4 sm:px-0'>
						<h3 className='text-lg font-medium leading-6 text-gray-900'>Instituição</h3>
						<p className='mt-1 text-sm text-gray-600'>
						Preencha com as informações correspondentes da sua instituição
						</p>
					</div>
				</div>
				<div className='mt-5 md:mt-0 md:col-span-2'>
					<form onSubmit={onSubmit}>
						<div className='shadow sm:rounded-md sm:overflow-hidden'>
							<div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
								<div className='grid grid-cols-3 gap-6'>
									<div className='col-span-3 sm:col-span-2'>
										<label htmlFor='website' className='block text-sm font-medium text-gray-700'>
												Website
										</label>
										<div className='mt-1 flex rounded-md shadow-sm'>
											<label htmlFor='website' className='inline-flex items-center px-3 rounded-l-md border-r-0 border border-gray-300 bg-gray-50 text-gray-500 text-sm'>
												<span className='pointer-events-none'>
														https://
												</span>
											</label>
											<input
												type='text'
												name='website'
												id='website'
												onChange={handleChange}
												className='focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border border-gray-300'
												placeholder='instituicaoexemplo.org.br'
											/>
										</div>
									</div>
								</div>


								<div className='grid grid-cols-3 gap-6'>
									<div className='col-span-3 sm:col-span-2'>
										<label htmlFor='services' className='block text-sm font-medium text-gray-700'>
												Serviços
										</label>
										<input
											type='text'
											name='services'
											id='services'
											onChange={handleChange}
											className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md sm:text-sm border border-gray-300'
											placeholder='Arrecadação de Alimentos, Doação de Roupas, Eventos Comunitários'
										/>
									</div>
								</div>

								<div className='grid grid-cols-3 gap-6'>
									<div className='col-span-3 sm:col-span-2'>
										<label htmlFor='start_date' className='block text-sm font-medium text-gray-700'>
												Data de Criação
										</label>
										<input
											type='date'
											name='start_date'
											id='start_date'
											onChange={handleChange}
											className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md sm:text-sm border border-gray-300'
											placeholder='Arrecadação de Alimentos, Doação de Roupas, Eventos Comunitários'
										/>
									</div>
								</div>

								<div>
									<label htmlFor='bio' className='block text-sm font-medium text-gray-700'> 
										Biografia
									</label>
									<div className='mt-1'>
										<textarea
											id='bio'
											name='bio'
											rows={3}
											onChange={handleChange}
											className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'
											placeholder='Trabalhamos com amor e dedicação na arrecadação de alimentos e doação de roupas'
											defaultValue={''}
										/>
									</div>
								</div>
								<p className='mt-2 text-sm text-gray-500'>
									Uma Breve descrição sobre o sua instituição funciona. URLs são hiperlincadas
								</p>
								
								<div>
									<label className='block text-sm font-medium text-gray-700'>Perfil</label>
									<div className='mt-1 flex items-center'>
										<div className='shadow rounded-full relative w-16 h-16'>
											<span className='cursor-pointer absolute inline-block transform top-1 right-1 translate-x-4 -translate-y-4 rounded-full bg-white'><MinusCircleIcon className='md:w-6 w-8 text-red-500' /></span>
											<div style={{ backgroundImage: "url('https://i1.wp.com/emotioncard.com.br/wp-content/uploads/2016/10/gata.jpg?resize=660%2C554&ssl=1')"}} className='bg-image bg-cover bg-no-repeat w-16 h-16 rounded-full bg-center'></div>
										</div>
										{/* <span className='inline-block h-16 w-16 rounded-full overflow-hidden bg-gray-100'>
											<FaUser className='h-full w-full text-gray-300' size='24'/>
										</span> */}
										<label>
											<input type='file' name='profile_pic' onChange={onProfilePicChange} className='sr-only' />
											<span
												className='ml-5 py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 text-gray-700 bg-gray-50 hover:border-indigo-500'
												>
												Mudar
											</span>
										</label>
									</div>
								</div>
								<div>
									<label className='block text-sm font-medium text-gray-700'>Imagens</label>
									<label htmlFor='images'>
										<div className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-sm'>
											<div className='grid md:grid-cols-3 xl:grid-cols-5 gap-6'>
												<div className='grid grid-cols-1 shadow rounded-md relative'>
													<span onClick={() => removeItem(0)} className='cursor-pointer absolute inline-block top-1 right-1 rounded-full bg-white'><MinusCircleIcon className='md:w-6 w-8 text-red-500' /></span>
													<div style={{'backgroundImage': "url('https://media.gazetadopovo.com.br/viver-bem/2018/10/gatopretoantonino-visalli-458267-unsplash-768x576-256300b0.jpg')"}} className='bg-image bg-cover bg-no-repeat bg-center sm:w-32 h-32 rounded-t-md' />
													<p className='md:w-32 p-1 text overflow-hidden overflow-ellipsis h-8'>Image de Gatinho!</p>
												</div>
												<div className='grid grid-cols-1 shadow rounded-md relative'>
													<span className='cursor-pointer absolute inline-block top-1 right-1 rounded-full bg-white'><MinusCircleIcon className='md:w-6 w-8 text-red-500' /></span>
													<div style={{'backgroundImage': "url('https://media.gazetadopovo.com.br/viver-bem/2018/10/gatopretoantonino-visalli-458267-unsplash-768x576-256300b0.jpg')"}} className='bg-image bg-cover bg-no-repeat bg-center sm:w-32 h-32 rounded-t-md' />
													<p className='md:w-32 p-1 text overflow-hidden overflow-ellipsis h-8'>Image de Gatinho!</p>
												</div>
												<div className='grid grid-cols-1 shadow rounded-md relative'>
													<span className='cursor-pointer absolute inline-block top-1 right-1 rounded-full bg-white'><MinusCircleIcon className='md:w-6 w-8 text-red-500' /></span>
													<div style={{'backgroundImage': "url('https://media.gazetadopovo.com.br/viver-bem/2018/10/gatopretoantonino-visalli-458267-unsplash-768x576-256300b0.jpg')"}} className='bg-image bg-cover bg-no-repeat bg-center sm:w-32 h-32 rounded-t-md' />
													<p className='md:w-32 p-1 text overflow-hidden overflow-ellipsis h-8'>Image de Gatinho!</p>
												</div>
												<div className='grid grid-cols-1 shadow rounded-md relative'>
													<span className='cursor-pointer absolute inline-block top-1 right-1 rounded-full bg-white'><MinusCircleIcon className='md:w-6 w-8 text-red-500' /></span>
													<div style={{'backgroundImage': "url('https://media.gazetadopovo.com.br/viver-bem/2018/10/gatopretoantonino-visalli-458267-unsplash-768x576-256300b0.jpg')"}} className='bg-image bg-cover bg-no-repeat bg-center sm:w-32 h-32 rounded-t-md' />
													<p className='md:w-32 p-1 text overflow-hidden overflow-ellipsis h-8'>Image de Gatinho!</p>
												</div>
												<div className='grid grid-cols-1 shadow rounded-md relative'>
													<span className='cursor-pointer absolute inline-block top-1 right-1 rounded-full bg-white'><MinusCircleIcon className='md:w-6 w-8 text-red-500' /></span>
													<div style={{'backgroundImage': "url('https://media.gazetadopovo.com.br/viver-bem/2018/10/gatopretoantonino-visalli-458267-unsplash-768x576-256300b0.jpg')"}} className='bg-image bg-cover bg-no-repeat bg-center sm:w-32 h-32 rounded-t-md' />
													<p className='md:w-32 p-1 text overflow-hidden overflow-ellipsis h-8'>Image de Gatinho!</p>
												</div>
												<div className='grid grid-cols-1 shadow rounded-md relative'>
													<span className='cursor-pointer absolute inline-block top-1 right-1 rounded-full bg-white'><MinusCircleIcon className='md:w-6 w-8 text-red-500' /></span>
													<div style={{'backgroundImage': "url('https://media.gazetadopovo.com.br/viver-bem/2018/10/gatopretoantonino-visalli-458267-unsplash-768x576-256300b0.jpg')"}} className='bg-image bg-cover bg-no-repeat bg-center sm:w-32 h-32 rounded-t-md' />
													<p className='md:w-32 p-1 text overflow-hidden overflow-ellipsis h-8'>Image de Gatinho!</p>
												</div>
												<div className='grid grid-cols-1 shadow rounded-md relative'>
													<span className='cursor-pointer absolute inline-block top-1 right-1 rounded-full bg-white'><MinusCircleIcon className='md:w-6 w-8 text-red-500' /></span>
													<div style={{'backgroundImage': "url('https://media.gazetadopovo.com.br/viver-bem/2018/10/gatopretoantonino-visalli-458267-unsplash-768x576-256300b0.jpg')"}} className='bg-image bg-cover bg-no-repeat bg-center sm:w-32 h-32 rounded-t-md' />
													<p className='md:w-32 p-1 text overflow-hidden overflow-ellipsis h-8'>Image de Gatinho!</p>
												</div>
											</div>
											<input id='images' name='images' type='file' onChange={onImagesChange} className='sr-only images' multiple />
											{/* <div className='space-y-1 text-center'>
												<PhotographIcon className='mx-auto h-12 w-12 text-gray-400'/>

												<div className='flex text-sm text-gray-600'>
													<span className='relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-offset-2 focus-within:ring-indigo-500'>Envio de Imagens</span>
													<input id='images' name='images' type='file' onChange={onImagesChange} className='sr-only' multiple />
													<p className='pl-1'>ou arraste e solte</p>
												</div>
												<p className='text-sm text-gray-500'>PNG, JPG, GIF até 5MB</p>
											</div> */}
										</div>
									</label>
								</div>
							</div>
							<div className='px-4 py-3 bg-gray-50 text-left sm:px-6'>
									<button 
										type='submit'
										className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
										>
										Concluir
									</button>
								</div>
						</div>
					</form> 
				</div>
			</div>
		</div>
	)
}

export async function getStaticPaths() {
  return {
    paths: [
			'/cadastrar/instituicao/form',
			{ params: { slug: 'dados' }}
		],
    fallback: true
  }
}


export function getStaticProps(context) {
	return {
		props: {
			url: process.env.URL_API
		}
	}
}

export default Instituicao