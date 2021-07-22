import { slide as Menu } from 'react-burger-menu'
import React from 'react'; 

export default class Hamburger extends React.Component {
  showSettings (event) {
    event.preventDefault();

  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/">About</a>
        <a id="gallery" className="menu-item" href="/gallery">Gallery</a>
        <a id="services" className="menu-item" href="/services">Services</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        {/* <a onClick={ this.showSettings } className="menu-item--small" href="/">Settings</a> */}
      </Menu>
    );
  }
}