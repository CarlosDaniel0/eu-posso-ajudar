import React, { useContext } from 'react'
import Link from 'next/link'
import { FaUser } from 'react-icons/fa'
import AuthContext from '../../context/auth'
import { findClass } from '../../utils/findClass'
import { LinkButton } from '../UI'

function onClick () {
    const div = document.querySelector('.dropdown-menu')
    const { classes, classFind } = findClass(div, 'md:hidden')
    div.className = classFind ? `${classes} ` : `${classes} md:hidden`
    console.log('click')
}

const User = ({showMenu}) => {
    const { data } = useContext(AuthContext)
    return (
        <div onClick={onClick} className=''>
            <li  className='md:text-white hover:text-black flex space-between cursor-pointer md:inline-block py-2 md:px-4 px-8' onClick={showMenu}>
                <FaUser className='hidden md:inline-block my-2 transform -translate-y-4'/>
                <span className='overflow-ellipsis md:max-h-full max-h-8 overflow-hidden inline-block m-0 md:m-2 text-2xl md:text-base'>{data.name}</span>
            </li>
            < hr className='divide-y-2 divide-y border-dashed relative border-black md:hidden' />
            <ul className='dropdown-menu md:hidden block md:w-32 px-8 md:p-4 md:bg-white'>
                <li>
                    <LinkButton href='perfil/doador' flat>
                        Perfil
                    </LinkButton>
                </li>
                <li>
                    <LinkButton href='sair' flat>
                        Sair
                    </LinkButton>
                </li>
            </ul>
        </div>
    )
}
export default User