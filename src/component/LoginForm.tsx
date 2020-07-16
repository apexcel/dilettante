import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import axios from 'axios'
import Main from './Main.tsx'

import '../styles/loginform.scss'

export default function LoginForm({ setLogged, logged, setUserInfo, isEmpty }) {

    const [signUpForm, setSignUpForm] = useState({id: '', pw: ''})

    const inputHandler = (e) => {
        e.preventDefault()
        const { value, id } = e.target
        setSignUpForm({ ...signUpForm, [id]: value })
    }

    const onSignIn = async (e) => {
        e.preventDefault()
        if (isEmpty(signUpForm.id) || isEmpty(signUpForm.pw)) return

        const cfg = {
            url:'http://localhost:9000/api/login_check', 
            form_data: {
                user: signUpForm,
                stamp: new Date().getTime()
            }
        }

        const response = await axios.post(cfg.url, cfg.form_data).then(res => res.data)
        console.log(response)
        if (response.auth) {
            setUserInfo({user_info: response.result[0], time_stamp: response.stamp, auth: response.auth})
            setLogged(true)
        }
    }

    return (
        <>
            { logged ? <Main setLogged={setLogged} setUserInfo={setUserInfo} /> :
            <form className='form-wrapper'>
                <div className='input-box'>
                    <input className='form-input' id='id' onChange={inputHandler} type='text' name='id' placeholder='USERNAME' />
                </div>
                <div className='input-box'>
                    <input className='form-input' id='pw' onChange={inputHandler} type='password' name='pw' placeholder='PASSWORD' />
                </div>
                <button className='btn-primary' type='button' onClick={onSignIn}>Sign in</button>
                <button className='btn-primary' type='button'><Link to='/signup'>Sign up</Link></button>
            </form>}
        </>
    )
}