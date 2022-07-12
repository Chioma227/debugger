import React from 'react'
import { motion } from 'framer-motion'
import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const Food = (props) => {

    const { ref, inView } = useInView()
    const animation2 = useAnimation()
    useEffect(() => {
        if (inView) {
            animation2.start({
                x: [80, 0],
                transition: { type: "tween", duration: 3 }
            })
        }
    }, [inView])

    return (
        <div>
            <motion.div
                ref={ref}
                animate={animation2}
                className='container2'>
                <img src={props.img} alt="dashboard" />
                <div className='image__overlay'>
                    <h2>VICTORYA FOOD SITE</h2>
                    <a target='_blank' rel="noreferrer" href="http://..." className='btn'>VIEW</a>
                </div>
            </motion.div>
        </div>
    )
}

export default Food
