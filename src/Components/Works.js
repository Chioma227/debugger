import React from 'react'
import dashboard from '../Images/Screenshot (210).png'
import victoriya from '../Images/Screenshot (211).png'
import travel from '../Images/Screenshot (212).png'
import fylo from '../Images/Screenshot (213).png'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const HStyle = styled.div`
text-align-center;
color:white;
`

const Works = () => {
    const [ref, inView] = useInView()
    const animation = useAnimation()
    useEffect(() => {
        if (inView) {
            animation.start({
                y: [-80, 0],
                transition: { type: "tween", duration: 3 }
            })
        }

    }, [inView])

    const [ref2, inView2] = useInView()
    const animation2 = useAnimation()
    useEffect(() => {
        if (inView2) {
            animation2.start({
                x: [80, 0],
                transition: { type: "tween", duration: 3 }
            })
        }
    }, [inView2])

    const [ref3, inView3] = useInView()
    const animation3 = useAnimation()
    useEffect(() => {
        if (inView3) {
            animation3.start({
                y: [80, 0],
                transition: { type: "tween", duration: 3 }
            })
        }
    }, [inView3])


    const [ref4, inView4] = useInView()
    const animation4 = useAnimation()
    useEffect(() => {
        if (inView4) {
            animation4.start({
                x: [-80, 0],
                transition: { type: "tween", duration: 3 }
            })
        }
    }, [inView4])



    return (
        <div>
            <HStyle>
                <h1>RECENT WORKS</h1>
            </HStyle>
            <div className='works__wrapper'>
                <motion.div ref={ref} animate={animation}
                    // transition={{ type: "tween", duration: 3 }}  
                    className='container1'>
                    <img src={dashboard} alt="dashboard" />
                    <div className='image__overlay'>
                        <h2>ADMIN DASHBOARD</h2>
                        <a target='_blank' rel="noreferrer" href="http://..." className='btn'>VIEW</a>
                    </div>
                </motion.div>
                <motion.div
                    ref={ref2}
                    animate={animation2}

                    className='container2'>
                    <img src={victoriya} alt="dashboard" />
                    <div className='image__overlay'>
                        <h2>VICTORYA FOOD SITE</h2>
                        <a target='_blank' rel="noreferrer" href="http://..." className='btn'>VIEW</a>
                    </div>
                </motion.div>
                <motion.div
                    ref={ref3}
                    animate={animation3}
                    className='container3'>
                    <img src={travel} alt="dashboard" />
                    <div className='image__overlay'>
                        <h2>TRAVEL JOURNAL</h2>
                        <a target='_blank' rel="noreferrer" href="http://..." className='btn'>VIEW</a>
                    </div>
                </motion.div>
                <motion.div
                    ref={ref4}
                    animate={animation4}
                    className='container4'>
                    <img src={fylo} alt="dashboard" />
                    <div className='image__overlay'>
                        <h2>FYLO</h2>
                        <a target='_blank' rel="noreferrer" href="http://..." className='btn'>VIEW</a>
                    </div>
                </motion.div>
                <motion.div className='container5'>
                    <img src={dashboard} alt="dashboard" />
                    <div className='image__overlay'>
                        <h2>ADMIN DASHBOARD</h2>
                        <a target='_blank' rel="noreferrer" href="http://..." className='btn'>VIEW</a>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Works
