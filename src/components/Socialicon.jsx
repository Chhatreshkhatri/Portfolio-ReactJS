import React, { Component } from 'react'
import linkedin from "../assets/img/linkedin.svg";
import github from "../assets/img/Github.svg";
import instagram from "../assets/img/Instagram.svg";
import email from "../assets/img/envelope.svg";

export class Socialicon extends Component {
  render() {
    return (
        <div className="social-icon">
        <a href="https://www.linkedin.com/in/chhatresh/" target="_blank" rel='noreferrer'><img src={linkedin} alt="linkedin" /></a>
        <a href="https://github.com/Chhatreshkhatri" target="_blank" rel='noreferrer'><img src={github} alt="github" /></a>
        <a href="https://www.instagram.com/chhatreshkhatri/" target="_blank" rel='noreferrer'><img src={instagram} alt="instagram" /></a>
        <a href="mailto:contact@chhatreshkhatri.com" target="_blank" rel='noreferrer'><img src={email} alt="email" /></a>
      </div>
    )
  }
}

export default Socialicon