import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import style from '../Context/Context.module.css' 
import { Link, Navigate, useLocation, useNavigate} from 'react-router-dom'
import * as s from './Login.styled';
import { AuthContext } from '../Context/Context';



export const Login = () => {
     const {authuser, logIn, loading} = useContext(AuthContext)
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const navigate = useNavigate()

     console.log(authuser)

     if(loading){
          return <p>Идет загрузка</p>
     }

     if(authuser){
          navigate('/')
     }

     const handelSubmit = (e)=> {
          try {
               e.preventDefault()
               logIn(email, password)
               .then((result)=> {
                    console.log(result)
                    navigate('/')
                    setPassword('')
                    setEmail('')
                    console.log('Вы вошли')
               })
          } catch(e){
               console.log(e)
          }
     }

const handleChangeEmail = (e)=> setEmail(e.target.value);

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
                              onChange={handleChangeEmail}
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
                              onClick={handelSubmit}
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
