import React, { Children, useContext } from 'react'
import { LayoutCore } from '../LayoutCore'
import { Registration } from '../Auth/Registration'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Auth/Context/Context'

export const ProtectedRout = ({ children }) => {
    const {authuser, loading} = useContext(AuthContext)
    if(loading){
        return <p>Идет загрузка</p>
   }
    if(authuser){
        console.log('Enter')
        return  <LayoutCore />
    }

    return <Navigate to='login' />
    // return (
    // <>
    //     {authuser ? <LayoutCore /> : <Registration /> }
    // </>
    // )
}

//export default ProtectedRout
