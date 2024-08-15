import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './App.module.css';
import Items from './component/Items/Items';
//import Item from './component/Item/Item';
import Card from './component/Card/Card';
import {Routes, Route, Link} from 'react-router-dom'
import './index.css'


function App() {
  const [task, setTask] = useState([])
  //const [card, setCard] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const apiUrl = 'https://jsonplaceholder.typicode.com/todos'

  const getApiData = async () => {
    try{
      const response = await fetch(apiUrl)
      .then((response) => response.json())
      .finally(()=>setIsLoading(false))

      setTask(response);
    }catch(erroe){
      console.log(error);
    }
  };

useEffect(()=>{
    getApiData()
}, [])



  return (
     
    <Routes>
    <Route  path='/' element={<div className={clsx(isLoading && styles.container, !isLoading && styles.color_background)}>
{isLoading ? <h1>Идет загрузка...</h1>: <Items task={task}/>}
</div> }/>
    <Route  path='/card/:id' element={<Card task={task}/>}/>
  </Routes>
   
  )
}

export default App


/* {isLoading &&  <h1>Идет загрузка...</h1>}
      {!isLoading && <Items task={task}/>} */

