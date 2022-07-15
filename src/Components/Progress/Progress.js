import React from "react"
import "./progress.css"
import styled from "styled-components"

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
  return (

    <div>
      <PStyle>
        <section>
          <SStyle>SKILLS</SStyle>
          <LineStyle></LineStyle>
          <p>
            Communication
          </p>
          <div className='my_progress'>
            <div class="progress">
              <div class="color1">
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
            <div class="progress">
              <div class="color2">
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
            <div class="progress">
              <div class="color3">
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
            <div class="progress">
              <div class="color4">
                <p className='percent'>85%</p>
              </div>
            </div>
          </div>
        </section>
      </PStyle>
      <section className="practice">
        <div>
         
        </div>
      </section>
    </div>
  )
}

export default Progress
