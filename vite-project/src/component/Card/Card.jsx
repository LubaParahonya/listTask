import React, { useState, useEffect } from 'react';
import Item from '../Item/Item'
import style from './Card.module.css'
import { RiArrowGoBackLine } from "react-icons/ri";
import { useNavigate, useParams } from 'react-router-dom';
import uuid from 'react-uuid';



const Card = ({task}) => {
  const history = useNavigate()
  const cardId = useParams().id
 
  return (
    <div className={style.cardMain} >
    <Item className={style.test} key={uuid()}  title={task[cardId-1].title} isCompleted={task[cardId-1].completed}/>
    <RiArrowGoBackLine className={style.backButton} onClick={()=>history('/')}/>
    </div> 
    
  )
}

export default Card


// const currentUrl = window.location.pathname
//     const lengthUrl = currentUrl.length
//     const idPost = parseInt(currentUrl.slice(6, lengthUrl))
//     console.log(idPost)

{/* <div className={style.cardMain} >
    <Item className={style.test} key={uuid()} id={task[idPost-1].id} title={task[idPost-1].title} isCompleted={task[idPost-1].completed}/>
    <RiArrowGoBackLine className={style.backButton} onClick={()=>history('/')}/>
    </div>  */}