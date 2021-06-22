import Cookies from 'js-cookie'
import React, { createContext, useState, useEffect } from 'react'
import Router from 'next/router'
import axios from 'axios'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(true)
    const [user, setUser] = useState({
        token: '',
        signed: false,
        data: {}
    })

    useEffect(() => {
        async function loadStorageCookie () {
            const token = Cookies.get('token')
            const user = Cookies.get('user')

            if (token && user)
            {
                setUser(old => ({
                    ...old,
                    token: token,
                    signed: true,
                    data: JSON.parse(user)
                }))
            }
        }
        loadStorageCookie().then(r => {
            setLoading(false)
        })
    }, [])

    async function signIn(data) {
        const res = await axios.post('http://localhost:5000/auth', data).
        then(res => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`

            let date = new Date()
            let expireTime = 60

            date.setTime(date.getTime() + (expireTime * 60 * 1000))
            Cookies.set('token', res.data.token, { expires: date})
            Cookies.set('user', res.data.user, { expires: date })

            console.log(res.data)
            setUser(old => ({
                ...old,
                token: res.data.token,
                signed: true,
                data: res.data.user
            }))
            return res
        })
        .catch(err => {
            return err
        })
        return res;
    }

    async function signOut() {
        Cookies.remove('token')
        Cookies.remove('user')

        setUser(old => ({
            ...old,
            signed: false,
            token: '',
            data: {}
        }))

        const { pathname } = Router
        if (pathname != '/') Router.push('/')
    }
    return (
    <AuthContext.Provider value={{ ...user, isLoading, signIn, signOut }}>
        {children}
    </AuthContext.Provider>
    )
}

export default AuthContext