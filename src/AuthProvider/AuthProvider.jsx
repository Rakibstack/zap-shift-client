import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
export const AuthContext = createContext(null);

const GoogleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);


    const createuser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginuser = (email,password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logoutuser = () => {
        setLoader(true)
        return signOut(auth)
    }

    const LogInWithGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth,GoogleProvider)

    }
    const Forgotpass = (email) => {
        setLoader(true)
        return sendPasswordResetEmail(auth,email)
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth,(currentuser) => {
          setUser(currentuser);
          setLoader(false)
                     
        })
        return () => unsubscribe();

    },[])


    const authinfo = {
        createuser,loginuser,
        logoutuser,user,loader,
        LogInWithGoogle,
        Forgotpass

    }


    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;