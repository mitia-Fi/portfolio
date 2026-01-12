import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf1 from "../../Assets/C.V  HERINIAINA TAFITASOA Mitia Finiavana José FR.pdf";
import pdf2 from "../../Assets/C.V  HERINIAINA TAFITASOA Mitia Finiavana José EN.pdf";
import pdf3 from "../../Assets/Diplôme Licence - Mitia.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [diplomaWidth, setDiplomaWidth] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const scaleCV = width > 1200 ? 0.8 : width > 786 ? 0.6 : 0.45;

  return (
    <Container fluid className="resume-section">
      <Particle />

      <Row className="justify-content-center mb-5">

      <Col md={5} className="text-center">

        <div className="resume-download-btn mb-3">
          <Button
            variant="primary"
            href={pdf1}
            target="_blank"
            style={{ maxWidth: "260px" }}
          >
            <AiOutlineDownload /> Télécharger CV FR
          </Button>
        </div>

        <Document file={pdf1}>
          <Page pageNumber={1} scale={scaleCV} />
        </Document>
      </Col>

      <Col md={5} className="text-center">

        <div className="resume-download-btn mb-3">
          <Button
            variant="primary"
            href={pdf2}
            target="_blank"
            style={{ maxWidth: "260px" }}
          >
            <AiOutlineDownload /> Download CV EN
          </Button>
        </div>

        <Document file={pdf2}>
          <Page pageNumber={1} scale={scaleCV} />
        </Document>
      </Col>

      </Row>


      {/* Diplôme */}
      <Row className="justify-content-center">
        <Col md={10} className="text-center">

          <div className="mb-3 px-4 py-2 fw-bold rounded"
               style={{ background: "#00c092", display: "inline-block" }}>
            Diplôme de Licence
          </div>

          <Document file={pdf3}>
            <Page
              pageNumber={1}
              onLoadSuccess={(p) => setDiplomaWidth(p.originalWidth)}
              scale={diplomaWidth ? 550 / diplomaWidth : 1}
            />
          </Document>

        </Col>
      </Row>

    </Container>
  );
}

export default ResumeNew;
