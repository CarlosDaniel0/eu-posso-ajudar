import React from 'react'

const Complement = ({text}) => {
    return (
        <div className='w-full inline-block'>
            <div className='inline-block w-full py-2 md:w-3/5 h-full'><span className='text-2xl font-bold block text-center'>{text}</span></div>
            <div className='w-full py-2 md:bg-blue-450 rounded-bl-2xl hidden md:inline-block md:w-2/5'><span className='text-2xl invisible'>a</span></div>
        </div>
    )
}

export default Complement