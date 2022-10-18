import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const handleLoginSubmit = event => {
        event.preventDefault();
        
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    return (
        <div className='form-container'>
            <h3 className='form-title'>Login</h3>
            <form onSubmit={handleLoginSubmit}>
                <div className='form-element'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Your Email' required />
                </div>
                <div className='form-element'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Your Password' required />
                </div>
                <div className='login-btn'>
                    <input type="submit" value="Login" />
                </div>
                <p>New to Ema-John? <Link to='/signup'>Create A New Account.</Link></p>
            </form>
        </div>
    );
};

export default Login;