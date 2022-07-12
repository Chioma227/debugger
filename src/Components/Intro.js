import React from 'react'
import { animate, motion } from 'framer-motion'
import Author from '../Images/author.jpg'
import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const Intro = () => {
    const { ref, inView } = useInView()
    const animation = useAnimation()
    useEffect(() => {
        if (inView) {
            animation.start({
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 3, delay: 0.4 }
            })
        }
    }, [inView])
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

                <motion.div
                    ref={ref}
                    animate={animation}
                    className='about-img'>
                    <img src={Author} alt="" />
                </motion.div>
            </div>
        </div>
    )
}

export default Intro
