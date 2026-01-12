import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaSquareXTwitter } from "react-icons/fa6";
import {
  AiFillGithub,
  //AiOutlineTwitter,
  
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoFacebook } from "react-icons/io";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Mitia Finiavana José</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} MitiX</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
          <li className="social-icons">
                <a
                  href="https://web.facebook.com/TafitasoaMi"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <IoLogoFacebook />
                </a>
              </li>
            <li className="social-icons">
              <a
                href="https://github.com/mitiafiniavana"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://x.com/Mitia_Fi"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaSquareXTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/mitia-fi"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
                <a
                  href="mailto:mitiafiniavana.jose@gmail.com"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <BiLogoGmail />
                </a>
              </li>

          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
