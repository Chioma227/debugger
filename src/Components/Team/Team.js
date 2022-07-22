import React from "react";
import TeamData from "./TeamData";
import styled from "styled-components";
import "../../Styles/Team.css"

const LineStyle = styled.div`
width:100px;
margin: auto;
height: 9px;
margin-bottom: 30px;
border-top-left-radius: 5px;
border-bottom-right-radius: 5px;
background-image: linear-gradient(to bottom, #BE36B3, #845EC2);
`

const Team = () => {
  return (
   <div id="team">
    <div className="title">
        <h2>Team Members</h2>
        <LineStyle></LineStyle>
    </div>
     <div className="card-container">
      {TeamData.map((member) => {
        return (
          <div className="card">
            <center className="card-img">
              <img src={member.img} alt="Member-image" />
            </center>
            <div className="card-body">
              <h3>{member.name}</h3>
              <p>{member.profession}</p>
             <div className="btn-div">
             <a href="https://..." className="btn">{member.profile}</a>
             </div>
            </div>
          </div>
        );
      })}
    </div>
   </div>
  );
};

export default Team;
