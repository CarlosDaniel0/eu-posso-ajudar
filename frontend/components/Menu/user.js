import React, { useContext } from 'react'
import Link from 'next/link'
import { FaUser } from 'react-icons/fa'
import AuthContext from '../../context/auth'
import { findClass } from '../../utils/findClass'

function onClick () {
    const div = document.querySelector('.dropdown-menu')
    const { classes, classFind } = findClass(div, 'md:hidden')
    div.className = classFind ? `${classes} ` : `${classes} md:hidden`
    console.log('click')
}

const User = ({showMenu}) => {
    const { data, signOut } = useContext(AuthContext)
    return (
        <div onClick={onClick} className=''>
            <li  className='md:text-white block hover:text-black flex space-between cursor-pointer md:inline-block py-2 md:px-4 px-8' onClick={showMenu}>
                <FaUser className='hidden md:inline-block my-auto'/>
                <span className='inline-block m-2'>{data.name}</span>
            </li>
            <ul className='dropdown-menu md:hidden block md:w-32 px-4 md:p-4 md:bg-white'>
                <Link href='/perfil'><li className='py-2 md:py-0 hover:font-bold cursor-pointer'>Perfil</li></Link>
                <li className='py-2 md:py-0 hover:font-bold cursor-pointer' onClick={signOut}>Sair</li>
            </ul>
        </div>
    )
}
export default User