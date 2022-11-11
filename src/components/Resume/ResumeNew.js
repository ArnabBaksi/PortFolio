import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
 import pdf from "../../Assets/../Assets/Arnab-baksi-CV.pdf";
// import pdf from "https://drive.google.com/file/d/10bCUmUsmJpP--YJsn0-N9Yj0_B2A1JAa/view?usp=share_link";
// import pdf from "https://arodekkol-my.sharepoint.com/:b:/g/personal/arnab_baksi_arodek_com/EXfCowar7fdMrbNO-EbXDIgB9B1_nUwS03inGXq5LmY9Fg?e=h2TfIH"
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
// const pdf = "https://github.com/ArnabBaksi/PortFolio/raw/main/src/Assets/Arnab-baksi-CV.pdf"

function ResumeNew() {
  const [width, setWidth] = useState(1300);

  useEffect(() => {
    // console.log("hello");
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
        </Row>

        <Row className="resume"> 
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        
          </Document>
        
        </Row>
        {/* <Row className="resume"> */}
        {/* <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
        
          </Document> */}
          {/* </Row> */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
