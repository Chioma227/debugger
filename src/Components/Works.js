import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Data from './Data'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const HStyle = styled.div`
text-align:center;
color:white;
margin-top: 80px;
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

const Works = () => {
    const { ref, inView } = useInView()
    const animation2 = useAnimation()
    useEffect(() => {
        if (inView) {
            animation2.start({
                y: 0,
                transition: { type: "spring", duration: 3 }
            })
        }
        if (!inView) {
            animation2.start({
                y: 100
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[inView])

    return (
        <div id="works">
            <HStyle>
                <h1>RECENT WORKS</h1>
                <LineStyle></LineStyle>
            </HStyle>
            <div className='works__wrapper'>
                {Data.map((items) => (
                    <motion.div
                        ref={ref}
                        animate={animation2}
                        className='container2'>
                        <img src={items.image} alt={items.alternative_text} />
                        <div className='image__overlay'>
                            <h2>{items.name}</h2>
                            <a target='_blank' rel="noreferrer" href="http://..." className='btn'>{items.button}</a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Works
