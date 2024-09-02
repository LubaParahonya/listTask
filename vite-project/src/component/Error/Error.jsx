import React from 'react'
import styleErr from './Error.module.css'


export const Error = () => {
    return (
        <div className={styleErr.main} >
            <div style={{textAlign: 'center'}}>
              <h1 style={{fontSize: 200}}>
                   404
              </h1>
              <p style={{fontSize: 20}}>Страница не найдена ...</p>
            </div>
        </div>
    )
  }


//export default Error
