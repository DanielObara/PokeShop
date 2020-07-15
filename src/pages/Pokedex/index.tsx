import React, { useState, useEffect, FormEvent } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

import api from '../../services/api';

import Header from '../../components/Header';
import PokemonCard from '../../components/PokemonCard';

interface IPokemon {
  name: string;
  url: string;
  price: number;
}
interface IPokemons {
  count: number;
  next: string;
  previous: string | null;
  results: Array<IPokemon>;
}

const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemons>();
  const [modalOpen, setModalOpen] = useState(false);
  const [type, setType] = useState('');

  useEffect(() => {
    async function loadPokemons(typeFilter: string): Promise<void> {
      const { data } = typeFilter
        ? await api.get<IPokemons>(`/type/${typeFilter}`)
        : await api.get<IPokemons>('/pokemon');

      const results = data.results.map(
        (pokemon, i): IPokemon => ({
          ...pokemon,
          price: i * 32 + 10,
        }),
      );
      data.results = results;
      setPokemons(data);
    }

    loadPokemons(type);
  }, [type]);

  function handleTypesFilter(newValue: string): void {
    setType(newValue);
  }

  return (
    <>
      {/* not done */}
      <Header />
      <Container fluid>
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
                  pokemons.results.map(pokemon => (
                    <Col md="auto" className="mb-3">
                      <PokemonCard
                        name={pokemon.name}
                        url={pokemon.url}
                        price={pokemon.price}
                      />
                    </Col>
                  ))}
              </Row>
            </Col>
            <Col md="3" className="d-flex">
              <Container>
                <h1>carrinho</h1>
              </Container>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default Pokedex;
