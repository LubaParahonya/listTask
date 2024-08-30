import React from 'react'
import { MdOutlineTaskAlt } from "react-icons/md";
import { BiTaskX } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import style from './Item.module.css'
import uuid from 'react-uuid';
import clsx from 'clsx';


const Item = ({id, title, isCompleted}) => {
    const history = useNavigate()
  return (
    <>
      <div key={uuid()} className={clsx(window.location.pathname === '/card' ? style.item : style.test, style.item )} onClick={()=> history(`/card/${id}`, {replace : true})}>
        <div className={clsx(window.location.pathname === '/card' ? style.itemTite :  style.testTitle)}>{title}</div>
        <div className={style.itemCompleted}>{ isCompleted ? <MdOutlineTaskAlt  className={style.true}/> : <BiTaskX className={style.false}/>  }</div>         
      </div>
    </>
  )
}

export default Item

