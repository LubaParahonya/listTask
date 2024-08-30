import React from 'react'
import style from './Reg.module.css'

export const Reg = () => {
  return (
    <form className={style.mainDiv}>
      <div className={style.contanet}>
      <h3 className={style.registration}>Регистрация</h3>
         <label className={style.labelRegistration}>Имя</label>
        <input className={style.inputRegistration} type="text" placeholder='Введите имя' />
        <label className={style.labelRegistration}>Почта</label>
        <input className={style.inputRegistration} type="email" placeholder='Введите почту'/>
        <label className={style.labelRegistration}>Пароль</label>
        <input className={style.inputRegistration} type="password" placeholder='Введите пароль'/>
        <button className={style.buttonReg}>Зарегистрироватся</button>
      </div>     
    </form>
  )
}

//export default Reg
