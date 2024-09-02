import React from 'react'
import { LayoutCore } from '../LayoutCore'
import { Navigate } from 'react-router-dom'
import  { UseAuth }  from '../../Redux/UseAuth'

export const ProtectedRout = () => {
   const {isAuth, email} = UseAuth()
//     if(loading){
//         return <p>Идет загрузка</p>
//    }
    if(isAuth){
        console.log('Enter')
        return  <LayoutCore />
    }

   return <Navigate to='login' />

  // return <LayoutCore />
   
}

