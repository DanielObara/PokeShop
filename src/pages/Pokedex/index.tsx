import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../components/Header';
import PokemonCard from '../../components/PokemonCard';
// import logo from './Pokeshop.svg';

const Pokedex: React.FC = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col className="">
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
          </Col>
          <Col className="bg-dark-gray"> 2 of 2</Col>
        </Row>
      </Container>
    </>
  );
};

export default Pokedex;
