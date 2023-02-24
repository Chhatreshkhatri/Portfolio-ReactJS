import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Socialicon from "./Socialicon";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={8} sm={5} className="name-gradient">
            <h3>CHHATRESH KHATRI</h3>
          </Col>
          <Col className="text-center">
          <p>© 2023 Copyright by Chhatresh Khatri All rights reserved</p>
          </Col>
          <Col size={8} sm={4} className="text-center text-sm-end">
            <Socialicon />
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
