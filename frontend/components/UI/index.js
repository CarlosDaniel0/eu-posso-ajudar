import React, { useState } from 'react'
import Link from 'next/link'
import { findClass } from '../../utils/findClass'

export const Button = ({ type, children, onClick, onBlur, color, textColor, outline, hover, extra, hidden}) => {

    return (
        <button 
          type={type ? type : 'button'}
          onClick={onClick}
          onBlur={onBlur}
          className={`bg-${color} block px-8 py-2 rounded-xl shadow text-${textColor} ${hidden ? 'md:hidden inline-block' : 'block'} shadow-lg font-medium focus:outline-none focus:ring-2 ring-offset-2 mx-auto hover:bg-${hover} focus:ring${outline} ${extra}`}
        >
        { children }
        </button>
    )
}

export const Input = ({ text, type, icon, placeholder, onChange, onBlur, color, name, extra, textColor, iconColor }) => {
    return (
        <div className={extra}>
          <label htmlFor={name} className={`block font-medium text-md sm:text-sm text-${textColor ? textColor : 'gray-700'}`}>
            {text}
          </label>
          <div className='mt-1 relative rounded-md shadow-sm'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <span className={`text-${iconColor ? iconColor : 'gray-700'} sm:text-sm`}>{icon}</span>
            </div>
            <input
              id={name}
              placeholder={placeholder}
              onChange={onChange}
              name={name}
              type={type ? type : 'text'}
              onBlur={onBlur}
              className={`outline-none py-2 pr-4 focus:border-${color != '' ? color : ''} block w-full pl-7 sm:text-sm text-base border-1 py-1 border-gray-300 rounded-md`}
            />
          </div>
        </div>
        
    )
}

export const LinkButton = ({ icon, center, children, border, href, color, textColor, outline, button, flat, hidden, hover, shadow, mobileFlat, hoverText, extras, mTextColor, onClick }) => {
    return (
        <Link href={href}>
          <a 
            onClick={onClick ? onClick : ''}
            className={`${ button ? `px-5 py-3 rounded-xl ${center ? 'text-center' : ''} border border-${border} bg-${color} ${mobileFlat ? 'hover:underline md:hover:no-underline' : ''}` : ''} ${ flat !== undefined ? `hover:underline` : ``} ${hidden != undefined ? 'md:hidden inline-block' : 'block md:inline-block'} ${textColor != undefined ? `md:text-${textColor} text-${mTextColor}` : ''} ${hover != undefined ? `hover:bg-${hover}` : '' } ${ shadow ? `shadow-${shadow}` : ''} ${ hoverText ? `hover:text-${hoverText}` : ''} ${outline ? `hover:ring ring-offset-2 hover:ring-${outline}` : ''} ${extras}`}>
            { icon ? icon : '' } {children}
          </a>
        </Link>
    )   
}

export const Text = ({children, color, size, extras}) => {
  return ( 
  <p 
    className={`text-${size} text-${color} ${extras}`}
  >
    {children}
  </p>
  )
}

export const Column = ({children, quantity, extras}) => {
  return (
  <div className={`w-full block md:flex md:col grid-cols-${quantity} ${extras}`}>
    <React.Fragment>
      {children}
    </React.Fragment>
  </div>
  )
}

export const SwitchButton = ({ isActive }) => {
  const [active, setActive] = useState(false)
  function handleButton() {
    const icon = document.querySelector('.switchIcon')
    const filter = ['translate-x-full', 'translate-x-0']

    const newClasses = icon.className.split(' ').filter(c => {
      let findClass = false
      filter.forEach(e => {
        if (e == c) findClass = true
      })
      
      return !findClass
    })
    icon.className = active ? `${newClasses.join(' ')} translate-x-full` : `${newClasses.join(' ')} translate-x-0`
    setActive(!active)
  }

  return (
    <React.Fragment>
      <div className='w-16 h-8 rounded-full bg-gray-50 border border-gray-300' onClick={handleButton}>
        <span className='relative switchIcon rounded-full bg-blue-450 inline-block w-8 h-8 transform transition ease-in-out duration-150 delay-75 translate-x-0'></span>
      </div>
    </React.Fragment>
  )
}

export const Title = ({children}) => {
  return <h1 className='text-bold text-3xl my-4 text-center'>{children}</h1>
}