import React from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { FiMoon, FiSun } from 'react-icons/fi';
import useDarkMode from 'use-dark-mode';
import './styles.css';

const DropdownPage = () => {
    const darkMode = useDarkMode(false);
  return (
      <MDBDropdown size="sm">
        <MDBDropdownToggle caret color="danger">
        Themas
        </MDBDropdownToggle>
        <MDBDropdownMenu color="danger" basic>
          <MDBDropdownItem onClick={darkMode.disable}><FiSun /></MDBDropdownItem>
          <MDBDropdownItem onClick={darkMode.enable}><FiMoon /></MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
  );
}

export default DropdownPage;