import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <React.Fragment>
            {/* Rodapé || Footer*/}
            <div className='w-full inline-block text-white bg-blue-gray px-8 md:px-12 pt-12'>
                <div className='md:w-1/4 md:inline-block'>
                    <h1 className='font-bold md:text-base text-xl'>Sobre Nós</h1>
                    <ul>
                        <Link href='/'><li className='cursor-pointer md:text-base text-xl'>Quem somos?</li></Link>
                        <Link href='/'><li className='cursor-pointer md:text-base text-xl'>Onde Atuamos?</li></Link>
                        <Link href='/'><li className='cursor-pointer md:text-base text-xl'>Como funciona?</li></Link>
                    </ul>
                </div>

                <div className='my-4 md:my-0 md:w-1/4 md:inline-block'>
                    <h1 className='font-bold md:text-base text-xl'>Parceiros</h1>
                    <ul>
                        <Link href='/'><li className='cursor-pointer md:text-base text-xl'>Sobre</li></Link>
                        <Link href='/'><li className='cursor-pointer md:text-base text-xl'>Cadastrar</li></Link>
                        <Link href='/'><li className='cursor-pointer md:text-base text-xl'>Informações</li></Link>
                    </ul>
                </div>

                <div className='my-4 md:my-0 md:w-1/4 md:inline-block'>
                    <h1 className='font-bold md:text-base text-xl'>Ajuda</h1>
                    <ul>
                        <Link href='/'><li className='cursor-pointer md:text-base text-xl'>Suporte</li></Link>
                        <Link href='/'><li className='cursor-pointer md:text-base text-xl'>Dúvidas Frequentes</li></Link>
                        <Link href='/'><li className='cursor-pointer md:text-base text-xl'>Contato</li></Link>
                    </ul>
                </div>
                <div className='my-4 md:my-0 md:w-1/4 md:inline-block'></div>
                <hr className='my-4'/>
                <p className='mb-4 md:text-base text-xl md:text'>Eu Posso Ajudar © 2021 - Todos os Direitos Reservados</p>
            </div>
        {/* Rodapé || End Footer*/}
        </React.Fragment>
    )
}

export default Footer