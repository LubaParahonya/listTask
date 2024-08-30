import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './listitem.module.css'
import Home from '../Home/Home'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const apiUrl = 'https://jsonplaceholder.typicode.com/todos'

export const Listitem = () => {
const [task, setTask] = useState([])
const [isLoading, setIsLoading] = useState(true)
    
    const getApiData = async () => {
        try{
          const response = await fetch(apiUrl)
          .then((response) => response.json())
          .finally(()=>setIsLoading(false)) 
          setTask(response);
        }catch(error){
          console.log(error);
        }
      };
    
    useEffect(()=>{
        getApiData()
    }, [])
  return (
 
    <div className={clsx(isLoading && styles.container, !isLoading && styles.color_background)}>
      {isLoading ? 
      <Box sx={{ display: 'flex',
        width:'100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'}}>
        <CircularProgress />
      </Box>
    : <Home task={task}/>}
    </div>
  
  )
}

//export default Listitem
