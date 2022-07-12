import React from 'react'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'

const Fylo = (props) => {

    const { ref, inView } = useInView()
    const animation4 = useAnimation()
    useEffect(() => {
        if (inView) {
            animation4.start({
                x: [-80, 0],
                transition: { type: "tween", duration: 3 }
            })
        }
    }, [inView])


    return (
        <div>
            <motion.div
                ref={ref}
                animate={animation4}
                className='container4'>
                <img src={props.img} alt="dashboard" />
                <div className='image__overlay'>
                    <h2>FYLO</h2>
                    <a target='_blank' rel="noreferrer" href="http://..." className='btn'>VIEW</a>
                </div>
            </motion.div>
        </div>
    )
}

export default Fylo
