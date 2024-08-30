import React, { useContext } from 'react'
import style from './Navigation.module.css'
import { Link, useNavigate } from 'react-router-dom'
import uuid from 'react-uuid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { AuthContext } from '../Auth/Context/Context';



export const Navigation = () => {
  const {logOut} = useContext(AuthContext)
  const navigate = useNavigate()
  const hendelSingOut = () =>{
    logOut()
    navigate('/login')
  }
    const listNav = [{
        nameNavigation: 'Главная',
        huthNavigation: '/'
    },
    {
        nameNavigation: 'О нас',
        huthNavigation: '/about'
    },
    {
        nameNavigation: 'Список задач',
        huthNavigation: '/card'
    },
    {
        nameNavigation: 'react beautiful dnd',
        huthNavigation: '/dnd'
    },
    {
        nameNavigation: 'Контакты',
        huthNavigation: '/contacts'
    },
  //   {
  //       nameNavigation: 'Регистрация',
  //       huthNavigation: '/reg'
  //   },
  //   {
  //     nameNavigation: 'Автоизация',
  //     huthNavigation: '/login'
  // },
]
  return (
    <nav className={style.mainNav}> 
      <ButtonGroup variant="text" aria-label="Basic button group" className={style.listNav} >
      {listNav.map(el => (
        <Button key={uuid()} className={style.btnNav}>
        <Link className={style.itemNavigation} to={el.huthNavigation}>{el.nameNavigation}</Link>
        </Button>
    ))}
       <Button className={style.itemNavigation} onClick={hendelSingOut}>Выход</Button>
      </ButtonGroup>
    </nav>
  )
}

//export default Navigation
