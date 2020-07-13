/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

interface IProps {
  name: string;
  url: string;
}
interface IPokemonDetail {
  id: number;
  sprites: {
    front_default: string;
  };
}

const PokemonCard: React.FC<IProps> = ({ name, url }: IProps) => {
  const [pokeImg, setPokeImg] = useState<IPokemonDetail>();

  useEffect(() => {
    async function loadPokemonImg(address: string): Promise<void> {
      const { data } = await axios.get<IPokemonDetail>(`${address}`);
      const { id, sprites } = data;

      setPokeImg({ id, sprites });
    }

    loadPokemonImg(url);
  }, [url]);

  return (
    <>
      {pokeImg && (
        <Card style={{ width: '13rem' }}>
          <Card.Img variant="top" src={pokeImg.sprites.front_default} />
          <Card.Body>
            <Card.Title>{`#${pokeImg.id}-${name}`}</Card.Title>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default PokemonCard;
