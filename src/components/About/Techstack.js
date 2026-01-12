import React from "react";
import { Col, Row } from "react-bootstrap";
import { TiHtml5 } from "react-icons/ti";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiCss3,
  DiJava,
} from "react-icons/di";
import { SiTailwindcss, SiMysql, SiSymfony, SiExpress, SiTypescript } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";

function Techstack() {
  const icons = [
    { icon: <TiHtml5 />, name: "HTML5" },
    { icon: <DiCss3 />, name: "CSS3" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <SiTailwindcss />, name: "Tailwindcss" },
    { icon: <DiNodejs />, name: "NodeJS" },
    { icon: <DiReact />, name: "ReactJS" },
    { icon: <SiSymfony />, name: "Symfony" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiExpress />, name: "ExpressJS" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <CgCPlusPlus />, name: "C++" },
    { icon: <DiJava />, name: "Java" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {icons.map((item, idx) => (
        <Col xs={4} md={2} className="tech-icons" key={idx}>
          <div className="icon-container">
            {item.icon}
            <div className="icon-label">{item.name}</div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
