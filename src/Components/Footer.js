import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

const IconStyle = {
    fontSize: "20px",
    marginRight: "16px"
}

const Footer = () => {
  return (
    <div>
            <footer>
                <div className='footer_items'>
                    <h2>CHIOMA'S PORTFOLIO</h2>
                    <div className='icons2'>
                       <a target="_blank" rel="noreferrer" href="https://twitter.com/Assuran85757998">
                       <BsTwitter style={IconStyle} />
                       </a>
                       <a target="_blank" rel="noreferrer" href="https://github.com/Chioma227/debugger">
                       <BsGithub style={IconStyle} />
                       </a>
                        <a target="_blank" rel="noreferrer" href="https://web.facebook.com/profile.php?id=100068477616692">
                        <BsFacebook style={IconStyle} />
                        </a>
                       <a target="_blank" rel="noreferrer" href="https://...">
                       <BsInstagram style={IconStyle} />
                       </a>
                       <a href="https://...">
                        <BsLinkedin style={IconStyle}/>
                       </a>
                    </div>
                    <p>2022, All rights reserved.</p>
                </div>
            </footer>
    </div>
  )
}

export default Footer
