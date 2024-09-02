import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import style from '../Context/Context.module.css' 
import { Link, useNavigate } from 'react-router-dom';
import * as s from './Registration.styled'
import { useDispatch } from 'react-redux';
import { setUser } from '../../../Redux/userSlice';
import { createUser } from '../Context/Context'
import { auth } from '../../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';


export const Registration = () => {
     const [name, setName] =useState('')
     const [username, setUserName] =useState('')
     const [email, setEmail] =useState('')
     const [password, setPassword] =useState('')
     const [passwordRepeat, setPasswordRepeat] =useState('')
     const [error, setError] = useState('')
     const navigate = useNavigate()
     const dispatch = useDispatch();
     

     // if(loading){
     //      return <p>Идет загрузка</p>
     // }

     // if(user){
     //      navigate('/')
     // }

     const handelSubmit = (e, email, password)=>{
          e.preventDefault()
          console.log('привет ')
          // if(password !== passwordRepeat){
          //      setError('Пароль не совпадает!')
          //      console.log(error)
          //      return
          // }
          createUserWithEmailAndPassword(auth, email, password)
          //createUser(email, password)
          .then(({user})=> {
               console.log('привет номер один')
               dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken

               }))
               setName('')
               setUserName('')
               setEmail('')
               setPassword('')
               setPasswordRepeat('')
               setError('')
               console.log('привет номер два')
               navigate('/dnd')
          })
          .catch((error)=> console.log(error))
     }


  return (
    <>
    <form className={style.main} >
     <div className={style.form}>
          <s.Container >
        <Typography variant="h4" textAlign={'center'}>
             Регистрация
        </Typography>
        <Typography variant="body2"  textAlign={'center'}  marginTop={5} sx={{fontSize:'small'}}>
             Введите данные для регистрации
        </Typography>
   
        <TextField value={name} onChange={(e) =>setName(e.target.value)}  fullWidth margin='normal' label="Name" variant="outlined" placeholder='Введите ваше имя' required  size='small'/>
        <TextField value={username} onChange={(e) =>setUserName(e.target.value)} fullWidth margin='normal' label="Username" variant="outlined" placeholder='Введите ваш username' required  size='small'/>
        <TextField value={email} onChange={(e) =>setEmail(e.target.value)} fullWidth margin='normal' label="Email" variant="outlined" placeholder='Введите e-mail' required type='email' size='small'/>
        <TextField autoComplete="off" value={password} onChange={(e) =>setPassword(e.target.value)} fullWidth label="Password" margin='normal' variant="outlined" placeholder='Введите пароль' required type='password' size='small'/>
        <TextField autoComplete="off" value={passwordRepeat} onChange={(e) =>setPasswordRepeat(e.target.value)} fullWidth label="Password" margin='normal' variant="outlined" placeholder='Введите пароль' required type='password' size='small'/>
        <Button sx={{marginTop: 3, width:'60%'}} variant="contained"  type='submit' onClick={(e)=> handelSubmit(e, email, password)}>Регистрация</Button>
        <Typography variant="body2"  textAlign={'center'}  marginTop={5} sx={{fontSize:'small'}}>
             У вас есть аккаунта? <Link to='/login' className={style.textReg}>Авторизация</Link>
        </Typography>
              </s.Container>
            </div>
        </form>
    </>
  )
}

//export default Registration



