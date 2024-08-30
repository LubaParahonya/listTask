import React, { useEffect, useState } from 'react'
import style from './News.module.css'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

export const News = () => {
  const [newList, setNewList] = useState([])
  // fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
  // .then((response) => response.json())
  // .then((json) => setNewList(json.splice(0, 4)));
  // console.log(newList)

  const getTask = async () => {
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
      .then((response) => response.json())
      setNewList(response.splice(0, 12));
    }catch(error){
      console.log(error);
    }
  };
  useEffect(() => {
    getTask()
  }, []);

  const handleOnDragEnd =(result)=>{
    if (!result.destination) return;
    const items = Array.from(newList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    setNewList(items);
  }
  return (
    <div className={style.mainDiv}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='listTask'>
          {(provided)=>(
            <ul className={style.listTask} {...provided.droppableProps} ref={provided.innerRef}>
            {newList.map((el,index) => (
              <Draggable draggableId={el.id.toString()} index={index} key={el.id}> 
               {(provided) => (
                <li className={style.itemtask} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >
                  <div className={style.dNd} >
                    <p>{el.title}</p>
                    <img src={el.url} className={style.img}/>
                  </div>
              </li>
              )}
              </Draggable>
            ))}
            {provided.placeholder}
            </ul>
          )}
         </Droppable>
      </DragDropContext>
    </div>
  )
}

//export default News


