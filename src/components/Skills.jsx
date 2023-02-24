import React from "react";
import cpp from '../assets/img/cpp2.svg'
import html from '../assets/img/html.svg'
import css from '../assets/img/css.svg'
import javascript from '../assets/img/javascript.svg'
import mongodb from '../assets/img/mongodb.svg'
import reactjs from '../assets/img/reactjs.svg'
import redux from '../assets/img/Redux.svg'
import express from '../assets/img/express.webp'
import mysql from '../assets/img/mysql.svg'
import git from '../assets/img/Git.svg'
import github from '../assets/img/Github.svg'
import vscode from '../assets/img/vscodesvg.svg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.webp"
import colorSharp2 from "../assets/img/color-sharp2.webp";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Tech Stack</h2>
                        <p>My Technology Stack</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item"><img src={cpp} alt="" />
                                <p>C++</p>
                            </div>
                            <div className="item"><img src={mysql} alt="" />
                                <p>MySql</p>
                            </div>
                            <div className="item"><img src={html} alt="" />
                                <p>HTML</p>
                            </div>
                            <div className="item"><img src={css} alt="" />
                                <p>CSS</p>
                            </div>
                            <div className="item"><img src={javascript} alt="" />
                                <p>JS</p>
                            </div>
                            <div className="item"><img src={reactjs} alt="" />
                                <p>ReactJS</p>
                            </div>
                            <div className="item"><img src={redux} alt="" />
                                <p>Redux</p>
                            </div>
                            <div className="item"><img src={express} alt="" />
                                <p>ExpressJS</p>
                            </div>
                            <div className="item"><img src={mongodb} alt="" />
                                <p>Mongoose</p>
                            </div>
                            <div className="item"><img src={git} alt="" />
                                <p>Git</p>
                            </div>
                            <div className="item"><img src={github} alt="" />
                                <p>Github</p>
                            </div>
                            <div className="item"><img src={vscode} alt="" />
                                <p>Visual Studio Code</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
        <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  )
}
