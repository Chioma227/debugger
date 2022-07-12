import React from 'react'
// import dashboard from '../Images/Screenshot (210).png'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'

const Dashboard = (props) => {

    const {ref, inView} = useInView()
    const animation = useAnimation()
    useEffect(() => {
        if (inView) {
            animation.start({
                y: [-80, 0],
                transition: { type: "tween", duration: 3 }
            })
        }

    }, [inView])

  return (
    <div>
       <motion.div ref={ref} animate={animation}
                    // transition={{ type: "tween", duration: 3 }}  
                    className='container1'>
                    <img src={props.img} alt="dashboard" />
                    <div className='image__overlay'>
                        <h2>ADMIN DASHBOARD</h2>
                        <a target='_blank' rel="noreferrer" href="http://..." className='btn'>VIEW</a>
                    </div>
                </motion.div>
    </div>
  )
}

export default Dashboard
