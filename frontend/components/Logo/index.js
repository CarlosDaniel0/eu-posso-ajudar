import React from 'react'
import Link from 'next/link'

const Logo = () => {
    return (
        <Link href='/'>
            <div className='z-0 md:w-1/5 p-4 md:h-20 float-left inline-block cursor-pointer flex justify-center'>
                <div className='w-20 h-20 p-1 float-left'>
                    <img src='/dist/logo/Logo.png' />
                </div>
                <div className='w-20 float-left h-20'>
                    <span><b>E</b>u</span> <br />
                    <span><b>P</b>osso</span> <br />
                    <span><b>A</b>judar</span>
                </div>
            </div>
        </Link>
    )
}

export default Logo