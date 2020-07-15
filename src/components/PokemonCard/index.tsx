/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Badge } from 'react-bootstrap';
import { TypeButton } from '../TypesButton/styles';
import { CardImage, CardImageContainer } from './styles';

interface IProps {
  name: string;
  url: string;
  price: number;
}
interface IPokemonDetail {
  id: number;
  sprites: {
    front_default: string;
  };
  types: Array<IType>;
}

interface IType {
  type: {
    name: string;
  };
}

const PokemonCard: React.FC<IProps> = ({ name, url, price }: IProps) => {
  const [pokeDetails, setPokeDetails] = useState<IPokemonDetail>();

  function firstLetterUpperCase(): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  useEffect(() => {
    async function loadPokemonImg(address: string): Promise<void> {
      const { data } = await axios.get<IPokemonDetail>(`${address}`);
      const { id, sprites, types } = data;

      setPokeDetails({ id, sprites, types });
    }

    loadPokemonImg(url);
  }, [url]);

  return (
    <>
      {pokeDetails && (
        <Card style={{ width: '12rem' }}>
          <CardImageContainer>
            {/* <Card.Img variant="top" src={pokeDetails.sprites.front_default} /> */}
            <CardImage variant="top" src={pokeDetails.sprites.front_default} />
          </CardImageContainer>
          <Card.Body>
            <Badge variant="secondary">{`# ${pokeDetails.id}`}</Badge>
            <Card.Title className="mb-0">{firstLetterUpperCase()}</Card.Title>
            {pokeDetails.types.map(({ type }) => (
              <TypeButton
                className="mr-1 mb-2"
                type={type.name}
                key={type.name}
              >
                {type.name}
              </TypeButton>
            ))}
            <Card.Subtitle className="mb-1">
              Preço: R$
              {price}
              ,00
            </Card.Subtitle>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default PokemonCard;
