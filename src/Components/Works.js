import React from 'react'
import fylo from '../Images/Screenshot (213).png'
import victoriya from '../Images/Screenshot (211).png'
import travel from '../Images/Screenshot (212).png'
import dashboard from '../Images/Screenshot (210).png'
import { motion, useAnimation } from 'framer-motion'
import styled from 'styled-components'
import Fylo from './Workss/Fylo'
import Food from './Workss/Food'
import Dashboard from './Workss/Dashboard'
import Travel from './Workss/Travel'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'


const HStyle = styled.div`
text-align:center;
color:white;
margin-top: 80px;
`

const Works = () => {

    return (
        <div>
            <HStyle>
                <h1>RECENT WORKS</h1>
            </HStyle>

            <div className='works__wrapper'>
                <Fylo img={fylo} />
                <Food img={victoriya} />
                <Dashboard img={dashboard} />
                <Travel img={travel} />
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
