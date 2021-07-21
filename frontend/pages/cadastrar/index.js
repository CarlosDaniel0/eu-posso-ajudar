import React, { useState } from 'react'
import Complement from '../../components/Menu/complement'
import { FaBuilding, FaHeart } from 'react-icons/fa'
import { LinkButton } from '../../components/UI'
import Layout from '../../components/Layout'

const Cadastrar = () => {
    const [option, setOption] = useState(0)
    return (
      <Layout>
				<React.Fragment>
					<Complement text="Cadastrar" />
					<div className='inline-block w-full p-8 md:p-0 md:flex md:justify-center my-32'>
						<LinkButton href="/cadastrar/instituicao" icon={<FaBuilding className='inline-block mr-4 md:w-72 w-24' size='100'/>} mTextColor='white' button textColor='white' color='green-500' extras='ml-4 text-2xl transition animation easy-in-out duration-200 transform hover:scale-110' center>
								<span className='inline-block w-full'>Como Instituição</span>
						</LinkButton>

						<LinkButton href="/cadastrar/doador" icon={<FaHeart className='inline-block mr-4 md:w-72 w-24' size='100'/>} mTextColor='white' button textColor='white' color='red-500' extras='ml-4 text-2xl transition animation easy-in-out duration-200 transform hover:scale-110' center>
								<span className='inline-block w-full'>Como Doador</span>
						</LinkButton>
					</div>
        </React.Fragment>
			</Layout>
    )
}

export default Cadastrar