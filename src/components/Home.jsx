import React from "react";
// import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/banner_pic.webp";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Socialicon from "./Socialicon";
import Typewriter from "typewriter-effect";
import { Helmet } from "react-helmet";

function Home () {
  
  return (
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
                <div className={ isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" className="img-header" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
          <button>
            Let's Connect <ArrowRightCircle size={25} />
              <div className="banner_socialIcon"><Socialicon /></div>
          </button>
      </Container>
    </section>
  );
}

export default Home;