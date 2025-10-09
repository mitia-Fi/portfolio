import React from "react";
import { Col, Row } from "react-bootstrap";
//import { CgCPlusPlus } from "react-icons/cg";
import { TiHtml5 } from "react-icons/ti";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiCss3,
  //DiLaravel,
  //DiJava,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiMysql,
  
  SiSymfony,
  //SiPostgresql,
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <TiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSymfony />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      
      {/*<Col xs={4} md={2} className="tech-icons">
        <DiLaravel />
      </Col>*/}
      {/*<Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>*/}
    </Row>
  );
}

export default Techstack;
