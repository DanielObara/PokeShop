/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import pokebola from '../../assets/pokebola.png';
import { Total } from './styles';

interface IProps {
  cart: Array<IPokemon>;
}

interface IPokemon {
  name: string;
  url: string;
  price: number;
}

const Cart: React.FC<IProps> = props => {
  const { cart } = props;

  const total = cart.reduce((totalSum, product) => {
    totalSum += product.price;
    return totalSum;
  }, 0);

  return (
    <>
      <Card className="mt-2 ">
        <h2>
          <img src={pokebola} alt="Pokemon Cart" />
          Pokemon Cart
        </h2>
        <hr />
        <ul>
          {cart.map(pokemon => (
            <li key={pokemon.name}>
              {`${pokemon.name} - Valor: ${pokemon.price}`}
            </li>
          ))}
        </ul>
        <Total>
          Total:
          <span>
            R$
            {total}
          </span>
        </Total>
      </Card>
    </>
  );
};

export default Cart;
