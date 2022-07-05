import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import ifb from "../../Assets/Projects/IFB-Login.png";
import needoxy from "../../Assets/Projects/NeedOxy-home.png";
import jeewanseva from "../../Assets/Projects/jeewanseva-login.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jeewanseva}
              isBlog={false}
              title="Jeewanseva E-commerce app . "
              description="Its a complete E-commerce System for online medicine delivery which consist of 3 mobile application (Customer, Vendor and Delivery boy), a website created using react framework ,and a CRM as an Admin system using php and zend framework, it has integration with 3 different payment gateway and nepal sms gateway."
          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={needoxy}
              isBlog={false}
              title="NeedOxy"
              description="Its an arodek initiative during Covid Pandemic to connect to people with oxygen supply , the system is created using React Framework comprising mainly a app and an Admin system to control the leads , php CI and mysql was used for the Backend development"
     
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ifb}
              isBlog={false}
              title="IFB MIS Report"
              description="Its a complete system developed for IFB officials to control, update and insert their daily sales and other records with communication with their SAP ERP through Api and in return the system generates a complete detail report in a excel sheet. the whole system is built for controlling all the IFB division by specific officials only through login system, the whole system was developed using React js as its frontend and PHP CI and my sql as its backend "
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Batch Process Automation(RPA)"
              description=""
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Payments From Lawyers(RPA)"
              description=""
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Bank Reconciliation process(RPA)"
              description=""
      
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="GL clearing(RPA)"
              description=""
           
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="SmartShoe"
              description=""
          
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="arodek Attendance App"
              description=""
          
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
