import React, { useState } from 'react'
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa'
import Title from '../components/Title'

const Index = () => {
    const [test, setTest] = useState(false)
    return (
        <React.Fragment>
            <Title title='Início' />
            {/* Conteúdo Principal || Main Content */}
            <div className=''>
                <div className='w-full md:inline-block float-left md:w-3/5'>
                    <p className='text-4xl font-bold md:text-5xl p-12'>
                        <span className='text-green-350'>Doar-se</span> ao próximo é a mais bela forma de se <span className='text-red-350'>encontrar</span>.
                    </p>
                    <p className='text-2xl md:text-3xl px-12'>
                        EPA é a plataforma que faz a ponte entre pessoas e empresas com projetos de arrecadação de alimentos, roupas e recursos.
                    </p>
                    <div className='md:flex md:justify-center my-8 mx-24 md:p-8'>
                        <Link href='/'>
                            <span className='cursor-pointer w-full block text-center rounded-xl border border-red-550 text-red-550 hover:bg-red-550 hover:text-white text-xl md:inline-block px-12 py-4'>Contribuir</span>
                        </Link>
                        <Link href='/busca'>
                            <span className='cursor-pointer text-xl hover:font-bold ml-4 block md:w-full transform -translate-x-3 text-center md:inline-block px-12 py-4 '>
                            <FaSearch className='inline-block font-normal'/> Buscar</span>
                        </Link>
                    </div>
                </div>
                <div className='md:relative overflow-y-auto bg-blue-450 w-full md:w-2/5 h-full float-right flex justify-center'>
                    <img className='pt-8 md:pt-36' src='/dist/man.png' />
                </div>
            </div>
            {/* Fim do Conteúdo Principal || End of Main Content*/}

            {/* Parceiros || Partners*/}
            <div className='w-full bg-gray-200 inline-block'>
                <p className='mx-8 my-2 text-center text-gray-300 text-shadow font-bold text-3xl'>Parceiros</p>
                <div className='rounded-2xl bg-gray-100 mx-8 mb-8 p-4 block'>
                    <img className='my-4 md:my-0 md:w-1/3 md:inline-block p-3' src='/dist/Logo Amor na Caixa.png' />
                    <img className='my-4 md:my-0 md:w-1/3 md:inline-block p-3' src='/dist/Logo Prato Cheio.png' />
                    <img className='my-8 md:my-0 md:w-1/3 md:inline-block p-3' src='/dist/Logo Amor Solidário.png' />
                </div>
            </div>
            {/* Fim de Parceiros || End of Partners*/}

            {/* Informações || Informations */}
            <div className='w-full inline-block my-12 md:flex md:space-between'>
                <div className='md:w-1/2 inline-block'>
                    <img className='px-8 rounded' src='/dist/Voluntarios.jpg' />
                </div>
                <div className='md:w-1/2 flex content-start'>
                    <p className='relative px-4 md:px-8'>Donec consequat iaculis quam ut mollis. Praesent laoreet augue et metus ullamcorper venenatis. Aliquam egestas, arcu nec sodales vestibulum, dolor dui lacinia dui, nec convallis sapien tortor feugiat ante. In in metus gravida, varius massa a, placerat erat. Aenean mattis laoreet purus sed tempus. Morbi at auctor arcu. Nam faucibus rhoncus lectus vel feugiat. Morbi varius purus at justo vestibulum, ac dapibus arcu euismod. Donec ac ex nisl. Vivamus ultrices, lorem eu blandit eleifend, felis metus tempor enim, non mollis enim elit quis erat. Etiam aliquet sodales lacus sed semper. Maecenas venenatis ultricies ex, et eleifend massa lobortis a. Cras egestas risus sed eros accumsan, ut mollis urna dapibus. Phasellus ut elementum eros.</p>
                </div>
            </div>
            <div className='w-full inline-block my-12 md:flex md:space-between'>
                <div className='md:w-1/2 inline-block'>
                    <p className='relative p-4 md:px-8'>
                    Donec consequat iaculis quam ut mollis. Praesent laoreet augue et metus ullamcorper venenatis. Aliquam egestas, arcu nec sodales vestibulum, dolor dui lacinia dui, nec convallis sapien tortor feugiat ante. In in metus gravida, varius massa a, placerat erat. Aenean mattis laoreet purus sed tempus. Morbi at auctor arcu. Nam faucibus rhoncus lectus vel feugiat. Morbi varius purus at justo vestibulum, ac dapibus arcu euismod. Donec ac ex nisl. Vivamus ultrices, lorem eu blandit eleifend, felis metus tempor enim, non mollis enim elit quis erat. Etiam aliquet sodales lacus sed semper. Maecenas venenatis ultricies ex, et eleifend massa lobortis a. Cras egestas risus sed eros accumsan, ut mollis urna dapibus. Phasellus ut elementum eros.
                    </p>
                </div>
                <div className='md:w-1/2 inline-block'>
                    <img className='p-4 md:px-8 rounded-2xl' src='/dist/Maos levantadas.jpg' />
                </div>
            </div>
            {/* Fim de Informações || End of Informations */}
        </React.Fragment>
    )
}

export default Index