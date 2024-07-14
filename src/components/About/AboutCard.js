import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mani Pallavi S </span>
            from <span className="purple"> Chennai, India.</span>
            <br />
            I am currently employed as a React developer at Meythoma International.
            <br />
            I have completed Diploma in Electronics and Communication Engineering at Sri Venkatachapathy Polytechnic
            College in Villupuram.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Pallavi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
