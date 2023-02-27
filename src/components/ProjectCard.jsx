import React from "react";
import { Col } from "react-bootstrap";

function ProjectCard ({ title, description, imgUrl,link,sourceCode }) {
  return (
    <Col>
      <div className="proj-imgbx">
        <img src={imgUrl} className="img" alt={title}/>
        <div className="proj-txtx">
          <a href={link} target="_blank" rel="noreferrer"><h3>{title}</h3></a>
          <span><p>{description}</p></span>
          <a href={sourceCode} target="_blank" rel="noreferrer">Source Code</a>
        </div>
      </div>
      </Col>
  )
}

export default ProjectCard;