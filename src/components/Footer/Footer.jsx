import React from 'react'
import './Footer.css'
import logo from '../../assets/logo2.png'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer__container">
        <img src={logo} alt="" />
        <span>&copy; Copyrights reserved 2024</span>
        <span>Developed and Maintained by <br/>Swaasyah Solutions</span>
      </div>

    </div>
  )
}

export default Footer
