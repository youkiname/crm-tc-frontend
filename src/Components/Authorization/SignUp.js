import React from 'react';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {Form} from './Form';
import {setUser} from 'store/slices/useSlice';
import {useDispatch} from "react-redux";

const SignUp = () => {
      const dispatch = useDispatch();
      const handleRegister = (email, password) => {
          const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
            .then(console.log)
            .catch(console.error)
    }

    return (
       <Form
           title="register"
           handleClick={}
           />
    );
};

export {SignUp};
