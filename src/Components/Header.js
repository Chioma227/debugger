import React from 'react'
// import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
  window.addEventListener('scroll', () => {
    let header = document.querySelector('.navbar');
    header.classList.toggle('sticky', window.scrollY > 100)
  })
  let navi = document.querySelector("ul")
  
  const ShowLinks =() => {
      navi.classList.add("active")
  }
  const HideLinks =() => {
      navi.classList.remove("active")
  }

  return (

    <div id='home'>

      <div>
        <nav className='navbar'>

          <ul>
            <i class="fa fa-times" aria-hidden="true" id='close' onClick={HideLinks}></i>
            <li>
              <Link to="#home" smooth >home</Link>
            </li>
            <li>
              <Link to="#about" smooth>about</Link>
            </li>
            <li>
              <Link to="#team" smooth >team</Link>
            </li>
            <li>
              <Link to="#works" smooth >works</Link>
            </li>
            <li>
              <Link to="#contact" smooth >contact</Link>
            </li>
          </ul>

          <input type="checkbox" id="check" />
          <label htmlFor="check" className='menu'>
            <i class="fa fa-bars" aria-hidden="true" onClick={ShowLinks}></i>
          </label>
        </nav>
      </div>

    </div>
  )
}

export default Header
