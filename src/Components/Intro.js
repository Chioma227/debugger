import React from 'react'
import { motion } from 'framer-motion'
import Author from '../Images/author.jpg'

const Intro = () => {
    return (
        <div>
            <div className='section2'>
                <motion.div>
                    <h3 className='about'>
                        Hello and welcome, I'm Chioma, a frontend web developer from Nigeria.
                        Swift in HTML, CSS, JavaScript and React.JS
                        I'm a freelancer who is focused on delivering high quality visual and technical solutions.
                        I'm highly open to hiring and looking forward to creating satisfactory websites for global and local clients.
                    </h3>
                </motion.div>
                
                <div className='about-img'>
                    <img src={Author} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Intro
