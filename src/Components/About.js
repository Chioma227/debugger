import React from 'react'
import { motion } from 'framer-motion'
import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Progress from './Skills/progress/Progress'
import styled from 'styled-components'
import svg from "../Images/about.svg"

const AboutStyle = styled.div`
text-align: center;
font-size: 30px;
margin-bottom: 7px;
user-select:none;
`
const LineStyle = styled.div`
width:100px;
margin: auto;
height: 9px;
margin-bottom: 30px;
border-top-left-radius: 5px;
border-bottom-right-radius: 5px;
background-image: linear-gradient(to bottom, #BE36B3, #845EC2);
`

const About = () => {
    const { ref, inView } = useInView({
        threshold: 0.2
    })

    const animation = useAnimation()

    useEffect(() => { 

        if (inView) {
            animation.start({
                opacity:1,
                y: 0,
                transition: { duration:2 }
            });

        }
        if (!inView) {
            animation.start({
                opacity: 0,
               y: 70
            })
        }
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView])

    return (
        <div ref={ref} id='about'>

            <AboutStyle>ABOUT</AboutStyle>
            <LineStyle className='line_through'></LineStyle>

            <motion.div  
             animate={animation}
            className='section3'>
                 <div className='illustrator_1'>
                    <img src={svg} alt="illustrator" />
                </div>
                <div
                    className='section2'>
                    <div>
                        <h3 className='about'>
                            Hello and welcome, I'm Chioma, a frontend web developer from Nigeria.
                            Swift in HTML, CSS, JavaScript and React.JS
                            I'm a freelancer who is focused on delivering high quality visual and technical solutions.
                            I'm highly open to hiring and looking forward to creating satisfactory websites for global and local clients.
                        </h3>
                    </div>
                </div>
               
            </motion.div>
            <Progress />
        </div>
    )
}

export default About
