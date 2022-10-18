import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    const [error, setError] = useState('')

    const handleSignUpForm = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password.length < 6) {
            setError('Your Password Should Have at Least 6 Characters.')
        }
        
        if (password !== confirm) {
            setError('Your Password Did Not Match.');
            return;
        }
    }
    return (
        <div className='form-container'>
            <h3 className='form-title'>Sign Up</h3>
            <form onSubmit={handleSignUpForm}>
                <div className='form-element'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Your Email' required />
                </div>
                <div className='form-element'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Your Password' required />
                </div>
                <div className='form-element'>
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name='confirm' placeholder='Confirm Your Password' required />
                    {
                        error && <p className='error-text'>{error}</p>
                    }
                </div>
                <div className='login-btn'>
                    <input type="submit" value="Sign Up" />
                </div>
                <p>Already Have an Account? <Link to='/login'>Login</Link></p>
            </form>
        </div>
    );
};

export default SignUp;