import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Deepak</span>{" "}
            from <span className="purple">Erode, TamilNadu</span>.
            <br />
            I'm currently working as a{" "}
            <span className="purple">Flutter & iOS Developer</span>, specializing in building beautiful and performant cross-platform mobile applications.
            <br />
            I have expertise in crafting seamless user experiences using{" "}
            <span className="purple">Flutter</span>,{" "}
            <span className="purple">Dart</span>, and{" "}
            <span className="purple">Swift</span>, with a focus on clean architecture and scalable code.
            <br />
            <br />
            Beyond coding, I enjoy activities that fuel my passion for technology and creativity:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building Side Projects & Experimenting with New Tech 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring UI/UX Design & Animations ✨
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Articles & Learning New Frameworks 📚
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with purpose, design with passion, and build apps that users love!"{" "}
          </p>
          <footer className="blockquote-footer">Deepak</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;