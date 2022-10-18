import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
    const { user, userSignOut } = useContext(AuthContext);
    return (
        <nav className='navbar'>
            <img src={logo} alt="logo" />
            <div className='menu'>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Manage Inventory</Link>
                {
                    user?.uid ?
                        <Link onClick={userSignOut}>Logout</Link>
                        :
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Sign Up</Link>
                        </>
                }
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
};

export default Header;