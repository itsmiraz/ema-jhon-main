import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/Logo.svg'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

import './Header.css'
import { useState } from 'react';

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <nav className='header'>
            <img src={Logo} alt="" />
            <div className={`nav  ${open ? "show" : "hiden"}`}>
                <NavLink to="/">Shop</NavLink>
                <NavLink to="/order">Order</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>

            <div onClick={() => setOpen(!open)} className='navToggole' >
                {open ? <XMarkIcon />
                    : <Bars3Icon />
                }
            </div>

        </nav >
    );
};

export default Header;