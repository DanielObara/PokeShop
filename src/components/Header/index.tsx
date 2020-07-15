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

interface IType {
  name: string;
}
const Header: React.FC = props => {
  const [types, setTypes] = useState<IType[]>([]);

  useEffect(() => {
    async function loadTypes(): Promise<void> {
      const { data } = await api.get('/type');
      const { results } = data;

      setTypes(results);
    }

    loadTypes();
  }, []);

  // not done
  // function handlePokemonFilter(event: FormEvent<HTMLFormElement>): void {
  //   event.preventDefault();
  //   props.handleFilter(event.target.value);
  // }
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
            {types.length > 0 &&
              types.map(curr => (
                <Dropdown.Item>
                  <TypeButton type={curr.name} key={curr.name}>
                    {curr.name}
                  </TypeButton>
                </Dropdown.Item>
              ))}
          </DropdownButton>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              // onChange={e => props.handleFilter(e.target.value)}
              className="mr-sm-2"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
