import React from 'react'
import 'tailwindcss/tailwind.css'
import { AuthProvider } from '../context/auth'

const MyApp = ({Component, pageProps}) => {
    return (
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
    )
}

export default MyApp