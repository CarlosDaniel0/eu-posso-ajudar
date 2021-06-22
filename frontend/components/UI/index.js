import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export const Button = ({ text, onClick, onBlur, size, color}) => {

    return (
        <button 
          type='button'
          onClick={onClick}
          onBlur={onBlur}
          className=''
        >
        { text }
        </button>
    )
}

export const Input = ({ text, icon, placeholder, onChange, onBlur, color, name, extra }) => {
    return (
        <div className={extra}>
          <label htmlFor={name} className='block font-medium text-base sm:text-sm text-gray-700'>
            {text}
          </label>
          <div className='mt-1 relative rounded-md shadow-sm'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <span className='text-gray-500 sm:text-sm'>{icon}</span>
            </div>
            <input
              id={name}
              placeholder={placeholder}
              onChange={onChange}
              name={name}
              onBlur={onBlur}
              className={`outline-none py-2 pr-4 focus:border-${color != '' ? color : ''}-500 block w-full pl-7 sm:text-sm text-base border-2 py-1 border-gray-300 rounded-md`}
            />
            {/* <div className="absolute inset-y-0 right-0 flex items-center">
              <label htmlFor="currency" className="sr-only">
                Currency
              </label>
              <select
                id="currency"
                name="currency"
                className={`focus:ring-${color != '' ? color : ''}-500 focus:border-${color != '' ? color : ''}-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md`}
              >
                <option>USD</option>
                <option>CAD</option>
                <option>EUR</option>
              </select>
            </div> */}
          </div>
        </div>
        
    )
}

export const LinkButton = ({ href, text, color, outline }) => {
    return (
        <Link href={href}>
          <a className=''>
            {text}
          </a>
        </Link>
    )   
}