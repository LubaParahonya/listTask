import React, { useState, useEffect } from 'react';
import { Navigate, Outlet } from "react-router-dom";
import clsx from 'clsx';
import styles from './LayoutCore.module.css'
import Home from '../Home/Home'
import { Navigation } from '../Navigation';
import { Footer } from '../Footer';
import { Registration } from '../Auth/Registration';
import { Login } from '../Auth/Login';





export const LayoutCore = () => {
console.log('werew')
  return (
    <div className={styles.layout}>
        <Navigation />
         <Outlet /> 
        <Footer />
    </div>
  )
}

//export default LayoutCore
 
