import React, { useEffect} from "react"
import "./progress.css"
import styled from "styled-components"
import Education from "../Education"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

const PStyle = styled.div` 
margin-top: 8%
`

const SStyle = styled.div`
margin-bottom: 10px;
font-weight: bold;
font-size: 25px;
`
const LineStyle = styled.div`
width:80px;
height: 9px;
margin-bottom: 30px;
border-top-left-radius: 5px;
border-bottom-right-radius: 5px;
background-image: linear-gradient(to bottom, #BE36B3, #845EC2);
`

const Progress = () => {

  const { ref, inView } = useInView()
  const animation = useAnimation()
  
  useEffect(() => {
    if(inView)
    {
      animation.start({
        opacity: 1,
        y:0,
        transition: { duration: 1 }
      })
    }
    if(!inView){
      animation.start({
        opacity:0,
        y:30
      })
    }
  }, [inView])

  return (
    <PStyle  className='skills'>

      <motion.div
      initial={{ opacity: 0 }}
      ref={ref}
      animate={animation}
      >
        
        <section>
          <SStyle>SKILLS</SStyle>
          <LineStyle></LineStyle>
          <p>
            Communication
          </p>
          <div className='my_progress'>
            <div className="progress">
              <div className="color1">
                <p className='percent'>99.9%</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <p>
            Problem Solving
          </p>  
          <div className='my_progress'>
            <div className="progress">
              <div className="color2">
                <p className='percent'>80%</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <p>
            Team Work
          </p>
          <div className='my_progress'>
            <div className="progress">
              <div className="color3">
                <p className='percent'>80%</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <p>
            Leadership
          </p>
          <div className='my_progress'>
            <div className="progress">
              <div className="color4">
                <p className='percent'>85%</p>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
      <Education/>
    </PStyle>
  )
}

export default Progress
