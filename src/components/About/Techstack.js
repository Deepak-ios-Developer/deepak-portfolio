import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  SiFlutter, 
  SiDart, 
  SiFirebase, 
  SiSqlite,
  SiAndroid,
  SiApple,
  SiGit,
  SiPostgresql,
  SiPostman,
  SiAmazonaws,
  SiDocker,
  SiGraphql,
  SiVisualstudiocode,
  SiAndroidstudio,
  SiFigma
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter fontSize={"24px"} />
        <div className="tech-icons-text">Flutter</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDart fontSize={"24px"} />
        <div className="tech-icons-text">Dart</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase fontSize={"24px"} />
        <div className="tech-icons-text">Firebase</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroid fontSize={"24px"} />
        <div className="tech-icons-text">Android</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApple fontSize={"24px"} />
        <div className="tech-icons-text">iOS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit fontSize={"24px"} />
        <div className="tech-icons-text">Git</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter fontSize={"24px"} />
        <div className="tech-icons-text">Provider/GetX/Bloc</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSqlite fontSize={"24px"} />
        <div className="tech-icons-text">SQLite</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbApi fontSize={"24px"} />
        <div className="tech-icons-text">REST API</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGraphql fontSize={"24px"} />
        <div className="tech-icons-text">GraphQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman fontSize={"24px"} />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker fontSize={"24px"} />
        <div className="tech-icons-text">Docker</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws fontSize={"24px"} />
        <div className="tech-icons-text">AWS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql fontSize={"24px"} />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode fontSize={"24px"} />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio fontSize={"24px"} />
        <div className="tech-icons-text">Android Studio</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma fontSize={"24px"} />
        <div className="tech-icons-text">Figma</div>
      </Col>
    </Row>
  );
}

export default Techstack;