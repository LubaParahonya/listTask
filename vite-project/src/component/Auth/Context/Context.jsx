import { createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../../../firebase'


export const createUser = (email, password) => {
        console.log('Вы создали')
        return createUserWithEmailAndPassword(auth, email, password)
    }
export const logIn = (email, password) => {
        console.log('Вы вошли')
        return signInWithEmailAndPassword(auth, email, password)
    }
export const logOut =() => {
       console.log('Вы вышли')
        signOut(auth)
}
 