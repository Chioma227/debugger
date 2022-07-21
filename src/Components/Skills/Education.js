import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'


const LineStyle = styled.div`
width:80px;
height: 9px;
margin-bottom: 30px;
border-top-left-radius: 5px;
border-bottom-right-radius: 5px;
background-image: linear-gradient(to bottom, #BE36B3, #845EC2);
`

const EStyle = styled.div`
margin-bottom: 10px;
font-weight: bold;
font-size: 25px;
`
const Flex = styled.div`
display: flex;
flex-direction:column;
gap:25px;
`

const Education = () => {
  const { ref, inView } = useInView({
    threshold: 0.2
  })
  const animation = useAnimation()
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 0.8 }
      })
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        y: 30
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])
  return (
    <div>
      <motion.section ref={ref}
        animate={animation}
      >
        <div>
          <EStyle>EDUCATION</EStyle>
          <LineStyle></LineStyle>
        </div>
       <Flex>
       <div>
          <h3> State Polytechnic, Akwa Ibom, Nigeria.</h3>
          <p>National Diploma in Communication Arts</p>
        </div>
        <div>
          <h3> Coursera.org </h3>
          <p>Software Engineering (Frontend Development)</p>
        </div>
       </Flex>
      </motion.section>
    </div>
  )
}

export default Education
