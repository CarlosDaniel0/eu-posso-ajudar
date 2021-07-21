import React from 'react'

export const Input = () => {
  return (
  <div className='grid grid-cols-3 gap-6'>
    <div className='col-span-3 sm:col-span-2'>
      <label htmlFor='nome' className='block text-sm font-medium text-gray-700'>
          Nome
      </label>
      <input
        type='text'
        name='nome'
        id='nome'
        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md sm:text-sm border border-gray-300'
        placeholder='Lar da Esperança'
      />
    </div>
  </div>
  )
}

export const InputIcon = () => {
  return (
    <div className='grid grid-cols-3 gap-6'>
      <div className='col-span-3 sm:col-span-2'>
        <label htmlFor='website' className='block text-sm font-medium text-gray-700'>
            Website
        </label>
        <div className='mt-1 flex rounded-md shadow-sm'>
          <label htmlFor='website' className='inline-flex items-center px-3 rounded-l-md border-r-0 border border-gray-300 bg-gray-50 text-gray-500 text-sm'>
            <span className='pointer-events-none'>
                https://
            </span>
          </label>
          <input
            type='text'
            name='website'
            id='website'
            className='focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border border-gray-300'
            placeholder='instituicaoexemplo.org.br'
          />
        </div>
      </div>
    </div>
  )
}

export const Textarea = () => {
  return (
    <React.Fragment>
      <div>
        <label htmlFor='bio' className='block text-sm font-medium text-gray-700'> 
          Biografia
        </label>
        <div className='mt-1'>
          <textarea
            id='bio'
            name='bio'
            rows={3}
            className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'
            placeholder='Trabalhamos com amor e dedicação na arrecadação de alimentos e doação de roupas'
            defaultValue={''}
          />
        </div>
      </div>
      <p className='mt-2 text-sm text-gray-500'>
        Uma Breve descrição sobre o sua instituição funciona. URLs são hiperlincadas
      </p>
    </React.Fragment>
  )
}

export const DragAndDrop = () => {
  return (
    <div>
      <label className='block text-sm font-medium text-gray-700'>Imagens</label>
      <div className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-sm'>
        <div className='space-y-1 text-center'>
          <PhotographIcon className='mx-auto h-12 w-12 text-gray-400'/>
        
          <div className='flex text-sm text-gray-600'>
            <label
              htmlFor='file-upload'
              className='relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-offset-2 focus-within:ring-indigo-500'
            >
              <span>Envio de Imagens</span>
              <input id='file-upload' name='file-upload' type='file' className='sr-only'/>
            </label>
            <p className='pl-1'>ou arraste e solte</p>
          </div>
          <p className='text-sm text-gray-500'>PNG, JPG, GIF até 5MB</p>
        </div>
      </div>
    </div>
  )
}

export const File = () => {
  return (
    <div>
      <label className='block text-sm font-medium text-gray-700'>Perfil</label>
      <div className='mt-1 flex items-center'>
        <span className='inline-block h-16 w-16 rounded-full overflow-hidden bg-gray-100'>
          <FaUser className='h-full w-full text-gray-300' size='24'/>
        </span>
        <button
          type='button'
          className='ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
          Mudar
        </button>
      </div>
    </div>
  )
}

export const Button = () => {
  return (
    <button 
      type='submit'
      className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      >
      Salvar
    </button>
  )
}