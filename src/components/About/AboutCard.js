import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Zain Ul Abideen </span>
            from <span className="purple"> Rawalpindi, Pakistan.</span>
            <br />
            As a Full-Stack Developer Specializing in MERN Stack, I'm seeking
            <br />
            a challenging position within a prestigious organization that provides
            <br />
            a consistently positive learning environment.
            <br /> 
            <br /> 
            Aiming to Utilize my skills and significant talent to enhance my career, 
            <br /> 
            and contribute effectively to the team's success!
            <br /> 
            <br /> 
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Zain</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
