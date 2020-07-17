import React from 'react';
import { Navbar, Image } from 'react-bootstrap';

import logo from './logo.svg';

const Header: React.FC = () => (
  <>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <Image
          src={logo}
          width="150"
          className="d-inline-block align-top"
          alt="teste"
        />
      </Navbar.Brand>
    </Navbar>
  </>
);

export default Header;
