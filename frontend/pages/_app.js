import React from 'react'
import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import { AuthProvider } from '../context/auth'

const MyApp = ({Component, pageProps}) => {
    return (
        <AuthProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AuthProvider>
    )
}

export default MyApp