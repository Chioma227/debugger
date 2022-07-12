import React from 'react'

import { motion } from 'framer-motion'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const Travel = (props) => {

    const {ref, inView} = useInView()
    const animation3 = useAnimation()
    useEffect(() => {
        if (inView) {
            animation3.start({
                y: [80, 0],
                transition: { type: "tween", duration: 3 }
            })
        }
    }, [inView])


  return (
    <div>
       <motion.div
                    ref={ref}
                    animate={animation3}
                    className='container3'>
                    <img src={props.img} alt="dashboard" />
                    <div className='image__overlay'>
                        <h2>TRAVEL JOURNAL</h2>
                        <a target='_blank' rel="noreferrer" href="http://..." className='btn'>VIEW</a>
                    </div>
                </motion.div>
    </div>
  )
}

export default Travel
