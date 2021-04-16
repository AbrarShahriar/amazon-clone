import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase'

function Login() {
    const history = useHistory()

    const [cred, setCred] = useState({
        email: '',
        password: ''
    })

    const handleChange = e => {
        setCred({
            ...cred,
            [e.target.name]: e.target.value
        })
    }

    const signin = e => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(cred.email, cred.password)
        .then(auth => {
            console.log(auth);
            if(auth) {
                history.push('/')
            }
        })
        .catch(err => {
            alert(err.message);
        })
    }

    const register = e => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(cred.email, cred.password)
        .then(auth => {
            console.log(auth);
            if(auth) {
                history.push('/')
            }
        })
        .catch(err => {
            alert(err.message);
        })
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__image' src="https://th.bing.com/th/id/R70d71a49e1e15ae0b2f3c3de38ded5ee?rik=cXxW%2bMwvKNLu0w&riu=http%3a%2f%2fwww.clickbank.com%2fwp-content%2fuploads%2f2016%2f05%2famazon_logo.png&ehk=HYVYXmD9P04jx1EhQYsGiA7JQgAGxSafD03c4rs4NjI%3d&risl=&pid=ImgRaw"/>
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                
                <form>
                    <h5>Email</h5>
                    <input name='email' value={cred.email} onChange={handleChange} type="email"/>

                    <h5>Password</h5>
                    <input name='password' value={cred.password} onChange={handleChange} type="password"/>

                    <button type='submit' onClick={signin} className='login__signin__btn'>Sign In</button>
                </form>
                <p>By continuing, you agree to Amazone's Conditions of Use and Privacy Notice. </p>

                <button onClick={register} className='login__register__btn'>Create new account</button>
            </div>
        </div>
    )
}

export default Login
