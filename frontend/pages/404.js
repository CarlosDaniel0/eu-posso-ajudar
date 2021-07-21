import React from 'react'
import Layout from '../components/Layout'

const FourHundredFour = () => {
    return (
			<Layout>
				<div className='inline-block w-full'>
            <div className='w-full md:inline-block h-screen md:w-3/5'>
                <p className='text-center text-2xl m-8'>
                    Erro 404 - A página solicitada não está disponível
                </p>
            </div>
            
            <div className='absolute hidden md:inline-block md:w-2/5 right-0 top-16 bg-blue-450 h-screen'>
            </div>
        </div>
			</Layout>
    )
}

export default FourHundredFour