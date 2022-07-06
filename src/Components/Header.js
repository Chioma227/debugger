import React from 'react'
import Logo from '../Images/Logo-4.png'

const Header = () => {
  return (
    <div>
      <nav className='container d-flex align-items-center justify-content-between shadow navbar'>
        <div className='col-lg-3'>
            <img src={Logo} alt="logo" className='image-fluid w-25'/>
        </div>
        <ul>
            <li>
                <a href="http://home">home</a>
            </li>
            <li>
                <a href="http://about">about</a>
            </li>
            <li>
                <a href="http://contact">contact</a>
            </li>
            <li>
                <a href="http://services">our services</a>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
