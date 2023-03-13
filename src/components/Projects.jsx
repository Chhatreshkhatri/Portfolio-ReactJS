import { Container, Row, Col, Tab, Nav} from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import amazonproject from "../assets/img/amazonproject.webp";
import ramaacreations from "../assets/img/ramaacreations.webp";
import mychatproject from "../assets/img/mychatproject.webp";
import stackoverflowproject from "../assets/img/stackoverflowclone.webp";
import "animate.css";
import TrackVisibility from "react-on-screen";
import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';


function Projects() {
  const projects1 = [
    {
      title: "Amazon-clone",
      description: "An-Ecommerce website",
      imgUrl: amazonproject,
      link: 'https://amazonclone.chhatreshkhatri.com/',
      sourceCode: 'https://github.com/Chhatreshkhatri/amazon-clone'
    },
  ];
  const projects2 = [
    {
      title: "Ramaa Creations",
      description: "An-Ecommerce Jewellery website",
      imgUrl: ramaacreations,
      link: 'http://w-58018-23029-15377.4724382204.sites.hkalimatch01.shopali.net/',
      sourceCode: 'https://www.alibabacloud.com/blog/project-showcase-%7C-ramaa-creations_598812'
    },
  ];
  const projects3 = [
    {
      title: "MyChat",
      description: "An android chat application",
      imgUrl: mychatproject,
      link: 'https://github.com/Chhatreshkhatri/MyChat',
      sourceCode: 'https://github.com/Chhatreshkhatri/MyChat'
    },
  ];
  const projects4 = [
    {
      title: "StackOverflow-clone",
      description: "A question-answer website with chatbot",
      imgUrl: stackoverflowproject,
      link: 'https://soclone.chhatreshkhatri.com/',
      sourceCode: 'https://github.com/Chhatreshkhatri/stack-overflow-clone'
    },
  ];
  return (
    <HelmetProvider>
    <section className="project" id="projects">
      <Helmet>
        <title>Portfolio | Chhatresh Khatri | Projects</title>
        <meta name="description" content="Projects made by Chhatresh Khatri" />
      </Helmet>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h1>Projects</h1>
                <h2 className="project_p">Some of the projects that I have built</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" fill>
                    <Nav.Item>
                      <Nav.Link eventKey="first">Project-1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Project-2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Project-3</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Project-4</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <p><strong>RAMAA CREATIONS:</strong> An e-commerce Jewellery website.</p>
                      <p><strong>Built using:</strong> Alicms tool at Alibaba Cloud Low-Code Development Contest 2022.</p>
                      <p>Secured <strong>Second</strong> position out of 2043 participants.</p>
                      <Row className="row-item">
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">                      
                      <p><strong>StackOverflow-clone:</strong> A question-answer website with chatbot feature.</p>
                      <p><strong>Technology stack used:</strong></p>
                      <p><strong>Client-side:</strong> axios, jwt-decode, moment, react-copy-to-clipboard, react-router-dom, redux, react-redux, redux-thunk, react-chatbot-kit and deployed on Netlify</p>
                      <p><strong>Server-side:</strong> bcryptjs, jsonwebtoken, cors, dotenv, express, mongoose, nodemon and deployed on Back4App</p>
                      <Row className="row-item">
                        {
                          projects4.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p><strong>MyChat:</strong> An android chat application</p>
                      <p><strong>Built using:</strong> Java, Firebase firestore, Git & Github with android studio</p>
                      <Row className="row-item">
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      
                      <p><strong>Amazon-clone:</strong> An e-commerce website</p>
                      <p><strong>Technologies used:</strong> ReactJS, axios, firebase, stripe, Git & Github with Visual Studio Code</p>
                      <Row className="row-item">
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>

                
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
    </HelmetProvider>
  )
};
export default Projects;