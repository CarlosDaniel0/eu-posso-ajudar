import React, { useContext } from 'react'
import Logo from '../Logo'
import User from './user'
import { findClass } from '../../utils/findClass'
import AuthContext from '../../context/auth'
import { LinkButton } from '../UI'


// hidden transition duration-500 ease-in-out transform -translate-x-full
const setContext = () => {
    const div = document.querySelector('.context')
    const { classes, classFind } = findClass(div, 'hidden')
    div.className = classFind ? `${classes} visible` : `${classes} hidden`
}

const showMenu = () => {
    const div = document.querySelector('.menu-mobile')
    setContext()
    const { classes, classFind } = findClass(div, '-translate-x-full')
    div.className = classFind ? `${classes} translate-x-none` : `${classes} -translate-x-full`
}

const Menu = () => {   
    const { signed, isLoading } = useContext(AuthContext)
    return (
        <div className='md:relative md:z-10'>
            <Logo />
            <img className='w-12 m-6 float-right md:hidden block' src='/dist/Menu.png' onClick={showMenu}/>
            <div className='context z-30 md:invisible absolute bg-black bg-opacity-20 w-1/3 h-full right-0 float-right hidden transition delay-700 easy-in-out duration-300' onClick={showMenu} />
            <div className='md:block menu-mobile w-2/3 md:w-full h-full absolute md:relative bg-white md:z-0 z-10 transform -translate-x-full md:transform-none transition delay-150 easy-in-out duration-150'>
                <ul className='text-2xl md:text-base md:flex md:w-2/5 p-4 block md:float-left md:h-20 md:justify-center'>
                    <li>
                        <LinkButton flat href="/" onClick={showMenu} extras="md:px-4 px-8 py-2">
                            Início
                        </LinkButton>
                    </li>
                    <li>
                        <LinkButton flat href="/doar" onClick={showMenu} extras="md:px-4 px-8 py-2">
                            Doar
                        </LinkButton>
                    </li>
                    <li>
                        <LinkButton flat href="/informacoes" onClick={showMenu} extras="md:px-4 px-8 py-2">
                            Informações
                        </LinkButton>
                    </li>
                    <li>
                        <LinkButton flat href="/busca" onClick={showMenu} extras="md:px-4 px-8 py-2">
                            Busca
                        </LinkButton>
                    </li>
                    <li>
                        <LinkButton flat href="/sobre" onClick={showMenu} extras="md:px-4 px-8 py-2">
                            Sobre
                        </LinkButton>
                    </li>
                </ul>
                <ul className='text-2xl md:text-base md:flex md:w-2/5 block p-4 md:float-left md:bg-blue-450 md:h-20 md:justify-center'>
                    
                    {isLoading && <p>Loading...</p>}
                    {!isLoading && !signed && (
                    <>
                        <li>
                            <LinkButton href='/entrar' onClick={showMenu} textColor="white" flat extras="md:px-4 px-8 py-2">
                                Entrar
                            </LinkButton>
                        </li>
                        <li>
                            <LinkButton href="/cadastrar" onClick={showMenu} hoverText='black' textColor="white" button color="transparent" mobileFlat border='white' hover='white' extras="md:px-4 px-8 py-2">
                                Cadastrar
                            </LinkButton>
                        </li>
                    </>
                    )}
                    {!isLoading && signed && (
                        <User constrols={showMenu} />
                        ) 
                    }

                </ul>
            </div>
        </div>
        )
}

export default Menu