import React, { useState } from 'react'
import Complement  from '../../components/Menu/complement'
import { SearchIcon } from '@heroicons/react/outline'
import { MinusCircleIcon } from '@heroicons/react/solid'
import { Button } from '../../components/UI'
import Layout from '../../components/Layout'

const Doar = () => {
	const [institution, setInstitution] = useState('')
    return (
			<Layout>
				<React.Fragment>
					<Complement text='Doar' />
					<div className='md:w-1/2 mx-auto shadow rounded-md p-4 my-28' >
						<h1 className='text-center text-lg'>Encontre uma Instituição que deseja efetuar uma doação</h1>
						<div className='mt-2 grid grid-cols-9 border border-gray-900 rounded-full'>
							<input className='my-1 col-span-8 bg-transparent ml-2 outline-none' placeholder='Buscar...' />	
							<SearchIcon className='my-1 w-6 mx-auto col-span-1 text-center cursor-pointer' />
						</div>
						<ul>
							{	
								institution != '' ?
								<li className='shadow p-1 rounded-full w-full md:w-auto mt-2 border flex justify-between px-6'>{institution} <MinusCircleIcon className='w-6 md:w-5 ml-2 text-red-500 cursor-pointer' onClick={() => setInstitution('')} /></li>
								: ''
							}
						</ul>
						<Button color='green-500' outline='green-500' textColor='white' extra='mt-6'>Prosseguir</Button>
					</div>
				</React.Fragment>
			</Layout>
    )
}

export default Doar	