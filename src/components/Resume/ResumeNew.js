import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf1 from "../../Assets/../Assets/HERINIAINA TAFITASOA Mitia Finiavana José__CV FR .pdf";
import pdf2 from "../../Assets/../Assets/HERINIAINA TAFITASOA Mitia Finiavana José__CV EN .pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* ---- PDF 1 ---- */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf1}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV FRENCH VERSION
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf1} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        {/* ---- PDF 2 ---- */}
        <Row style={{ justifyContent: "center", position: "relative", marginTop: "40px" }}>
          <Button
            variant="primary"
            href={pdf2}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV ENGLISH VERSION
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf2} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
