import React, { useContext, useEffect } from 'react'
import { Formik } from 'formik'
import { FaUser, FaLock } from 'react-icons/fa'
import Link from 'next/link'
import Router from 'next/router'
import AuthContext from '../context/auth'
import { Input } from '../components/UI'

function redirectSigned() {
    useEffect(() => {
        const { pathname } = Router
        if (pathname == '/entrar')
            Router.push('/')
    }, [])
}

const Entrar = () => {
    const { signIn, signed } = useContext(AuthContext)

    if (signed) redirectSigned()

    return (
        <React.Fragment>
            <div className='w-full inline-block'>
                <div className='w-full md:w-3/5 float-left h-screen flex items-center'>
                {/* <Input text='Nome' placeholder='Teste' icon={<FaUser/>} name='teste' color='indigo' size={12} /> */}
                    <Formik
                        initialValues = {{ email: '', password: ''}}
                        validate = {values => {
                            const errors = {}
                            if (!values.email) errors.email = 'Requerido'
                            else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+[A-Z]{2,}$/i.test(values.email)
                            ) errors.email = 'Endereço de email inválido!'
                            return errors
                        }}
                        onSubmit={async (data, { setSubmitting }) => {
                            await signIn(data)
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
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                            <Input 
                              icon={<FaLock/>} 
                              text='Senha' 
                              placeholder='••••••••••••' 
                              color='blue-450' 
                              name='password' 
                              onBlur={handleBlur}
                              onChange={handleChange} 
                              extra='mt-4'
                            />
                            {errors.password && touched.password && errors.password}
                            <Link href='esqueci-a-senha' ><a className='cursor-pointer block w-1/2 hover:font-bold'>Esqueci a Senha</a></Link>
                            <button 
                              className='hover:bg-green-500 rounded-xl block mx-auto px-8 py-3 hover:text-white text-xl border text-green-500 border-green-600 '
                              type="submit" 
                              disabled={isSubimitting}>
                                Entrar
                            </button>
                        </form>
                    )}
                    </Formik>
                </div>
                <div className='hidden md:block md:w-2/5 relative float-right h-screen bg-blue-450'>
                </div>
                
            </div>
        
        </React.Fragment>
    )
}

// export async function getStaticProps () {
//     //const { signed } = useContext(AuthContext)
//     if (true) return {redirect: '/', permanent: false}

//     return {
//         props: {}
//     }
// }

export default Entrar