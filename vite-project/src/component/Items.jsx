import React, { useEffect, useState } from 'react'
import { MdOutlineTaskAlt } from "react-icons/md";
import { BiTaskX } from "react-icons/bi";


const Items = ({task}) => {


  return (
    <>
     <h1 className='task'>Список задач</h1>
    <div className="item-list">
  {task.map((el) => (
      <div key={el.id} className="item">
        <div className='itemTite'>{el.title}</div>
        <div className='itemCompleted'>{el.completed === true? <MdOutlineTaskAlt className='true'/>: <BiTaskX className='false'/>  }</div>
         
      </div>
   ))}
</div>
    </>
  )
}

export default Items
