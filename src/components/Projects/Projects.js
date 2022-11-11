import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import smartshoe from "../../Assets/Projects/smartshoe.jfif";
import energypacProject from "../../Assets/Projects/energypacProject.jpg";
import rpa2 from "../../Assets/Projects/rpa2.jfif";
import HRMS from "../../Assets/Projects/HRMS.png";
// import taxDigitization from "../../Assets/Projects/taxDigitization.png";
import attendance from "../../Assets/Projects/attendance.jpg";
// import chatify from "../../Assets/Projects/chatify.png";
import rpa3 from "../../Assets/Projects/rpa3.jfif";
import rpa1 from "../../Assets/Projects/rpa1.jpg";
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
              imgPath={rpa3}
              isBlog={false}
              title="Batch Process Automation(RPA)"
              description="Its a RPA bot developed using Microsoft Power automate and VBScript, a bulk record of company names , address, city and other details are collected and feed to the bot , the bot cross match the bulk records with SAP System and generates the match entry Along with their respective ID , contact person ,person id, email etc."
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rpa2}
              isBlog={false}
              title="Payments From Lawyers(RPA)"
              description="Its a RPA bot developed using Microsoft Power automate and VBScript which detects some specific records in bank statements in the SAP and corrects them accordingly"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={energypacProject}
              isBlog={false}
              title="Bank Reconciliation process(RPA)"
              description="ITs a combination of OCR with RPA where A invoice in a form of PDF or A excel ofa bank is provided to the bot , it extracts all the records from the statement and crosscheck with the GL account and updates all the record to the SAP and generates a detail report of the transactions."
      
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="GL clearing(RPA)"
              description=""
           
            />
          </Col> */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartshoe}
              isBlog={false}
              title="SmartShoe"
              description="Its a in-house project for arodek where a smart iot ble device embedded with the shoe and a mobile app was developed along with a administrator system using react js for the admin portal, node js, express and mongodb for its backend and Native Android for the application "
          
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={attendance}
              isBlog={false}
              title="arodek Attendance App"
              description="Its a in-house project of arodek where the attendance of every employee is tracked along with their respective location and time of entry and exit ,its developed using rect native and as its backend existing arodek crm system and PHP CI."
          
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rpa1}
              isBlog={false}
              title="Reimbursement Process (RPA)"
              description="Its RPA project for TÜV Rheinland Pvt where user can submit an e-form containing the details of their purchase along with an attachment file, RPA bot after receiving the response validates with the SAP system and generates an xml file along with a pdf with attached attachment file and mail it to the specific team."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HRMS}
              isBlog={false}
              title="HRMS Solution"
              description="Its a HRMS solution where the portal is developed using React JS as front-end and Node,Express and mongo db as its Back-end , its a dynamic web portal where all its components are controlled and depends upon the API responses and user Role."
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taxDigitization}
              isBlog={false}
              title="Tax Digitalization solution"
              description="Its a OCR portal developed using React js , Node,Express, mongo db and python with connection to SAP B-One."
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
