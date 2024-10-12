import React, { useEffect } from 'react'
import { LayoutCore } from '../LayoutCore'
import { useNavigate } from 'react-router-dom'
import  { UseAuth }  from '../../Redux/UseAuth'
import { auth } from '../../firebase';
//props have auth prop = auth.currentUser  === auth
export const ProtectedRout = () => {
   //const {isAuth, email} = UseAuth()
//     if(loading){
//         return <p>Идет загрузка</p>
//    }
    if(auth){
        console.log('Enter')
        return  <LayoutCore />
    }
   return <Navigate to='login' /> 
}

