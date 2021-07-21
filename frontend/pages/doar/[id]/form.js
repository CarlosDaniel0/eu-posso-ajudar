import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Complement from '../../../components/Menu/complement'
import Title from '../../../components/Title'
import { Input, Button } from '../../../components/UI'
import { GiftIcon, PlusIcon } from '@heroicons/react/outline'
import { StarIcon, MinusCircleIcon } from '@heroicons/react/solid'
//import {} from 'uuid'
//import { Input } from '../../../components/UI/Forms'

const Form = () => {
  const route = useRouter()
  const [list, setList] = useState([])

  function addItem() {
    const input = document.querySelector('#items')
    if (input.value != '')
      setList(old => ([...old, input.value]))
  }

  function removeItem(item) {
    const newList = list.filter(e => e != item) // Retorna todos os outros elementos com exceção do item passado
    setList(newList)
  }

  function getDate() {
    const today = new Date()

    const formatDate = (date) => {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      let month = 0
      months.forEach((value, index) => {
        if (date[1] == value)
          month = index + 1
      })

      return `${date[3]}-${month < 10 ? `0${month}` : month}-${date[2]}`
    }
    
    return formatDate(today.toDateString().split(' '))
  }

  return (
    <Layout>
      <React.Fragment>
        <Title title='Forumulário de Doação' />
        <Complement text='Formulário' />
        <fieldset className='md:w-1/2 mx-auto shadow rounded-md p-4 my-12 md:my-28'>
          <form>
            {/* <p className='text-gray-600 text-center'>
              Você pode doar diretamente na instituição
            </p> */}
            <div className='grid grid-cols-5 gap-0 justify-items-center md:p-0 p-4'>
              <div style={{backgroundImage: "url('data:image/jpeg;base64,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')"}} className='bg-no-repeat bg-cover bg-center w-20 h-20 md:mx-0 my-auto shadow rounded-full col-span-5 md:col-span-1 mx-auto'></div>
              <div className='my-auto w-full grid grid-cols-1 md:col-span-3 col-span-5'>
                <span className='font-semibold'>Instituição de Teste</span>
                <span className='font-light'>Endereço: Lorem Ipsun, nº 76, bairro Canoa Quebrada, Guaribas - Pará, Brasil</span>
                <span className='font-light'>Atuação: Doação de Aliementos e Cobertores</span>
              </div>
              <div className='col-span-5 md:col-span-1 justify-self-start'>
                <ul className='grid grid-cols-5'>
                  <li><StarIcon className='w-6 md:w-4 text-blue-450'  /></li>
                  <li><StarIcon className='w-6 md:w-4 text-blue-450' /></li>
                  <li><StarIcon className='w-6 md:w-4 text-blue-450' /></li>
                  <li><StarIcon className='w-6 md:w-4 text-gray-500' /></li>
                  <li><StarIcon className='w-6 md:w-4 text-gray-500' /></li>
                </ul>
              </div>
            </div>
            <hr className='border border-dashed my-4' />
            <div className='grid grid-cols-12 gap-6'>
              <Input text='Itens' color='green-500' extra='col-span-10' name='items' icon={<GiftIcon className='w-6 md:w-5' />} />
              <span className='mt-6 md:mt-4 rounded-full w-12 h-12 col-span-2 cursor-pointer bg-green-500 flex justify-center' onClick={addItem}><PlusIcon className='w-6 text-white' /></span>
            </div>
            <input type='hidden' name='id' value={route.query.id} />
            <input type='hidden' name='date' value={getDate()} />
            <ul className='md:grid md:grid-cols-3 gap-2'>
              {
                list.map(element => {
                  return (
                    <li className='shadow p-1 rounded-full md:w-auto mt-2 border flex justify-between px-6' >{element} <MinusCircleIcon className='w-6 md:w-5 ml-2 text-red-500 cursor-pointer' onClick={() => removeItem(element)} /></li>
                  )
                })
              }
              {/* <li className='shadow p-1 rounded-full md:w-auto mt-2 border flex justify-between px-6' >Item 2 <MinusCircleIcon className='w-6 md:w-5 ml-2 text-red-500 cursor-pointer' /></li>
              <li className='shadow p-1 rounded-full md:w-auto mt-2 border flex justify-between px-6' >Item 3 <MinusCircleIcon className='w-6 md:w-5 ml-2 text-red-500 cursor-pointer' /></li>
              <li className='shadow p-1 rounded-full md:w-auto mt-2 border flex justify-between px-6' >Item 4 <MinusCircleIcon className='w-6 md:w-5 ml-2 text-red-500 cursor-pointer' /></li>
              <li className='shadow p-1 rounded-full md:w-auto mt-2 border flex justify-between px-6' >Item 5 <MinusCircleIcon className='w-6 md:w-5 ml-2 text-red-500 cursor-pointer' /></li> */}
            </ul>
            <Button button outline='green-500' color='green-500' hover='green-400' textColor='white' type='submit' extra='mt-4'>
              Enviar
            </Button>
          </form>
        </fieldset>
      </React.Fragment>
    </Layout>
  )
}

export default Form