import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import api from '../../services/api';

import Header from '../../components/Header';
import PokemonCard from '../../components/PokemonCard';

interface IPokemon {
  name: string;
  url: string;
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

  useEffect(() => {
    async function loadPokemons(): Promise<void> {
      const { data } = await api.get<IPokemons>('/pokemon');

      setPokemons(data);
    }

    loadPokemons();
  }, []);

  return (
    <>
      <Header />
      <Container fluid>
        <Row className="d-flex">
          <Col md="9" className="d-flex-wrap">
            <Row>
              {pokemons &&
                pokemons.results.map(pokemon => (
                  <Col md="auto">
                    <PokemonCard name={pokemon.name} url={pokemon.url} />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col md="3" className="d-flex">
            <h1>carrinho</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Pokedex;
