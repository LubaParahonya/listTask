import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import style from '../Context/Context.module.css' 
import { Link, useNavigate} from 'react-router-dom'
import * as s from './Login.styled';
import { useDispatch } from 'react-redux';
import {signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';
import userSlice from '../../../Redux/userSlice';
import { setUser } from '../../../Redux/userSlice';




export const Login = () => {
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const navigate = useNavigate()
     const dispatch = useDispatch()
     

     // if(loading){
     //      return <p>Идет загрузка</p>
     // }

     // if(user){
     //      navigate('/')
     // }

     console.log('auth', auth.currentUser);
     const handelSubmit = (e, email, password)=> {
          e.preventDefault()
          console.log('привет ')
               signInWithEmailAndPassword(auth, email, password)
               .then(({user})=> {
                    console.log('привет номер один')
                    dispatch(setUser({
                         email: user.email,
                         id: user.uid,
                         token: user.accessToken
     
                    }))
                    console.log('привет номер два')
                    navigate('/dnd')
                    setPassword('')
                    setEmail('')
                    console.log('Вы вошли')
               })
               .catch((error)=> console.log(error))
     }



  return (
     <>
    <form className={style.main} >
          <div className={style.form}>
               <s.Container>
                         <s.TextMain variant="h4" >
                              Авторизация
                         </s.TextMain>
                         <Typography variant="body2"  textAlign={'center'}  marginTop={5} sx={{fontSize:'small'}}>
                              Введите ваш логин и пароль
                         </Typography>
                         <TextField 
                              autoComplete="off"
                              onChange={(e)=> setEmail(e.target.value)}
                              value={email}
                              fullWidth
                              margin='normal'
                              label="Email"
                              variant="outlined"
                              placeholder='Введите e-mail'
                              required type='email'
                              size='small'
                         />
                         <TextField
                              autoComplete="off"
                              onChange={(e)=> setPassword(e.target.value)}
                              alue={password}
                              fullWidth
                              label="Password"
                              margin='normal'
                              variant="outlined"
                              placeholder='Введите пароль'
                              required
                              type='password'
                              size='small'
                         />
                         <Button
                              onClick={(e)=> handelSubmit(e, email, password)}
                              sx={{marginTop: 3, width:'60%'}}
                              variant="contained"
                              type='submit'>
                                   Войти
                         </Button>
                         <Typography variant="body2"  textAlign={'center'}  marginTop={5} sx={{fontSize:'small'}}>
                              У вас нет аккаунта? <Link to='/reg' className={style.textReg}>Регистрация</Link>
                         </Typography>
               </s.Container>
          </div>
     </form>
    
     </>
  )
}

//export default Login
