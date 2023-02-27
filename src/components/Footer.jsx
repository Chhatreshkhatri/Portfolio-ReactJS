import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Socialicon from "./Socialicon";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center name-copyright">
          <Col sm={true}>
            <h3 className="nameGradient"><span> CHHATRESH KHATRI</span></h3>
            <p>&copy; 2023 Copyright by Chhatresh Khatri All rights reserved</p>
          </Col>
          <Col sm={true} className="text-center text-sm-end">
            <Socialicon />
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
 export default Footer;