//Login.js
import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        //firebase
    }

    const register  = e => {
        e.preventDefault();
        
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth)  => {
                //it successfully created a new user with Email and Pwd
                console.log(auth);
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to = "/">
            <img className="login--logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="amazon"/>
            </Link>
            <div className='login--container'>
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}  />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type='submit' onClick={signIn} className='login--signButton'>Sign In</button>
                </form>
                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button type='submit' onClick={register} className='login--registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login