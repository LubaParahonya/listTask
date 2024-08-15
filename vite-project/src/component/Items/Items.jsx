import React, { useEffect, useState } from 'react'
import Item from '../Item/Item';
import style from './Items.module.css'
import Card from '../Card/Card';


const Items = ({task}) => {


  return (
    <>
     <h1 className={style.task}>Список задач</h1>
    <div className={style.itemList}>
  {task.map((el) => {
    //деструктуризация
    const { id, title, completed } = el;
    const isCompleted = completed === true;
    //когда есть map  нужно выносить элемент в отдельный файл
    //у каждого из низ есть свой файл module.css
    return (
      // key - top question
      // optimization rendering
      // key = problems => very simple   
      // uniqe must be
      <Item  key={id} id={id} title={title} isCompleted={isCompleted}/>
   )
  })}
</div>

    </>
  )
}

export default Items
