import React, { Fragment, useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import style from '../Context/Context.module.css' 
import { Link, useNavigate } from 'react-router-dom';
import * as s from './Registration.styled'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';
import { AuthContext } from '../Context/Context';

export const Registration = () => {
     const {authuser, loading} = useContext(AuthContext)
     const [name, setName] =useState('')
     const [username, setUserName] =useState('')
     const [email, setEmail] =useState('')
     const [password, setPassword] =useState('')
     const [passwordRepeat, setPasswordRepeat] =useState('')
     const [error, setError] = useState('')
     const navigate = useNavigate()

     if(loading){
          return <p>Идет загрузка</p>
     }

     if(authuser){
          navigate('/')
     }

     const handelSubmit = (e)=>{
          e.preventDefault()
          if(password !== passwordRepeat){
               setError('Пароль не совпадает!')
               console.log(error)
               return
          }
          createUser(email, password)
          .then((result)=> {
               console.log(result)
               setName('')
               setUserName('')
               setEmail('')
               setPassword('')
               setPasswordRepeat('')
               setError('')
               navigate('/')
          })
          .catch((error)=> console.log(error))
     }


  return (
    <>
    <form className={style.main} onSubmit={handelSubmit}>
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
        <TextField value={password} onChange={(e) =>setPassword(e.target.value)} fullWidth label="Password" margin='normal' variant="outlined" placeholder='Введите пароль' required type='password' size='small'/>
        <TextField value={passwordRepeat} onChange={(e) =>setPasswordRepeat(e.target.value)} fullWidth label="Password" margin='normal' variant="outlined" placeholder='Введите пароль' required type='password' size='small'/>
        <Button sx={{marginTop: 3, width:'60%'}} variant="contained"  type='submit'>Регистрация</Button>
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
