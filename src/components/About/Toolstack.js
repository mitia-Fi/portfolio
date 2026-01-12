import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiXampp,
  SiAdobephotoshop,
  SiLinux,
  SiCanva,
  SiEclipseide,
} from "react-icons/si";
import { FaFigma } from "react-icons/fa6";
import { DiGit } from "react-icons/di";
import { CgCPlusPlus } from "react-icons/cg";

function Toolstack() {
  const tools = [
    { icon: <SiLinux />, name: "Linux" },
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <SiXampp />, name: "XAMPP" },
    { icon: <SiAdobephotoshop />, name: "Photoshop" },
    { icon: <SiCanva />, name: "Canva" },
    { icon: <DiGit />, name: "Git" },
    { icon: <CgCPlusPlus />, name: "C++ Builder" },
    { icon: <SiEclipseide />, name: "Eclipse" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((item, idx) => (
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

export default Toolstack;
