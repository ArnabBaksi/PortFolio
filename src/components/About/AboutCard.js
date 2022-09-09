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
            from  Howrah , West Bengal, India.
            <br />I am a M.E.R.N Stack developer.
            <br />
            <br/>
          <span style={{fontSize:'25px'}}>  Contact </span><br />
            <span className="purple">Email </span>: arnabbaksi008@gmail.com<br />
            <span className="purple">Phone</span> : +91-8777354956<br />
            <span className="purple">DOB</span> : 26/11/1996<br />
            <span className="purple">Address</span> : 300 Netaji Subhas Road
            Howrah - 711101<br />

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
            <li className="about-activity">
              <ImPointRight /> Cooking
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
