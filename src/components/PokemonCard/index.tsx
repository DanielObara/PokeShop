import React from 'react';
import { Card, Button } from 'react-bootstrap';
import poke from '../../assets/001.png';

const PokemonCard: React.FC = () => {
  return (
    <>
      <Card style={{ width: '10rem' }}>
        <Card.Img variant="top" src={poke} />
        <Card.Body>
          <Card.Title>BURBA</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default PokemonCard;
