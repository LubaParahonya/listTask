import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { auth } from '../../../firebase'


export const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
    const [authuser, setAuthuser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        console.log('Вы создали')
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password) => {
        setLoading(true)
        console.log('Вы вошли')
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut =() => {
        setLoading(true)
        signOut(auth)}
        console.log('Вы вышли')
 
    useEffect(()=>{
        const authState = onAuthStateChanged(auth, (stateUser)=>{
            setAuthuser(stateUser)
            setLoading(false)
        })
        return ()=> {
            authState()
        }
    }, [])

    const authValue ={
        createUser,
        authuser,
        logIn,
        logOut,
        loading
    }

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  )

  
}

//AuthProvider.PropTypes = {
//    children: PropTypes.node.isRequired
//}
//
//export default RoutReg
