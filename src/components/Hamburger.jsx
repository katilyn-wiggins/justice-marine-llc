import { slide as Menu } from 'react-burger-menu'
import React from 'react'; 

export default class Hamburger extends React.Component {
  showSettings (event) {
    event.preventDefault();

  }

  render () {
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="gallery" className="menu-item" href="/equipment">Equipment</a>
        <a id="services" className="menu-item" href="/services">Services</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </Menu>
    );
  }
}