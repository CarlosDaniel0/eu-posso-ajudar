import React, { useState } from 'react'
import Complement from '../components/Menu/complement'
import { FaBuilding, FaHeart } from 'react-icons/fa'

const Cadastrar = () => {
    const [option, setOption] = useState(0)
    return (
        <React.Fragment>
            <Complement text="Cadastrar" />
            { option == 0 && <div className='inline-block w-full my-4 p-8 md:p-0 md:flex md:justify-center my-32'>
                <div className='md:w-1/4 cursor-pointer bg-green-500 text-2xl text-center rounded-2xl py-1 text-white'
                onClick={() => setOption(1)}>
                    <FaBuilding className='inline-block mr-4' />
                    Como Instituição
                </div>
                <div className='md:w-1/4 cursor-pointer bg-red-500 text-2xl text-center rounded-2xl py-1 md:ml-4 mt-4 md:mt-0 text-white'
                onClick={() => setOption(2)}>
                    <FaHeart className='inline-block mr-4'/>
                    Como Doador
                </div>
            </div>
            }
            { option == 1 && <FormInstituicao />}
            { option == 2 && <FormDoador /> }
        </React.Fragment>
    )
}

const FormInstituicao = () => {
    return (
        <form>
            <label>
1           <input placeholder="Nome" />
            </label>
            <input placeholder="Serviços" />
            <input placeholder="Biografia" />
            <input placeholder="Imagens" />
            <input placeholder="Foto do Perfil" />
            <input placeholder="Data de Criação" />
            <input placeholder="Email"/>
            <input placeholder="Senha" />
        </form>
    )
}

const FormDoador = () => {
    return (
        <form>
2
        </form>
    )
}

export default Cadastrar