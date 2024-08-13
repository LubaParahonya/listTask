import React, { useState, useEffect } from 'react'
import './component/item.css'
import Items from './component/Items'

function App() {
  const [task, setTask] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const apiUrl = 'https://jsonplaceholder.typicode.com/todos'

  const getApiData = async () => {
    const response = await fetch(apiUrl)
    .then((response) => response.json());
    setTask(response);
  };

useEffect(()=>{
    //setIsLoading(true)
    getApiData()

    //.finally(()=>setIsLoading(false))
    // if(isLoading){
    //     return 'Идет загрузка...'
    // }
}, [])

  return (
    <>
      <Items task={task}/>
    </>
  )
}

export default App
