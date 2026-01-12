import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Mitia6.png";
import Tilt from "react-parallax-tilt";
import { FaSquareXTwitter } from "react-icons/fa6";
import {
  AiFillGithub,
  //AiOutlineTwitter,
  
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoFacebook } from "react-icons/io";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            about <span className="purple"> ME ! </span> 
            </h1>
            <p className="home-about-body">
            I am a passionate technology enthusiast, curious, creative and motivated; 
              <br />
              <br />Enjoying the process of creating digital designs and web experiences,  
              <br /> I am always highly motivated to continuously develop
              <i>
                <b className="purple"> my SKILLS </b>
              </i>
              <br />
              <br />
              and grow
                <b className="purple">PROFESSIONALLY. </b>
              <br />
              <br />

              I am confident in my ability     
              to bring <b className="purple">fresh ideas</b> that help

                <b className="purple">
                  {" "}
                  move projects forward.
                </b>
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>SO HOW ?</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
            <li className="social-icons">
                <a
                  href="https://web.facebook.com/TafitasoaMi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <IoLogoFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/mitia-Fi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Mitia_Fi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaSquareXTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mitia-fi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:mitiafiniavana.jose@gmail.com"
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
    </Container>
  );
}
export default Home2;
