import React from 'react'
import{ useSelector}  from 'react-redux';

export const UseAuth = () => {
    const {email, token, id} = useSelector(state => state.user)

  return {
    isAuth: !!email, //превращаю в булевое значение
    email,
    token,
    id
  }
}


