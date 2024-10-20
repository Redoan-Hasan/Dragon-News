/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword , getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config"
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    // creating new user 
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // sign in user 
    const logIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword (auth,email,password)
    }
    // sign out user 
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])
    const authInfo = {user,createUser,logIn,logOut,loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;