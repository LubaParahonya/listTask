import React from 'react'
import style from './Footer.module.css'

export const Footer = () => {
  const dataNow = new Date().getFullYear()
  return (
    <div className={style.mainFooter}>
       Все права защищены {dataNow} &copy; 
    </div>
  )
}

//export default Footer
