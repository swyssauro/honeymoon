import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import { FiLink2 } from 'react-icons/fi';
import './styles.css';

function Header() {
  return(
    <Navbar collapseOnSelect expand="lg">
    <Navbar.Brand href="/">Honeymoon</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">home</Nav.Link>
        <Nav.Link href="/honeypoints"><b>honey</b>points</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link target="_blank" href="https://github.com/swyssauro"><FiLink2 size={16} color="#00b7ff"/> my'<b>github</b> </Nav.Link>
        <Nav.Link target="_blank" href="https://discord.gg/yXqa85b"><FiLink2 size={16} color="#00b7ff"/> my'<b>server</b></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Header;