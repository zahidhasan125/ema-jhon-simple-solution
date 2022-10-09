import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="logo" />
            <div className='menu'>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
};

export default Header;