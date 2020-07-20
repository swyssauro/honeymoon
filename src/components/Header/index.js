import React, { useState, useEffect } from 'react';
import api from '../../components/API/index.js';
import { Navbar, Nav } from 'react-bootstrap';
import ButtonD from '../../components/Dark_model';

import { FiLink2, FiUser, FiCompass } from 'react-icons/fi';
import './styles.css';

export default function Header() {

  const discordID = localStorage.getItem('discordID');
  const discordName = localStorage.getItem('discordName');
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    api.get(`points/balance?user_id=${discordID}&server_id=651215889265590302`, {
    }).then(response => { setIncidents(response.data.points); })
  });

  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="/">Honeymoon</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">home</Nav.Link>
          <Nav.Link href="/identificação"><b>honey</b>points</Nav.Link>
          <Nav.Link target="_blank" href="https://github.com/swyssauro"><FiLink2 size={16} color="#00b7ff" /> my'<b>github</b> </Nav.Link>
          <Nav.Link target="_blank" href="https://discord.gg/yXqa85b"><FiLink2 size={16} color="#00b7ff" /> my'<b>server</b></Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link target="_blank"><FiUser size={16} color="#00b7ff" /> {discordName} </Nav.Link>
          <Nav.Link target="_blank"><FiCompass size={16} color="#ecbb30" /> {incidents} </Nav.Link>
          <Nav.Link><ButtonD /></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}