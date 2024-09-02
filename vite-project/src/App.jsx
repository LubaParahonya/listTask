//import styles from './App.module.css';
import Card from './component/Card/Card';
import {Routes, Route} from 'react-router-dom'
import './index.css'
import { Listitem } from './component/ListItem';
import { About } from './component/About';
import { Main } from './component/Main';
import { News } from './component/News';
import { Contacts } from './component/Contacts';
import { ProtectedRout } from './component/ProtectedRout';
import { Registration } from './component/Auth/Registration';
import { Login } from './component/Auth/Login';
import { Navigate } from 'react-router-dom';
import { Error }from './component/Error/Error';



function App() {
  // DZ  - hooks HOC portal 
  //layout , outlet, (protected route + auth)
  //navigate - link from react router dom 
  //browserrouter hashrouter
  //1 нужно убрать получение всех таскок в компонент который рисует все карточки 
  //2 нужно сделать нормальый лейаут со стилями и кнопками переходов между страницами
  //3 попробовать подключить (https://mui.com/) 
  // in app mast doesnt have logic 
  // logic to move to LayoutCor
  // to do loading component
  

  //нужно разделить роутинг на два роута 
  // {islogged && <Layout .....} {!isLogged && <Auth }
  return (
    <Routes>
      <Route path='/' element={<ProtectedRout />} >          
                <Route index path='/' element={<Main />}/> 
                <Route path='/about' element={<About />} />   
                <Route path='/card' element={<Listitem /> } />
                <Route path='/dnd' element={<News />} />
                <Route path='/contacts' element={<Contacts /> } />
                <Route path='card/:id' element={<Card />}/>
                            
      </Route>
            <Route path='/reg' element={<Registration />}/>
            <Route path='/login' element={<Login />}/> 
            <Route path='/error' element={<Error />}/>
            <Route path='*' element={<Error />} />    
    </Routes>
  )
}

export default App


/* {isLoading &&  <h1>Идет загрузка...</h1>}
      {!isLoading && <Items task={task}/>} */

      // <ProtectedRout isLogged={isLogged}>
      //         <News />
      //         </ProtectedRout> } />

