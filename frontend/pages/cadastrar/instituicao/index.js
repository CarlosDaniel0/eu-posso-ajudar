import React from 'react'

const RedirecionarInstituicao = () => {
  return (
    <h1 className='text-center my-4 text-xl'>Redirecionando...</h1>
  )
}

export async function getServerSideProps({ res , params}) {
  res.statusCode = 302
  res.setHeader('Location', '/cadastrar/instituicao/form')
  return { props: {} }
}
export default RedirecionarInstituicao