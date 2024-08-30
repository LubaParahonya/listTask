import React, { useState, useEffect } from 'react';
import Item from '../Item/Item'
import style from './Card.module.css'
import { RiArrowGoBackLine } from "react-icons/ri";
import { useNavigate, useParams } from 'react-router-dom';
import uuid from 'react-uuid';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



const Card = () => {
  const [dataOfCard, setataOfCard] = useState(null)
  const history = useNavigate()
  const cardId = useParams().id
  const apiUrl = `https://jsonplaceholder.typicode.com/todos/${cardId}`


  const getApiTask = async () => {
    try{
      const response = await fetch(apiUrl)
      .then((response) => response.json())
      setataOfCard(response);
    }catch(error){
      console.log(error);
    }
  };
  useEffect(() => {
    if (cardId) {
      getApiTask()
    }
  }, [cardId]);

  if (!cardId) {
    return (
      <Box sx={{ display: 'flex',
        width:'100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'

       }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!dataOfCard){
    return
    (
      <Box sx={{ display: 'flex',
        width:'100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
       }}>
        <CircularProgress />
      </Box>
    );
  }


  return (
  
    <div className={style.cardMain} >
      <Item 
        className={style.test}
        key={uuid()}
        title={dataOfCard.title}
        isCompleted={dataOfCard.completed}
      />
      <RiArrowGoBackLine 
        className={style.backButton}
        onClick={()=>history('/card')}
      />
    </div> 
   
  )
}

export default Card

