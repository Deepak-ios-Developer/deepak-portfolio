import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a Mobile Developer passionate about creating elegant, 
              performant applications that users love. My journey in mobile 
              development has been driven by a desire to craft seamless 
              experiences across platforms.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple">
                  {" "}
                  Flutter, Dart, Swift, and iOS Development{" "}
                </b>
              </i>
              — with a strong foundation in building native and cross-platform 
              mobile applications.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Cross-Platform Mobile Apps, Native iOS Applications,{" "}
                </b>
              </i>
              and exploring innovative ways to create fluid UI/UX with smooth 
              animations and optimal performance.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Flutter </b> and leveraging state management 
              solutions like{" "}
              <i>
                <b className="purple">Provider, Riverpod,</b> and{" "}
                <b className="purple">BLoC</b>
              </i>
              , while ensuring clean architecture and maintainable code.
              <br />
              <br />
              I also enjoy working with
              <i>
                <b className="purple">
                  {" "}
                  Firebase, REST APIs, GraphQL,{" "}
                </b>
              </i>
              and integrating various backend services to create full-featured 
              mobile experiences.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;