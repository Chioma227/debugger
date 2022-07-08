import React from 'react'
import { motion } from 'framer-motion'
const Hero = () => {
    return (
        <div>
            <div className='hero'>
                <div className='section1'>
                    <motion.h3 initial={{ opacity: 0 }}
                        animate={{ opacity: 1, x: 100 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "tween", duration: 2, delay: 0.6 }}
                        key="logoText" className='name'>
                        CHIOMA'S PORTFOLIO
                    </motion.h3>
                    <motion.h5 initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: 20 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "tween", duration: 2, delay: 2.5 }}
                        key="logoText" 
                        className='intro'
                    >
                        Hi, I'm Chioma, a frontend developer who is passionate about solving problems with peers. Feel free to explore my portfolio
                    </motion.h5>
                </div>
            </div>
        </div>
    )
}

export default Hero
