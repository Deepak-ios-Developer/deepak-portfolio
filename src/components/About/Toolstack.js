import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  SiAndroidstudio,
  SiVisualstudiocode,
  SiXcode,
  SiGooglechrome,
  SiWindows,
  SiApple,
  SiLinux,
  SiGithub,
  SiGitlab,
  SiFigma
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio fontSize={"24px"} />
        <div className="tech-icons-text">Android Studio</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode fontSize={"24px"} />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXcode fontSize={"24px"} />
        <div className="tech-icons-text">Xcode</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandVscode fontSize={"24px"} />
        <div className="tech-icons-text">Cursor</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglechrome fontSize={"24px"} />
        <div className="tech-icons-text">Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma fontSize={"24px"} />
        <div className="tech-icons-text">Figma</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub fontSize={"24px"} />
        <div className="tech-icons-text">GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApple fontSize={"24px"} />
        <div className="tech-icons-text">macOS</div>
      </Col>
    </Row>
  );
}

export default Toolstack;