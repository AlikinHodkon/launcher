import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../reducers/authReducer';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const email = useRef(null);
    const password = useRef(null); 
    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <div className='flex justify-center items-center min-h-[92vh]'>
        <form className=''>
            <h3 className='text-white text-[24px]'>Log In</h3>
            <label htmlFor='email'>Email</label>
            <input type='text' placeholder='Email' name='email' ref={email} className='border-[2px] border-white text-white text-[1,75em] w-8/12' />
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Password' name='password' ref={password} className='border-[2px] border-white text-white text-[1,75em] w-8/12'/>
            <input type='submit' onClick={(e) => {e.preventDefault(); dispatch(login({"email": email.current.value, "password": password.current.value})); navigate('/')}} value={"Send"} />
        </form>
    </div>
  )
}
