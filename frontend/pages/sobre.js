import React from 'react'
import Complement from '../components/Menu/complement'
import { CheckIcon } from '@heroicons/react/outline'
import Layout from '../components/Layout'
// import { Cir} from '@heroicons/react/solid'
// import { Text, Column } from '../components/UI'

const Sobre = () => {
    return (
    <Layout>
      <React.Fragment>
          <Complement text="Sobre" />
          {/* <div className='inline-block mt-4'>
              <Column quantity='2'>
                <Text>
                  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
                <Text>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </Text>
              </Column>
          </div> */}
          <div className='grid grid-cols-3 gap-4 m-8'>
            <div>
              <span className='w-full h-1 bg-indigo-500 block'></span>
              <h1 className='text-indigo-500'>Passo 1</h1>
              <span className='font-thin'>Formulário</span>
            </div>
            <div>
              <span className='w-full h-1 bg-gray-300 block'></span>
              <h1 className='text-gray-900'>Passo 2</h1>
              <span className='font-thin'>Foto do Perfil</span>
            </div>
            <div>
              <span className='w-full h-1 bg-gray-300 block'></span>
              <h1 className='text-gray-900'>Passo 3</h1>
              <span className='font-thin'>Imagens</span>
            </div>
          </div>

          <div className='w-10 h-10'>
            <div className='transform -translate-x-4' style={{ 
              borderRight: '20px solid black',
              borderTop: '20px solid transparent',
              borderLeft: '20px solid transparent',
              borderBottom: '20px solid transparent'
          }}></div>
          </div>


          <div className='grid grid-cols-9 w-1/3'>
            <div className='grid grid-cols-1 col-span-1 justify-items-center'>
              <span className='rounded-full p-2 w-10 h-10 flex justify-center bg-indigo-500'>
                <CheckIcon className='w-8 text-white' />
              </span>

              <span className='h-12 w-0.5 bg-indigo-500 block'></span>

              <span className='rounded-full w-10 h-10 flex justify-center border-2 border-indigo-500'>
                <span className='block w-3 h-3 rounded-full bg-indigo-500 my-auto'></span>
              </span>

              <span className='h-12 w-0.5 bg-gray-300 block'></span>

              <span className='rounded-full w-10 h-10 flex justify-center border-2 border-gray-300'>
              </span>
            </div>
            <div className='col-span-8'>
              <div>
                <h1 className='font-bold leading-none'>Create Account</h1>
                <span className='text-gray-900'>Alguma coisa que não seja lorem ipsum</span>
              </div>
              <span className='block w-1 h-12 bg-transparent'></span>
              <div>
                <h1 className='font-bold leading-none text-indigo-500'>Informação de Perfil</h1>
                <span className='text-gray-900'>Digite alguma informação sobre o perfil</span>
              </div>
            </div>
          </div>
      </React.Fragment>
    </Layout >
    )
}

export default Sobre