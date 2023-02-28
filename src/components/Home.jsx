import React from "react";
import { Container, Row, Col,Button } from "react-bootstrap";
import headerImg from "../assets/img/banner_pic.webp";
import { BoxArrowUpRight } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Socialicon from "./Socialicon";
import Typewriter from "typewriter-effect";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Home () {
  
  return (
    <HelmetProvider>
    <section className="banner" id="home">
      <Helmet>
        <title>Portfolio | Chhatresh Khatri</title>
      </Helmet>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={12} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={ isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Chhatresh Khatri`}{" "}
                    </h1>
                    <h1>
                    <Typewriter
                      options={{
                        strings: [
                          "Web Developer",
                          "Web Designer",
                          "Software Engineer",
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: "natural",
                      }}
                    />
                    </h1>
                  <p>
                    B.Tech in Computer Science & Engineering. Have great coding
                    skills in problem solving and web-development. A
                    Enthusiastic, self-motivated and passionate professional
                    with great interpersonal and communication skills.
                  </p>                  
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col sm={true}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={ isVisible ? "animate__animated animate__zoomIn img-header" : "img-header"}>
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
        <div className="connect_withMe">
        <Button variant="primary" href="https://drive.google.com/file/d/1lv8fSSY52bkeF7Y7w00qUr3_u1XkfP65/view" target="_blank" className="download-button">
          <BoxArrowUpRight />&ensp;View Resume
        </Button>
        <h3>Feel free to connect with me</h3><Socialicon /></div>
      </Container>
    </section>
    </HelmetProvider>
  );
}

export default Home;