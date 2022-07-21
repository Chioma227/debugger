import React, {useEffect} from 'react'
import { motion } from 'framer-motion'
import { BsTwitter } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { BsFacebook } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { BsLinkedin } from 'react-icons/bs'



const IconStyle = {
    fontSize: "25px",
    marginRight: "25px"
}
const Hero = () => {
    const {ref, inView} = useInView()
    const myAnimation = useAnimation()
    useEffect(() => {
        if(inView){
            myAnimation.start({
                x: [-200, 0],
                transition:{type: "tween", duration: 2}
            })
        }
        if(!inView){
            myAnimation.start({
                x: -1000
            })
        }
    })
    return (
        <div>
            <div className='hero'>
                <motion.div 
                 ref={ref}
                 animate={myAnimation}
                className='section1'>
                    <div className="explore">
                        Welcome To Explore
                    </div>
                    <h3 className='name'>
                        CHIOMA'S PORTFOLIO
                    </h3>
                    <h5 className='intro'>
                        Hi, I'm Chioma, a frontend developer who is passionate about solving problems with peers. Feel free to explore my portfolio
                    </h5>

                    <div className='icons'>
                       <a target="_blank" rel="noreferrer" href="https://twitter.com/Assuran85757998">
                       <BsTwitter style={IconStyle} />
                       </a>
                       <a target="_blank" rel="noreferrer" href="https://github.com/Chioma227/debugger">
                       <BsGithub style={IconStyle} />
                       </a>
                        <a target="_blank" rel="noreferrer" href="https://web.facebook.com/profile.php?id=100068477616692">
                        <BsFacebook style={IconStyle} />
                        </a>
                       <a target="_blank" rel="noreferrer" href="https://...">
                       <BsInstagram style={IconStyle} />
                       </a>
                       <a href="https://...">
                        <BsLinkedin style={IconStyle}/>
                       </a>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero
