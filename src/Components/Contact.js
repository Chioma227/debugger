import React from 'react'
import { BsEnvelopeFill } from 'react-icons/bs'
import { BsTelephoneFill } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsFillChatFill } from 'react-icons/bs'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const LineStyle = styled.div`
width:100px;
margin: auto;
height: 9px;
margin-bottom: 30px;
border-top-left-radius: 5px;
border-bottom-right-radius: 5px;
background-image: linear-gradient(to bottom, #BE36B3, #845EC2);
`

const Contact = () => {
    const { ref, inView } = useInView()
    const myAnimation = useAnimation()
    useEffect(() => {
        if (inView) {
            myAnimation.start({
                opacity: 1,
                scale: 1,
                transition: { type: "spring", duration: 2.2, bounce: 0.4 }
            })
        }
        if (!inView) {
            myAnimation.start({
                opacity: 0,
                scale: 0
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView])
    return (
        <div id='contact'>
            <h2>CONTACT ME</h2>
            <LineStyle className='line_through'></LineStyle>
            <motion.section
                ref={ref}
                animate={myAnimation}
                className='contact'>
                <div className='contact_details'>
                    <article>
                        <div className='label'>
                            <BsEnvelopeFill /> <span>Email</span>
                        </div>
                        <p><a href="mailto:chiomamary.o12@gmail.com">chiomamary.o12@gmail.com</a></p>
                    </article>

                    <article>
                        <div className='label'>
                            <BsTelephoneFill /> <span>Phone</span>
                        </div>
                        <p>
                            <a href="tel:+09023124367">09023124367</a>
                        </p>
                    </article>

                    <article>
                        <div className='label'>
                            <BsFillChatFill /> <span>Socials</span>
                        </div>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/Assuran85757998">
                            <BsTwitter />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/Chioma227/debugger">
                            <BsGithub />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://web.facebook.com/profile.php?id=100068477616692">
                            <BsFacebook />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://...">
                            <BsInstagram />
                        </a>
                        <a href="https://...">
                            <BsLinkedin />
                        </a>
                    </article>
                </div>
                <div>
                    <form action="#" method="POST" id='form'>
                        <div className='inputs'>
                            <input type="text" name="name" placeholder='name' required />
                            <input type="email" name="email" placeholder='email' required />
                        </div>
                        <textarea name="message" id="" cols="30" rows="10" placeholder='Type message here'></textarea>
                        <button type="submit" id='submit'>send Message</button>
                    </form>
                </div>
            </motion.section>
        </div>
    )
}

export default Contact
