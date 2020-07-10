import React, { useState, useEffect } from 'react';
import {
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Nav,
  Image,
} from 'react-bootstrap';

import logo from './logo.svg';
import api from '../../services/api';

interface ITypes {
  name: string;
}
interface IResults {
  results: Array<ITypes>;
}

const Header: React.FC = () => {
  const [name, setName] = useState();
  const [types, setTypes] = useState<IResults[]>([]);

  useEffect(() => {
    async function loadTypes(): Promise<void> {
      const { data } = await api.get<IResults>('/type');
      const { results } = data;
      // console.log('Header:React.FC -> results', results);

      setTypes([results]);
    }

    loadTypes();
  }, []);

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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Tipos" id="basic-nav-dropdown">
              {!types.length &&
                types.map(
                  ({ name }): ITypes => (
                    <NavDropdown.Item href="#">{type.name}</NavDropdown.Item>
                  ),
                )}
            </NavDropdown>
          </Nav>
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
