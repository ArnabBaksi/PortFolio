import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arnab Baksi </span>
            from <span className="purple"> Howrah , West Bengal, India.</span>
            <br />I am a M.E.R.N Stack developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Teaching
            </li>
      
          </ul>
{/* 
          <p style={{ color: "rgb(155 126 172)" }}>
            "There is perfection in imperfection !"{" "}
          </p>
          <footer className="blockquote-footer">Arnab</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
