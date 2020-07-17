import React, { useState, useEffect, FormEvent } from 'react';
import {
  Container,
  Row,
  Col,
  Spinner,
  Button,
  Form,
  FormControl,
  DropdownButton,
  Dropdown,
  Card,
} from 'react-bootstrap';

import api from '../../services/api';

import Header from '../../components/Header';
import PokemonCard from '../../components/PokemonCard';
import { TypeButton } from '../../components/TypesButton/styles';
import Cart from '../../components/Cart';

interface IType {
  name: string;
}
interface IPokemon {
  name: string;
  url: string;
  price: number;
}
interface IPokemon {
  name: string;
  url: string;
  price: number;
}
interface IPokemonByType {
  pokemon: IPokemon;
}
interface IPokemons {
  count: number;
  next: string;
  previous: string | null;
  results: Array<IPokemon>;
  pokemon: Array<IPokemonByType>;
}

const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemons>();
  const [modalOpen, setModalOpen] = useState(false);
  const [typeFilter, setTypeFilter] = useState('');
  const [types, setTypes] = useState<IType[]>([]);
  const [cart, setCart] = useState<IPokemon[]>([]);

  useEffect(() => {
    async function loadTypes(): Promise<void> {
      const { data } = await api.get('/type');
      const { results } = data;

      setTypes(results);
    }

    loadTypes();
  }, []);

  useEffect(() => {
    async function loadPokemons(): Promise<void> {
      const { data } = typeFilter
        ? await api.get<IPokemons>(`/type/${typeFilter}`)
        : await api.get<IPokemons>(`/pokemon`);

      let results;
      if (data.pokemon) {
        results = data.pokemon.map(
          ({ pokemon }, i): IPokemon => ({
            ...pokemon,
            price: i * 32 + 10,
          }),
        );
      } else {
        results = data.results.map(
          (pokemon, i): IPokemon => ({
            ...pokemon,
            price: i * 32 + 10,
          }),
        );
      }

      data.results = results;
      setPokemons(data);
    }

    loadPokemons();
  }, [typeFilter]);

  return (
    <>
      <Header />
      <Container fluid>
        <Form inline className="mt-2">
          <DropdownButton
            id="dropdown-button-drop"
            drop="down"
            variant="secondary"
            title="Tipos"
            className="mr-auto"
          >
            {types.length > 0 &&
              types.map(curr => (
                <Dropdown.Item key={curr.name}>
                  <TypeButton
                    type={curr.name}
                    key={curr.name}
                    onClick={() => {
                      setTypeFilter(curr.name);
                    }}
                  >
                    {curr.name}
                  </TypeButton>
                </Dropdown.Item>
              ))}
          </DropdownButton>
        </Form>
        {!pokemons ? (
          <Row className="d-flex justify-content-center align-items-center">
            <Col xs={12} sm={4} md={4}>
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </Col>
          </Row>
        ) : (
          <Row className="d-flex">
            <Col md="9">
              <Row>
                {pokemons &&
                  pokemons?.results.map(pokemon => (
                    <Col md="auto" className="mb-3">
                      <PokemonCard
                        name={pokemon.name}
                        url={pokemon.url}
                        price={pokemon.price}
                        addToCart={() => setCart([...cart, pokemon])}
                      />
                    </Col>
                  ))}
              </Row>
            </Col>
            <Col md="3" className="d-flex">
              <Container>
                <Cart cart={cart} />
              </Container>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default Pokedex;
