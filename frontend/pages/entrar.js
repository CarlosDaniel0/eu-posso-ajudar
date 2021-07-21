import React, { useContext, useEffect } from 'react'
import { Formik } from 'formik'
import { FaUser, FaLock } from 'react-icons/fa'
import Router, { useRouter } from 'next/router'
import AuthContext from '../context/auth'
import { Input, LinkButton, Button, SwitchButton } from '../components/UI'
import Layout from '../components/Layout'

function redirectSigned() {
    useEffect(() => {
        const { pathname } = Router
        if (pathname == '/entrar')
            Router.replace('/') // A plilha de rotas é sobrescrita a partir da rota passada
    }, [])
}

function validate(values) {
    const errors = {}
    if (!values.email) errors.email = 'Requerido'
    else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+[A-Z]{2,}$/i.test(values.email)
    ) errors.email = 'Endereço de email inválido!'
    return errors
}

const Entrar = ({url}) => {
    const { signIn, signed } = useContext(AuthContext)
    const initialValues = {email: '', password: ''}

    if (signed) redirectSigned()

    return (
        <Layout>
					<React.Fragment>
							<div className='w-full inline-block'>
								<div className='w-full md:w-3/5 float-left h-screen flex items-center'>
									<Formik
											initialValues = {initialValues}
											validate = {validate}
											onSubmit={async (data, { setSubmitting }) => {
													await signIn(url, data)
													setSubmitting(data)
											}}
									>
									{({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubimitting}) => (
										<form onSubmit={handleSubmit} className='w-full mx-8 md:mx-48 md:p-0'>
												<h1 className='font-bold block w-full text-3xl text-center'>Login</h1>
												<Input 
												icon={<FaUser/>} 
												text='Email' 
												placeholder='joao@gmail.com' 
												color='blue-450' 
												name='email' 
												type='email'
												onBlur={handleBlur}
												onChange={handleChange}
												/>
												<Input 
												icon={<FaLock/>} 
												text='Senha' 
												type='password'
												placeholder='••••••••••••' 
												color='blue-450' 
												name='password' 
												onBlur={handleBlur}
												onChange={handleChange} 
												extra='mt-4'
												/>
												<SwitchButton />
												{errors.password && touched.password && errors.password}
												<LinkButton href="/esqueci-a-senha" flat>Esqueci a Senha</LinkButton>
												<Button type='submit' disabled={isSubimitting} color="blue-450" textColor="white" outline="blue-450" hover="blue-400">
														Entrar
												</Button>
										</form>
									)}
									</Formik>
								</div>
								<div className='hidden md:block md:w-2/5 relative float-right h-screen bg-blue-450'>
								</div>
								
						</div>
					</React.Fragment>
        </Layout>
    )
}

export async function GetStaticProps (context) {
    console.log(context.res)
    return {
        props: {
            url: process.env.URL_API
        }
    }
}

export default Entrar