import React, { useContext, useEffect, useState, use } from 'react'
import Router, { useRouter } from 'next/router'
import Title from '../../../components/Title'
import Complement from '../../../components/Menu/complement'
import AuthContext from '../../../context/auth'
import Instituicao, { Conta, Doacoes, Mensagens, Seguranca, Configuracoes } from '../../../components/Instituicao'

const PerfilInstituicao = () => {
  const { signed, data } = useContext(AuthContext)
  const [route, setRoute] = useState({
    name: 'conta',
    element: <Conta />
  })

  /**
   * @param {string} route 
   * @returns A rota para qual o usuário definir
   */
  function selectRoute(route) {
    switch (route) {
      case 'conta': return <Conta />
      case 'doacoes': return <Doacoes />
      case 'mensagens': return <Mensagens />
      case 'seguranca': return <Seguranca />
      case 'configuracoes': return <Configuracoes />
      default: return <Conta />
    }
  }

  function redirectUnsigned() {
    useEffect(() => {
      const { pathname } = Router
      const name = window.location.pathname.split('/')[3]

      // if (pathname == '/perfil/instituicao/[[...slug]]') Router.replace('/') 
      // else 
        if (name) 
          setRoute(old => ({
            ...old,
            name,
            element: selectRoute(name)
          }))
        else 
          Router.replace('/perfil/instituicao/conta')

      // A plilha de rotas é sobrescrita a partir da rota passada
    }, [])
  }
  
  if (!signed) redirectUnsigned()

  /**
   * Efeito global para detectar clique no botão voltar nessa página.
   * mais informações
   *  https://developer.mozilla.org/pt-BR/docs/Web/API/WindowEventHandlers/onpopstate
   *  https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener
   */
  useEffect(() => {
    function changeRoute() {
      setRoute(old => ({
        ...old,
        name: route.name,
        element: selectRoute(route.name)
      }))
    }
    window.addEventListener('popstate', changeRoute)
    changeRoute()
    return () => window.removeEventListener('popstate', changeRoute)
    }, [])

  return (
    <React.Fragment>
      <Title title='Perfil da Instituição' />
      <Complement text='Perfil' />

      <Instituicao route={setRoute}>
        {route.name && route.element}
      </Instituicao>
    </React.Fragment>
  )
}

export default PerfilInstituicao