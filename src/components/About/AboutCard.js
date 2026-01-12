import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey! You can just call me <span className="purple"> Mitia </span>
            I'm from <span className="purple"> — a passionate web enthusiast from Antananarivo, Madagascar 🇲🇬</span>
            <br />
            I hold a <span className="purple">Bachelor’s degree IN Web Integration and Development</span>, and 
            I’ve been building my skills in <span className="purple">frontend development and UI/UX design</span> through <b>self-learning</b> and real projects.
            <br />
            <span className="purple">JavaScript</span> is my main playground — I enjoy working with React, Node.js and Express, 
            <br />
            and I also use <b>MySQL and MongoDB</b> to bring full-stack ideas to life.
            <br />
            <br />
            I’m curious, motivated and always learning. 
            <br />
            Every project is a new opportunity for me to improve, experiment and grow — and I genuinely enjoy that journey.
            <br />
            When I’m not coding, you’ll probably find me:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing video games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading books 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing basketball 🏀
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing chess ♟
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            Thanks for stopping by — and who knows? Maybe your next project will be our next collaboration 😉{" "}
          </p>
          <footer className="blockquote-footer">Mitia Finiavana</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
