import React from 'react'
import { motion } from 'framer-motion'
const Hero = () => {
    return (
        <div>
            <div className='hero'>
                <div className='section1'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="explore"
                    >
                        Welcome To Explore
                    </motion.div>
                    <motion.h3 initial={{ opacity: 0 }}
                        animate={{ opacity: 1, x: [-90, 0] }}
                        transition={{ type: "tween", duration: 1, delay: 0.6 }}
                        key="logoText" className='name'>
                        CHIOMA'S PORTFOLIO
                    </motion.h3>
                    <motion.h5 initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: 20 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "tween", duration: 2, delay: 0.7 }}
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
