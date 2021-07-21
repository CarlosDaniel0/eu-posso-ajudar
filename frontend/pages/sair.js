import React, {useContext, useEffect} from 'react'
import Router from 'next/router'
import AuthContext from '../context/auth'
import Complement from '../components/Menu/complement'
import Layout from '../components/Layout'

function redirectAnyway() {
    useEffect(() => {
        const { pathname } = Router
        if (pathname == '/sair')
            Router.push('/')
    }, [])
}


const Sair = () => {
    const { signed, signOut } = useContext(AuthContext)
    redirectAnyway()
    if (signed) signOut()
    
    return (
			<Layout>
				<React.Fragment>
					<Complement/>
					<div className='w-full h-80 flex align-center jusitfy-center text-center'>
					<h1 className='mx-auto my-auto text-2xl'>Saindo...</h1>
					</div>
				</React.Fragment>
			</Layout>
    )
}

export default Sair