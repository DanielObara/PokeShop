import React, { useState, useEffect } from 'react';
import {
  Navbar,
  Form,
  FormControl,
  Button,
  Image,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap';

import logo from './logo.svg';
import api from '../../services/api';
import { TypeButton } from '../TypesButton/styles';
import TYPES_THEME from '../../utils/Types';

const Header: React.FC = () => {
  // const [name, setName] = useState();

  return (
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
        <Navbar.Collapse id="basic-navbar-nav">
          <DropdownButton
            id="dropdown-button-drop"
            drop="down"
            variant="secondary"
            title="Tipos"
            className="mr-auto"
          >
            {TYPES_THEME.length > 0 &&
              TYPES_THEME.map(curr => (
                <Dropdown.Item>
                  <TypeButton type={curr} key={curr.name}>
                    {curr.name}
                  </TypeButton>
                </Dropdown.Item>
              ))}
          </DropdownButton>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
