import React from 'react'
// import styled from 'styled-components'
import Hero from './Hero'


const Header = () => {
  window.addEventListener('scroll', () => {
    let header = document.querySelector('.navbar');
    header.classList.toggle('sticky', window.scrollY > 100)
  })
  return (
    <div>

      <div>
        <nav className='navbar'>
         
          <ul>
            <li>
              <a href="http://home" className='home'>home</a>
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
          <input type="checkbox" id="check" />
          <label htmlFor="check"  className='menu'>
            <i class="fa fa-bars" aria-hidden="true"></i>
          </label>
        </nav>
      </div>
     
    </div>
  )
}

export default Header
