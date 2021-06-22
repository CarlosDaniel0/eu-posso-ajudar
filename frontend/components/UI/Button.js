import React from 'react'

const Button = ({title}) => {
    return (
        <span className='text-white font-bold bg-red-400 px-6 py-4 hover:outline-black rounded-2xl outline-red-400 shadow'>
            {title}
        </span>
    )
}

export default Button