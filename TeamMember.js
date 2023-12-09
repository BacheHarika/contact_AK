import React from "react";
import "./Client.css"

const TeamMember = (props) => {
  const {teamDetails} = props
const {name,role,imageSrc} = teamDetails
// console.log(imageSrc)
  return (
  <div className="team-card-container">
    <img src={imageSrc}   className="team-member-image"/>
    <h2 className="team-member-name">{name} </h2>
    <p className="team-role">{role}</p>
  </div>
  )
}

export default TeamMember;

