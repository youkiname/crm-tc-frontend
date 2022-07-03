import React from 'react';
import {useDispatch} from "react-redux";
import {setUser} from 'store/slices/useSlice';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const dispatch = useDispatch();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(console.log)
            .catch(console.error)
    }
    return (
        <Form
            title = "sign in"
            handleClick = {handleLogin}
        />
    );
};

export {Login};