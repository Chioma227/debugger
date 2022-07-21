import React from 'react'
// import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
  window.addEventListener('scroll', () => {
    let header = document.querySelector('.navbar');
    header.classList.toggle('sticky', window.scrollY > 100)
  })

  // let close = document.getElementById('close')
  // let navi = document.querySelector("ul")
  // let menu = document.querySelector('menu')

  // menu.addEventListener("click", () => {
  //     navi.classList.add("active")
  //   })

  //   close.addEventListener("click", () => {
  //     navi.classList.remove("active")
  //   })

  return (

    <div id='home'>

      <div>
        <nav className='navbar'>

          <ul>
            <i class="fa fa-times" aria-hidden="true" id='close'></i>
            <li>
              <Link to="#home" smooth href="http://home" >home</Link>
            </li>
            <li>
              <Link to="#about" smooth href="http://about" >about</Link>
            </li>
            <li>
              <Link to="#team" smooth href="http://contact" >team</Link>
            </li>
            <li>
              <Link to="#works" smooth href="http://services" >works</Link>
            </li>
            <li>
              <Link to="#contact" smooth href="http://services" >contact</Link>
            </li>
          </ul>

          <input type="checkbox" id="check" />

          <label htmlFor="check" className='menu'>
            <i class="fa fa-bars" aria-hidden="true"></i>
          </label>
        </nav>
      </div>

    </div>
  )
}

export default Header
