import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo2.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar__container">
                <div className="navbar__logo">
                    <img src={logo} alt="" />
                </div>
                <div className="navbar__menu">
                    <Link className="navbar__menu__items" to='/' >Home</Link>
                    <Link className="navbar__menu__items" to='/about'>About</Link>
                    <Link className="navbar__menu__items" to='/product'>Product</Link>
                    <Link className="navbar__menu__items" to='/contact'>Contact</Link>
                </div>

            </div>

        </div>
    )
}

export default Navbar
