import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, 
} from 'reactstrap';

const MyNav = (props) => {
    const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="light" light>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        {/* <NavbarBrand href="/" className="mr-auto">Q U I N C Y  H I C K S</NavbarBrand> */}
        <h3>Quincy Hicks</h3>
        <p id="contact"> CONTACT</p>

        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MyNav;